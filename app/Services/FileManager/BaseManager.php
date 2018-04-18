<?php
/**
 * 功能：FileSystem抽象管理类
 *
 * @project     wemesh
 * @author      Partoo
 * @copyright   2018 StarIO Network Technology Company
 * @link        http://www.stario.net
 */

namespace App\Services\FileManager;


use Carbon\Carbon;
use Dflydev\ApacheMimeTypes\PhpRepository;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\File\Exception\UploadException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class BaseManager
{
    protected $disk;
    protected $mimeDetect;

    public function __construct()
    {
        $this->disk = Storage::disk($this->disk());
    }

    // 子类可以更改默认disk
    public function disk()
    {
        return config('filesystems.default');
    }

    public function folderInfo($folder)
    {
        $folder = $this->cleanFolder($folder);

        $breadcrumbs = $this->breadcrumbs($folder);
        $slice = array_slice($breadcrumbs, -1);
        $folderName = current($slice);
        $breadcrumbs = array_slice($breadcrumbs, 0, -1);

        $subfolders = $this->getSubfolderList($folder);

        $files = $this->getFileList($folder);

        return compact([
            'folder',
            'folderName',
            'breadcrumbs',
            'subfolders',
            'files'
        ]);
    }


    public function fileDetail($path)
    {
        $path = '/' . trim($path, '/');

        return [
            'name' => basename($path),
            'fullPath' => $path,
            'webPath' => $this->fileWebPath($path),
            'mimeType' => $this->fileMimeType($path),
            'size' => $this->fileSize($path),
            'modified' => $this->fileModified($path)
        ];
    }

    public function fileWebPath($path)
    {
        return asset("storage/" . ltrim($path, '/'));
    }

    public function store(UploadedFile $file, $dir = '', $name = '')
    {
        $hashName = empty($name)
            ? str_ireplace('.jpeg', '.jpg', $file->hashName())
            : $name;

        $mime = $file->getMimeType();

        $realPath = $this->disk->putFileAs($dir, $file, $hashName);

        return [
            'success' => true,
            'filename' => $hashName,
            'original_name' => $file->getClientOriginalName(),
            'mime' => $mime,
            'size' => $this->human_filesize($file->getClientSize()),
            'real_path' => $realPath,
            'relative_url' => "storage/$realPath",
            'url' => asset("storage/$realPath"),
        ];
    }

    public function saveRemoteFile($url, $path = 'storage/', $name = '')
    {
        $hashName = empty($name)
            ? md5($url)
            : $name;
//        $file = file_get_contents($url);
//        $size = getimagesize($url);
//        $extension = image_type_to_extension($size[2]);
//        $finished = $this->disk->put($path . $hashName . $extension, $file);
//        if ($finished) {
//            return $this->disk->url($path . $name) . $hashName . $extension;
//        }
//        return $this->disk->url($path);
        $header = array(
            'User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:45.0) Gecko/20100101 Firefox/45.0',
            'Accept-Language: zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
            'Accept-Encoding: gzip, deflate',);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($curl, CURLOPT_ENCODING, 'gzip');
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        $data = curl_exec($curl);
        $code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);
        if ($code == 200) {//把URL格式的图片转成base64_encode格式的！
            $imgBase64Code = "data:image/jpeg;base64," . base64_encode($data);
        } else {
            return response()->json(['errors' => '未能获取到图片'], 500);
        }
        $img_content = $imgBase64Code;//图片内容
        //echo $img_content;exit;
        if (preg_match('/^(data:\s*image\/(\w+);base64,)/', $img_content, $result)) {
            $type = $result[2];//得到图片类型png?jpg?gif?
            $new_file = "{$path}{$hashName}.{$type}";
            $this->disk->put($new_file, base64_decode(str_replace($result[1], '', $img_content)));
            return $new_file;
        }
    }

    public function createFolder($folder)
    {
        $this->cleanFolder($folder);

        if ($this->checkFolder($folder)) {
            throw new UploadException("The Folder exists.");
        }

        return $this->disk->makeDirectory($folder);
    }

    public function checkFile($path)
    {
        return $this->disk->exists($path);
    }

    public function checkFolder($folder)
    {
        return $this->disk->exists($folder);
    }

    public function deleteFolder($folder)
    {
        $this->cleanFolder($folder);

        $filesFolders = array_merge(
            $this->disk->directories($folder),
            $this->disk->files($folder)
        );

        if (!empty($filesFolders)) {
            return false;
        }

        return $this->disk->deleteDirectory($folder);
    }

    public function deleteFile($path)
    {
        $this->cleanFolder($path);

        return $this->disk->delete($path);
    }

    protected function cleanFolder($folder)
    {
        return '/' . trim(str_replace('..', '', $folder), '/');
    }

    protected function breadcrumbs($folder)
    {
        $folder = trim($folder, '/'); //eq: /post_img/2016/10/01/
        $crumbs = ['/' => 'root'];

        if (empty($folder)) return $crumbs;

        $folders = explode('/', $folder); // eq: ['post_img', '2016', '10', '01']
        $build = '';
        foreach ($folders as $folder) {
            $build .= '/' . $folder;
            $crumbs[$build] = $folder;
        }

        return $crumbs;
    }

    protected function fileModified($path)
    {
        return Carbon::createFromTimestamp(
            substr($this->disk->lastModified($path), 0, 10)
        )->toDateTimeString();
    }

    protected function getSubfolderList($folder)
    {
        $subfolders = [];
        foreach (array_unique($this->disk->directories($folder)) as $subfolder) {
            $subfolders["/$subfolder"] = basename($subfolder);
        }

        return $subfolders;
    }

    protected function getFileList($folder)
    {
        $files = [];

        $filesContent = $this->disk->files($folder);

        foreach ($filesContent as $file) {
            $files[] = $this->fileDetail($file);
        }

        return $files;
    }

    protected function fileMimeType($path)
    {
        return (new PhpRepository())->findType(
            pathinfo($path, PATHINFO_EXTENSION)
        );
    }

    protected function fileSize($path)
    {
        return $this->human_filesize($this->disk->size($path));
    }

    protected function human_filesize($bytes, $decimals = 2)
    {
        $size = ['B', 'kB', 'MB', 'GB', 'TB', 'PB'];

        $floor = floor((strlen($bytes) - 1) / 3);

        return sprintf("%.{$decimals}f", $bytes / pow(1024, $floor)) . @$size[$floor];
    }
}
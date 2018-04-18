<?php
/**
 * 功能：
 *
 * @project     wemesh
 * @author      Partoo
 * @copyright   2018 StarIO Network Technology Company
 * @link        http://www.stario.net
 */

namespace App\Services\FileManager;


use Carbon\Carbon;
use Symfony\Component\HttpFoundation\File\Exception\UploadException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class CloudManager extends BaseManager
{
    public function disk()
    {
        return config('filesystems.cloud');
    }

    public function getFileList($path)
    {
        $files = [];
        $filesContent = $this->disk->listContents($path);

        foreach ($filesContent as $file) {
            $files[] = $this->fileDetail($file);
        }

        return $files;
    }

    public function fileDetail($file)
    {
        return [
            'name' => $file['basename'],
            'fullPath' => $path,
            'webPath' => $this->fileWebPath($path),
            'mimeType' => $this->fileMimeType($path),
            'size' => $this->fileSize($path),
            'type' => $file['type'],
            'modified' => $this->fileModified($path)
        ];
    }

    public function fileWebPath($path)
    {
        return $this->disk->getUrl($path);
    }

    public function fileMimeType($path)
    {
        return $this->disk->getMimetype($path);
    }

    public function fileSize($path)
    {
        return human_filesize($this->disk->getSize($path));
    }

    public function fileModified($path)
    {
        return Carbon::createFromTimestamp(
            substr($this->disk->getTimestamp($path), 0, 10)
        )->toDateTimeString();
    }

    public function createFolder($folder)
    {
        $this->cleanFolder($folder);

        if ($this->checkFolder($folder)) {
            throw new UploadException("The Folder exists.");
        }

        return $this->disk->createDir($folder);
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
            'relative_url' => $realPath,
            'url' => $this->disk->getUrl($realPath),
        ];
    }

    public function copy($file, $dir = '', $name = '')
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
            'relative_url' => $realPath,
            'url' => $this->disk->getUrl($realPath),
        ];
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

        return $this->disk->deleteDir($folder);
    }
}
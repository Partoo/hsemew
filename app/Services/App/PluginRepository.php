<?php
/**
 * 功能：遍历指定apps目录下的config.json文件，并执行相关操作
 *
 * @project     wemesh
 * @author      Partoo
 * @copyright   2018 StarIO Network Technology Company
 * @link        http://www.stario.net
 */

namespace App\Services\App;


use App\Services\App\Contracts\RepositoryInterface;
use Illuminate\Support\Facades\File;

class AppRepository implements RepositoryInterface
{
    protected $path;
    protected $paths = [];

    public function __construct($path = null)
    {
        $this->path = $path;
    }

    /**
     * Get all modules.
     *
     * @return mixed
     */
    public function all()
    {
        // TODO: Implement all() method.
    }

    /**
     * Get cached modules.
     *
     * @return array
     */
    public function getCached()
    {
        // TODO: Implement getCached() method.
    }

    /**
     * Scan & get all available modules.
     *
     * @return array
     */
    public function scan()
    {
        $paths = $this->getScanPaths();
        $modules = [];
        foreach ($paths as $k => $path) {
            $files = File::glob("{$path}/config.json");
            is_array($files) || $files = [];

            dd($files);
            foreach ($files as $file) {
                $name = Json::make($file)->get('name');
                $modules[$name] = $name;
            }

            return $modules;
        }
    }

    /**
     * Get modules as modules collection instance.
     *
     */
    public function toCollection()
    {
        // TODO: Implement toCollection() method.
    }

    /**
     * Get scanned paths.
     *
     * @return array
     */
    public function getScanPaths(): array
    {
        $paths = $this->paths;
        $paths[] = $this->getPath();
        $paths = array_map(function ($path) {
            return ends_with($path, '/*') ? $path : str_finish($path, '/*');
        }, $paths);
        return $paths;
    }

    /**
     * Get list of enabled modules.
     *
     * @return mixed
     */
    public function allEnabled()
    {
        // TODO: Implement allEnabled() method.
    }

    /**
     * Get list of disabled modules.
     *
     * @return mixed
     */
    public function allDisabled()
    {
        // TODO: Implement allDisabled() method.
    }

    /**
     * Get count from all modules.
     *
     * @return int
     */
    public function count()
    {
        // TODO: Implement count() method.
    }

    /**
     * Get all ordered modules.
     *
     * @return mixed
     */
    public function getOrdered()
    {
        // TODO: Implement getOrdered() method.
    }

    /**
     * Get modules by the given status.
     *
     * @param int $status
     *
     * @return mixed
     */
    public function getByStatus($status)
    {
        // TODO: Implement getByStatus() method.
    }

    /**
     * Find a specific module.
     *
     * @param $name
     *
     * @return mixed
     */
    public function find($name)
    {
        // TODO: Implement find() method.
    }

    /**
     * Find a specific module. If there return that, otherwise throw exception.
     *
     * @param $name
     *
     * @return mixed
     */
    public function findOrFail($name)
    {
        // TODO: Implement findOrFail() method.
    }

    public function getPath(): string
    {
        return $this->path ?: config('paths.modules', base_path('Plugins'));
    }
}
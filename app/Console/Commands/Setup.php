<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Schema;

class Setup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'wm:setup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Wemesh initialize.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $tasks = [
            'php artisan key:generate',
            'php artisan migrate',
//            'php artisan db:seed --class=WMSeeder',
//            'php artisan passport:install',
//            'php artisan storage:link',
        ];

        $bar = $this->output->createProgressBar(count($tasks));
        foreach ($tasks as $task) {
            $this->performTask($task);
            $bar->advance();
        }

        $bar->finish();
        $this->comment("\n\n Mission Accomplished!\n");
    }

    protected function performTask($task)
    {
        $this->info("\n \n" . $task);
        $output = shell_exec($task);
        $this->info($output);
    }
}

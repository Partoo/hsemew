<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWemeshTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 20)->nullable();
            $table->string('nickname', 20)->nullable();
            $table->string('mobile', 12)->unique()->nullable();
            $table->string('email')->nullable();
            $table->text('avatar')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->tinyInteger('gender')->default(1);
            $table->boolean('is_admin')->default(false);
            $table->string('union_id')->unique();
            $table->string('open_id')->unique();
            $table->string('area')->nullable();
//            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type');
            $table->morphs('notifiable');
            $table->text('data');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });

        Schema::create('abilities', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 150);
            $table->string('title')->nullable();
            $table->integer('entity_id')->unsigned()->nullable();
            $table->string('entity_type', 150)->nullable();
            $table->boolean('only_owned')->default(false);
            $table->integer('scope')->nullable()->index();
            $table->timestamps();
        });

        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 150);
            $table->string('title')->nullable();
            $table->integer('level')->unsigned()->nullable();
            $table->integer('scope')->nullable()->index();
            $table->timestamps();

            $table->unique(
                ['name', 'scope'],
                'roles_name_unique'
            );
        });

        Schema::create('assigned_roles', function (Blueprint $table) {
            $table->integer('role_id')->unsigned()->index();
            $table->integer('entity_id')->unsigned();
            $table->string('entity_type', 150);
            $table->integer('scope')->nullable()->index();

            $table->index(
                ['entity_id', 'entity_type', 'scope'],
                'assigned_roles_entity_index'
            );

            $table->foreign('role_id')
                ->references('id')->on('roles')
                ->onUpdate('cascade')->onDelete('cascade');
        });

        Schema::create('permissions', function (Blueprint $table) {
            $table->integer('ability_id')->unsigned()->index();
            $table->integer('entity_id')->unsigned();
            $table->string('entity_type', 150);
            $table->boolean('forbidden')->default(false);
            $table->integer('scope')->nullable()->index();

            $table->index(
                ['entity_id', 'entity_type', 'scope'],
                'permissions_entity_index'
            );

            $table->foreign('ability_id')
                ->references('id')->on('abilities')
                ->onUpdate('cascade')->onDelete('cascade');
        });

        Schema::create('units', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->json('mp');
            $table->unsignedInteger('admin_id');
            $table->boolean('is_auth')->default(false);
            $table->timestamps();
        });

        Schema::create('apps', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 20);
            $table->string('alias', 60);
            $table->string('description', 50)->nullable();
            $table->boolean('built_in')->default(false);
            $table->json('menu');
            $table->decimal('price', 6, 2);
            $table->boolean('status')->default(false);
            $table->unsignedTinyInteger('period')->default(1)->comments('0:永久 1:每年 2:每月 3:每日');
            $table->timestamps();
        });


        Schema::create('appables', function (Blueprint $table) {
            $table->unsignedInteger('app_id');
            $table->unsignedInteger('appable_id');
            $table->string('appable_type');
            $table->dateTime('started_at');
            $table->dateTime('expired_at');
            $table->timestamps();

            $table->foreign('appable_id')
                ->references('id')
                ->on('apps')
                ->onDelete('cascade');

            $table->primary(['app_id', 'appable_id', 'appable_type']);
        });


//        Schema::create('password_resets', function (Blueprint $table) {
//            $table->string('email')->index();
//            $table->string('token');
//            $table->timestamp('created_at')->nullable();
//        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('users');
        Schema::dropIfExists('units');
        Schema::dropIfExists('apps');
        Schema::dropIfExists('appables');
        Schema::dropIfExists('permissions');
        Schema::dropIfExists('assigned_roles');
        Schema::dropIfExists('roles');
        Schema::dropIfExists('abilities');
        Schema::dropIfExists('notifications');
//        Schema::dropIfExists('password_resets');
        Schema::enableForeignKeyConstraints();
    }
}

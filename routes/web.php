<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::any('{path}', function() { //Qualquer rota que não esteja configurada aqui no Laravel será considerada rotas do Angular
    return view('index'); 
})->where('path', '.*');

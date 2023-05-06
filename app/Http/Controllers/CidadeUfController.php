<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cidade;
use App\Models\Estado;

class CidadeUfController extends Controller
{
    public function __construct(){}
    
    public function index(Request $request)
    {
    	$cidades = Cidade::all();
    	$estados = Estado::all();
        return $this->sendResponse([
            "cities"=>$cidades,
            "states"=>$estados,
        ]);
    }
}
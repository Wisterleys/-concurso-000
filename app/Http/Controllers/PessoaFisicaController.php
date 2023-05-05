<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PessoaFisica;

class PessoaFisicaController extends Controller
{
   
    public function __construct(){}

    public function store(Request $request)
    {
        $this->validate(
            $request,
            [
                'nome' => 'required',
			    'cpf' => 'required',
			    'endereco' => 'required',
			    'cidade_id' => 'required',
			    'estado_id' => 'required',
            ]
        );
        $pessoa = PessoaFisica::where('cpf', $request->cpf)->first();
        if($pessoa){
            return $this->sendResponse($pessoa,"Registro já existe!",409);
        }
        
	    $pessoa = new PessoaFisica();
	    $pessoa->nome = $request->nome;
	    $pessoa->cpf = $request->cpf;
	    $pessoa->endereco = $request->endereco;
	    $pessoa->cidade_id = $request->cidade_id;
	    $pessoa->estado_id = $request->estado_id;
	    try {
            $re = PessoaFisica::createPessoaFisica($pessoa);
            return $this->sendResponse($re,"Registro criado com sucesso!");
        } catch (\Throwable $th) {
            return $this->sendResponse($th,"Erro ao tentar gravar registro",500);
        }
       
    }
    
    public function update(Request $request)
    {
        $this->validate(
            $request,
            [
                'id' => 'required',
                'nome' => 'required',
			    'cpf' => 'required',
			    'endereco' => 'required',
			    'cidade_id' => 'required',
			    'estado_id' => 'required',
            ]
        );
        
	    $pessoa = PessoaFisica::find($request->id);
	    if($pessoa!=null){
            $pessoa->nome = $request->nome;
            $pessoa->cpf = $request->cpf;
            $pessoa->endereco = $request->endereco;
            $pessoa->cidade_id = $request->cidade_id;
            $pessoa->estado_id = $request->estado_id;
	    
            try {
                $resul = PessoaFisica::updatePessoaFisica($pessoa);
                return $this->sendResponse($resul,"Registro atualizado com sucesso!");
            } catch (\Throwable $th) {
                return $this->sendResponse($th,"Erro ao tentar atualizar registro",500);
            }
        }else{
            return $this->sendResponse([],"Nenhum registro encontrado!",404);
        }
    }

    public function index(Request $request)
    {
    	$this->validate(
            $request,
            [
                'nome' => 'nullable'
            ]
        );
        
        if(null != $request->nome){
        	$result = PessoaFisica::where('nome', $request->nome)->orderBy('nome')->get();
        	return  $this->sendResponse($result);
        }
        
        return  $this->sendResponse(PessoaFisica::orderBy('nome')->get());
    }

    public function show(Request $request, $id)
    {
        try {
            $result = PessoaFisica::loadPessoaFisicaById($id);
            if($result==null)return $this->sendResponse([],"Nenhum registro encontrado!",404);
            return  $this->sendResponse($result);
        } catch (\Throwable $th) {
            $this->sendResponse($th,"Erro ao tentar pesquisar registro!",500);
        }
    }


    public function destroy(Request $request, $id)
    {
        $pessoa = PessoaFisica::find($id);
	    
        return $this->sendResponse(PessoaFisica::deletePessoaFisica($pessoa));
    }

}

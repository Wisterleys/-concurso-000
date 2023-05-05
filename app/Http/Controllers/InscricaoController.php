<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Inscricao;

class InscricaoController extends Controller
{
    public function __construct(){}

    public function store(Request $request)
    {
        try {
            $this->validate(
                $request,
                [
                    'pessoa_fisica_id' => 'required',
                    'cargo' => 'required',
                    'situacao' => 'required'
                ]
            );
            $inscricao= Inscricao::where('pessoa_fisica_id', $request->pessoa_fisica_id)->first();
            if($inscricao){
                return $this->sendResponse($inscricao,"Registro já existe!",409);
            }
            $inscricao = new Inscricao();
            $inscricao->pessoa_fisica_id = $request->pessoa_fisica_id;
            $inscricao->cargo = $request->cargo;
            $inscricao->situacao = $request->situacao;
            
            return $this->sendResponse(
                Inscricao::createInscricao($inscricao),
                "Inscrição criada com sucesso!"
            );
        } catch (\Throwable $th) {
            return $this->sendResponse(
                $th,
                "Erro ao criar inscrição!",
                $th->status
            );
        }
    }
    
    public function update(Request $request)
    {
        try {
        $this->validate(
            $request,
            [
            	'id' => 'required',
			    'pessoa_fisica_id' => 'required',
			    'cargo' => 'required',
			    'situacao' => 'required',
            ]
        );
        
	    $inscricao = Inscricao::find($request->id);
	    if($inscricao!=null){
            $inscricao->pessoa_fisica_id = $request->pessoa_fisica_id;
            $inscricao->cargo = $request->cargo;
            $inscricao->situacao = $request->situacao;
            
            
                return $this->sendResponse(
                    Inscricao::updateInscricao($inscricao),
                    "Inscrição atualizada com sucesso!"
                );
            }else{
                return $this->sendResponse(
                    $inscricao,
                    "Nenhum registro encontrado!",
                    404
                );
            } 
        }
        catch (\Throwable $th) {
            return $this->sendResponse(
                $th,
                "Erro ao atualizar inscrição!",
                $th->status
            );
        }
    }

    public function index(Request $request)
    {
    	$this->validate(
            $request,
            [
			    'cargo' => 'nullable'
            ]
        );
        
        if(null != $request->cargo){
        	$result = Inscricao::where('cargo', $request->cargo)->orderBy('cargo')->get();
        	return $this->sendResponse($result);
        }
        
        return $this->sendResponse(Inscricao::orderBy('cargo')->get());
    }

    public function show(Request $request, $id)
    {
        try {
            $inscricao = Inscricao::showById($id);
            return $inscricao?$this->sendResponse($inscricao):$this->sendResponse([],'Nenhum registro encontrado!',404);
        } catch (\Throwable $th) {
           return $this->sendResponse($th,"Erro ao tentar encontrar registro!",$th->status);
        }
    }

    public function destroy(Request $request, $id)
    {
        $inscricao = Inscricao::find($id);
	    
        if($inscricao){
            return $this->sendResponse(Inscricao::deleteInscricao($inscricao),'Registro removido com sucesso!');
        }else{
            return $this->sendResponse([],'Nenhum registro encontrado!',404);
        }
    }

}
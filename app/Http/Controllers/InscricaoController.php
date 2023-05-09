<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Inscricao;
use App\Models\PessoaFisica;
use Illuminate\Support\Facades\DB;


class InscricaoController extends Controller
{
    public function __construct(){}

    public function store(Request $request)
    {
        try {
            $this->validate(
                $request,
                [
                    "nome" => "required",
                    "cpf" => "required",
                    "endereco" => "required",
                    "cidade_id" => "required",
                    "estado_id" => "required",
                    "cargo" => "required",
                    "situacao" => "required",
                                    
                ]
            );
            $pessoaValidacao = PessoaFisica::where('cpf', $request->cpf)->first();
            if($pessoaValidacao){
                $inscricao = Inscricao::where('pessoa_fisica_id', $pessoaValidacao->id)->first();
                if($inscricao){
                    return $this->sendResponse($inscricao,"Usuário já possui inscrição!",409);
                }
            }
            if(!$pessoaValidacao){

                $pessoa = new PessoaFisica();
                $pessoa->nome = $request->nome;
                $pessoa->cpf = $request->cpf;
                $pessoa->endereco = $request->endereco;
                $pessoa->cidade_id = $request->cidade_id;
                $pessoa->estado_id = $request->estado_id;    
                PessoaFisica::createPessoaFisica($pessoa);
                $pessoaValidacao = PessoaFisica::where('cpf', $request->cpf)->first();
            }
            
            $inscricao = new Inscricao();
            $inscricao->pessoa_fisica_id = $pessoaValidacao->id;
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
			    'situacao' => 'required',
                'nome' => 'required',
			    'cpf' => 'required',
			    'endereco' => 'required',
			    'cidade_id' => 'required',
			    'estado_id' => 'required',
            ]
        );
        
        $pessoa = PessoaFisica::where('cpf',$request->cpf)->first();
	    $inscricao = Inscricao::where('pessoa_fisica_id', $pessoa->id)->first();
	    if($inscricao&&$pessoa){
            $pessoa->nome = $request->nome;
            $pessoa->endereco = $request->endereco;
            $pessoa->cidade_id = $request->cidade_id;
            $pessoa->estado_id = $request->estado_id;
            $inscricao->pessoa_fisica_id = $request->pessoa_fisica_id;
            $inscricao->situacao = $request->situacao;
            
                $resulPes = PessoaFisica::updatePessoaFisica($pessoa);
                $resulInsc = Inscricao::updateInscricao($inscricao);
                return $this->sendResponse(
                    [$resulPes,$resulInsc],
                    "Inscrição atualizada com sucesso!"
                );
            }else{
                return $this->sendResponse(
                    [],
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

    public function show(Request $request, $search)
    {
        try {
            
            $inscricao = PessoaFisica::select(
                'inscricao.*',
                'pessoa_fisica.id as pessoa_id', 
                'pessoa_fisica.nome', 
                'pessoa_fisica.cpf', 
                'pessoa_fisica.endereco', 
                'pessoa_fisica.cidade_id', 
                'pessoa_fisica.estado_id',
                )
            ->join('inscricao', 'inscricao.pessoa_fisica_id', '=', 'pessoa_fisica.id')
            ->where(function ($query)use($search){

                $query->where('pessoa_fisica.cpf','=',$search)->orWhere('inscricao.id','=',$search);
            })
            ->get();
            
            return count($inscricao) > 0 ?$this->sendResponse($inscricao):$this->sendResponse([],'Nenhum registro encontrado!',404);
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
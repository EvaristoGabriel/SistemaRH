from Funcionario import Funcionario
from Endereco import Endereco
from Ferias import Ferias
from Pis import Pis
from Rg import Rg
from Titulo import Titulo
from Cnh import Cnh
from Ctps import Ctps
from manage import *


def cadastrar(nome, matricula, endereco_rua, endereco_cidade, endereco_estado, endereco_cep, endereco_pais,
              endereco_numero,
              endereco_complemento, endereco_bairro, nascimento, telefone, cpf, cnh_categoria, cnh_numero,
              cnh_vencimento, rg_orgao, rg_uf, rg_emissao, titulo_zona, titulo_secao, titulo_numero,
              ctps_numero, ctps_serie, ctps_uf, ctps_emissao, vale_transporte, vale_alimentacao, vale_refeicao,
              estado_civil, raca, nome_mae, tipo_sanguineo, grau_instrucao, primeiro_emprego, data_ultimo_emprego,
              outro_emprego, recebendo_seguro, cargo, ferias_apto, ferias_ultima, ferias_quantidade_dias,
              ferias_justificativa, ferias_data_solicitacao, ferias_data_aprovacao, sexo, pis_numero, pis_emissao,
              militar, salario, numero_militar, emissao_militar, nome_dependente, data_nascimento_dependente):
    # endereco = Endereco(endereco_rua, endereco_cidade, endereco_estado, endereco_pais, endereco_numero,
    #                     endereco_complemento, endereco_bairro)
    # cnh = Cnh(cnh_categoria, cnh_numero, cnh_vencimento)
    # rg = Rg(rg_orgao, rg_uf, rg_emissao)
    # titulo = Titulo(titulo_zona, titulo_secao, titulo_numero)
    # ctps = Ctps(ctps_numero, ctps_serie, ctps_uf, ctps_emissao)
    # ferias = Ferias(ferias_apto, ferias_ultima, ferias_quantidade_dias, ferias_justificativa, ferias_data_solicitacao,
    #                 ferias_data_aprovacao)
    # pis = Pis(pis_numero, pis_emissao)
    cadastrarFuncionario(nome, matricula, cpf, estado_civil, raca, nome_mae, tipo_sanguineo, grau_instrucao, cargo,
                         sexo, emissao_militar, nome_dependente, endereco_rua, endereco_cidade, endereco_estado,
                         endereco_cep, endereco_complemento, endereco_bairro, endereco_pais, endereco_numero, rg_orgao,
                         rg_uf, rg_emissao, cnh_categoria, cnh_numero, cnh_vencimento, titulo_numero, titulo_zona,
                         titulo_secao, ctps_numero, ctps_serie, ctps_uf, ctps_emissao, ferias_justificativa,
                         ferias_data_solicitacao, ferias_data_aprovacao, ferias_ultima, ferias_quantidade_dias,
                         ferias_apto, pis_numero, pis_emissao, vale_transporte, vale_alimentacao, vale_refeicao,
                         primeiro_emprego, outro_emprego, recebendo_seguro, telefone, numero_militar, nascimento,
                         data_ultimo_emprego, data_nascimento_dependente, salario)

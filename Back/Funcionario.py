from typing import Any
from Endereco import Endereco
from Ferias import Ferias
from Pis import Pis
from Rg import Rg
from Titulo import Titulo
from Cnh import Cnh
from Ctps import Ctps


class Funcionario:
    def __init__(self):
        self.nome = None
        self.matricula = None
        self.endereco: Endereco = None
        self.nascimento = None
        self.telefone = None
        self.cpf = None
        self.cnh: Cnh = None
        self.rg: Rg = None
        self.titulo: Titulo = None
        self.ctps = None
        self.vale_transporte = None
        self.vale_alimentacao = None
        self.vale_refeicao = None
        self.estado_civil = None
        self.raca = None
        self.nome_mae = None
        self.tipo_sanguineo = None
        self.grau_instrucao = None
        self.primeiro_emprego = None
        self.data_ultimo_emprego = None
        self.outro_emprego = None
        self.recebendo_seguro = None
        self.cargo = None
        self.ferias: Ferias = None
        self.sexo = None
        self.pis: Pis = None
        self.militar = None
        self.salario = None
        self.numero_militar = None
        self.emissao_militar = None
        self.mome_dependente = None
        self.data_dependente = None

    def __setattr__(self, name: str, value: Any) -> None:
        super().__setattr__(name, value)

    def __getattribute__(self, name: str) -> Any:
        return super().__getattribute__(name)

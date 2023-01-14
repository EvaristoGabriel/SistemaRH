from typing import Any


class Endereco:
    def __init__(self, rua, cidade, estado, cep, pais, numero, complemento, bairro):
        self.rua = rua
        self.cidade = cidade
        self.estado = estado
        self.cep = cep
        self.pais = pais
        self.numero = numero
        self.complemento = complemento
        self.bairro = bairro

    def __setattr__(self, name: str, value: Any) -> None:
        super().__setattr__(name, value)

    def __getattribute__(self, name: str) -> Any:
        return super().__getattribute__(name)

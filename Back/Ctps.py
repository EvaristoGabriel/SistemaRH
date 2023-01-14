from typing import Any


class Ctps:
    def __init__(self, numero, serie, uf, emissao):
        self.numero = numero
        self.serie = serie
        self.uf = uf
        self.emissao = emissao

    def __setattr__(self, name: str, value: Any) -> None:
        super().__setattr__(name, value)

    def __getattribute__(self, name: str) -> Any:
        return super().__getattribute__(name)

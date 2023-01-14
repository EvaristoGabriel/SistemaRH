from typing import Any


class Pis:
    def __init__(self, numero, emissao):
        self.numero = numero
        self.emissao = emissao

    def __setattr__(self, name: str, value: Any) -> None:
        super().__setattr__(name, value)

    def __getattribute__(self, name: str) -> Any:
        return super().__getattribute__(name)

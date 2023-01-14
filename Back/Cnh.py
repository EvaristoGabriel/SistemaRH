from typing import Any


class Cnh:
    def __init__(self, categoria, numero, vencimento):
        self.categoria = categoria
        self.numero = numero
        self.vencimento = vencimento

    def __setattr__(self, name: str, value: Any) -> None:
        super().__setattr__(name, value)

    def __getattribute__(self, name: str) -> Any:
        return super().__getattribute__(name)

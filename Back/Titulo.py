from typing import Any


class Titulo:
    def __init__(self, zona, secao, numero):
        self.zona = zona
        self.secao = secao
        self.numero = numero

    def __setattr__(self, name: str, value: Any) -> None:
        super().__setattr__(name, value)

    def __getattribute__(self, name: str) -> Any:
        return super().__getattribute__(name)

from typing import Any


class Rg:
    def __init__(self, orgao, uf, emissao):
        self.orgao = orgao
        self.uf = uf
        self.emissao = emissao

    def __getattribute__(self, name: str) -> Any:
        return super().__getattribute__(name)

    def __setattr__(self, name: str, value: Any) -> None:
        super().__setattr__(name, value)

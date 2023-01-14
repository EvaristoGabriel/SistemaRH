from typing import Any


class Ferias:

    def __init__(self, apto, ultima, quantidade_dias, justificativa, data_solicitacao, data_aprovacao):
        self.apto = apto
        self.ultima = ultima
        self.quantidade_dias = quantidade_dias
        self.justificativa = justificativa
        self.data_solicitacao = data_solicitacao
        self.data_aprovacao = data_aprovacao

    def __setattr__(self, name: str, value: Any) -> None:
        super().__setattr__(name, value)

    def __getattribute__(self, name: str) -> Any:
        return super().__getattribute__(name)

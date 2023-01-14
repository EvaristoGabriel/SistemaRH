#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import sqlite3


def conectar():
    try:
        conn = sqlite3.connect('db.sqlite3')
        return conn
    except sqlite3.Error as e:
        print(f'Erro na conexão')


def desconectar(conn):
    if conn:
        conn.close()


def listar():
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute('comando')
    dados = cursor.fetchall()

    if (len(dados)) > 0:
        print('Lista:')
        for dado in dados:
            for i in range(len(dado)):
                print(dado[i])

        desconectar(conn)

    else:
        print('Vazio')


def cadastrarFuncionario(nome, matricula, cpf, estado_civil, raca, nome_mae, tipo_sanguineo, grau_instrucao, cargo,
                         sexo, emissao_militar, nome_dependente, rua, cidade, estado, cep, complemento, bairro, pais,
                         numero_endereco, orgao, uf_rg, emissao_rg, categoria, numero_cnh, vencimento, numero_titulo,
                         zona, sessao, numero_ctps, serie, uf_ctps, emissao_ctps, justificativa, data_solicitacao,
                         data_aprovacao, ultima_ferias, quantidade_dias, apto, numero_pis, emissao_pis, vale_transporte,
                         vale_alimentacao, vale_refeicao, primeiro_emprego, outro_emprego, recebendo_seguro, telefone,
                         numero_militar, nascimento, data_ultimo_emprego, data_nascimento_dependente, salario):
    conn = conectar()
    cursor = conn.cursor()
    cursor.execute('SELECT COUNT(*) FROM FUNCIONARIO')
    id_funcionario = cursor.fetchall()[0][0]

    cursor.execute('SELECT COUNT(*) FROM CTPS')
    id_ctps = cursor.fetchall()[0][0]

    cursor.execute('SELECT COUNT(*) FROM RG')
    id_rg = cursor.fetchall()[0][0]

    cursor.execute('SELECT COUNT(*) FROM ENDERECO')
    id_endereco = cursor.fetchall()[0][0]

    cursor.execute('SELECT COUNT(*) FROM CNH')
    id_cnh = cursor.fetchall()[0][0]

    cursor.execute('SELECT COUNT(*) FROM TITULO')
    id_titulo = cursor.fetchall()[0][0]

    cursor.execute('SELECT COUNT(*) FROM FERIAS')
    id_ferias = cursor.fetchall()[0][0]

    cursor.execute('SELECT COUNT(*) FROM PIS')
    id_pis = cursor.fetchall()[0][0]

    cursor.execute(
        f" INSERT INTO ENDERECO VALUES ('{id_endereco}', '{rua}', '{cidade}', '{estado}', '{cep}', "
        f"'{complemento}', '{bairro}', '{pais}','{numero_endereco}')")

    cursor.execute(f" INSERT INTO RG VALUES ('{id_rg}', '{orgao}', '{uf_rg}', '{emissao_rg}')")

    cursor.execute(f" INSERT INTO CNH VALUES ('{id_cnh}', '{categoria}', '{numero_cnh}', '{vencimento}')")

    cursor.execute(f" INSERT INTO TITULO VALUES ('{id_titulo}', '{numero_titulo}', '{zona}', '{sessao}')")

    cursor.execute(
        f" INSERT INTO CTPS VALUES ('{id_ctps}', '{numero_ctps}', '{serie}', '{uf_ctps}', '{emissao_ctps}')")

    cursor.execute(f" INSERT INTO FERIAS VALUES ('{id_ferias}', '{justificativa}', '{data_solicitacao}', "
                   f"'{data_aprovacao}', '{ultima_ferias}', '{quantidade_dias}', '{apto}')")

    cursor.execute(f" INSERT INTO PIS VALUES ('{id_pis}', '{numero_pis}', '{emissao_pis}')")

    cursor.execute(f" INSERT INTO FUNCIONARIO VALUES ('{id_funcionario}', '{nome}', '{matricula}', '{cpf}', "
                   f"'{estado_civil}', '{raca}','{nome_mae}', '{tipo_sanguineo}', '{grau_instrucao}', '{cargo}',"
                   f" '{sexo}', '{emissao_militar}', '{nome_dependente}', '{id_endereco}', '{id_rg}', '{id_cnh}', "
                   f"'{id_titulo}', '{id_ctps}', '{id_ferias}', '{id_pis}', '{vale_transporte}', '{vale_alimentacao}', "
                   f"'{vale_refeicao}', '{primeiro_emprego}', '{outro_emprego}', '{recebendo_seguro}', '{telefone}', "
                   f"'{numero_militar}', '{nascimento}', '{data_ultimo_emprego}', '{data_nascimento_dependente}', "
                   f"'{salario}')")
    conn.commit()
    desconectar(conn)


def busca(nome=None, cargo=None, cpf=None, salario=None, email=None, sexo=None, nascimento=None, registro=None):
    conn = conectar()
    cursor = conn.cursor()
    if nome and not cargo:
        cursor.execute(f'SELECT * FROM FUNCIONARIO WHERE nome="{nome}"')
    elif nome and cargo:
        cursor.execute(f'SELECT * FROM FUNCIONARIO WHERE nome="{nome}" AND cargo="{cargo}"')
    elif cpf:
        cursor.execute(f'SELECT * FROM FUNCIONARIO cpf="{cpf}"')

    dados = cursor.fetchall()
    # if (len(dados)) > 0:
    #     print('Lista:')
    #     for dado in dados:
    #         for i in range(len(dado)):
    #             print(dado[i])
    desconectar(conn)
    return dados


def selecionarFuncionario(nome=None, cargo=None, cpf=None, salario=None, email=None, sexo=None, nascimento=None,
                          registro=None):
    funcionarios = busca(nome, cargo, cpf, salario, email, sexo, nascimento, registro)
    if funcionarios.__len__() > 0:
        return funcionarios[0]
    else:
        return None


def deletar(nome=None, cargo=None, cpf=None, salario=None, email=None, sexo=None, nascimento=None, registro=None):
    conn = conectar()
    cursor = conn.cursor()
    funcionario = selecionarFuncionario(nome, cargo, cpf, salario, email, sexo, nascimento, registro)
    if funcionario:
        cursor.execute(f"DELETE FROM FUNCIONARIO WHERE id={funcionario[0]}")
        cursor.execute(f"DELETE FROM ENDERECO WHERE id={funcionario[0]}")
        cursor.execute(f"DELETE FROM PIS WHERE id={funcionario[0]}")
        cursor.execute(f"DELETE FROM RG WHERE id={funcionario[0]}")
        cursor.execute(f"DELETE FROM FERIAS WHERE id={funcionario[0]}")
        cursor.execute(f"DELETE FROM CTPS WHERE id={funcionario[0]}")
        cursor.execute(f"DELETE FROM CNH WHERE id={funcionario[0]}")
        cursor.execute(f"DELETE FROM TITULO WHERE id={funcionario[0]}")
        conn.commit()
    desconectar(conn)


def editar(nome=None, cargo=None, cpf=None, salario=None, email=None, sexo=None, nascimento=None, registro=None):
    conn = conectar()
    cursor = conn.cursor()
    funcionario = selecionarFuncionario(nome, cargo, cpf, salario, email, sexo, nascimento, registro)
    if funcionario == None:
        return
    nome_update = 'louback'
    cargo_update = 'as'
    cpf_update = ''
    salario_update = ''
    email_update = ''
    sexo_update = ''
    nascimento_update = ''
    registro_update = ''
    if nome:
        cursor.execute(f"UPDATE FUNCIONARIO SET nome='{nome_update}' WHERE id={funcionario[0]}")
    if cargo:
        cursor.execute(f"UPDATE FUNCIONARIO SET cargo='{cargo_update}' WHERE id={funcionario[0]}")
    if cpf:
        cursor.execute(f"UPDATE FUNCIONARIO SET cpf='{cpf_update}' WHERE id={funcionario[0]}")
    if salario:
        cursor.execute(f"UPDATE FUNCIONARIO SET salario={salario_update} WHERE id={funcionario[0]}")
    if email:
        cursor.execute(f"UPDATE FUNCIONARIO SET email='{email_update}' WHERE id={funcionario[0]}")
    if sexo:
        cursor.execute(f"UPDATE FUNCIONARIO SET sexo='{sexo_update}' WHERE id={funcionario[0]}")
    if nascimento:
        cursor.execute(f"UPDATE FUNCIONARIO SET nascimento='{nascimento_update}' WHERE id={funcionario[0]}")
    if registro:
        cursor.execute(f"UPDATE FUNCIONARIO SET registro='{registro_update}' WHERE id={funcionario[0]}")
    conn.commit()
    desconectar(conn)

def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sistemarh.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
     #cadastrarFuncionario('Lucas Pereira Freitas', '20200065', '16984625478', 'solteiro', 'branco', 'maria Pereira', 'b+', 'superior', 'chefe',
      #                    'masculino', '1990-10-23', 'pedro', 'rua', 'cidade', 'estado', 'cep', 'casa', 'centro',
       #                   'argentina', 141, 'pcsp', 'sao paulo', '1978-08-12', 'categoria', '283712831789',
        #                  '1999-09-21', '81378127', 1, 67, '3127836', 12, 'mg', '1967-09-31', 'Não tem',
         #                 '1788-09-12', '1788-09-12', '1788-09-12', 12, True, '323113', '1788-09-12', True, True,
          #                True, True, False, False, 3299978343, 23213, '1788-09-12', '1788-09-12', None,
           #               1500.00)
    #editar('louback', '')
    print(busca('Lucas Pereira Freitas', '20200065'))
    # deletar('joao')

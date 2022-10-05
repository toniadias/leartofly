Feature: Efetuar Login

Scenario: Efetuar Login 
    When informar e-mail e senha válidos
        And clicar no botão “Continuar”
    Then realizar login no sistema

Scenario: Não informar e-mail
    When não informar o e-mail e informar senha
        And clicar no botão “Continuar”
    Then destacar o campo e-mail
        And exibir no campo “E-mail obrigatório”

Scenario: Não informar senha
    When informar o e-mail e não informar senha
        And clicar no botão “Continuar”
    Then destacar o campo senha

Scenario: Não informar dados
    When não informar o e-mail e não informar senha
        And clicar no botão “Continuar”
    Then destacar o campo e-mail
	    And destacar o campo senha
        And exibir no campo “E-mail obrigatório”

Scenario: Informar dados inválidos
    When informar e-mail e senha inválidos
        And clicar no botão “Continuar”
    Then destacar o campo e-mail
	    And destacar o campo senha
        And exibir no campo “E-mail inválido”

Scenario: Informar e-mail inválido
    When informar e-mail inválido e senha
        And clicar no botão “Continuar”
    Then destacar o campo e-mail
        And exibir no campo “E-mail inválido”

Scenario: Informar senha inválida
    When informar e-mail válido e senha inválida
        And clicar no botão “Continuar”
    Then destacar o campo senha

Scenario: Informar e-mail não cadastrado
    When informar e-mail não cadastrado e senha
        And clicar no botão “Continuar”
    Then exibir mensagem “Usuário ou senha inválidos”

Scenario: Visualizar senha
    When informo uma senha
        And clico no ícone “olho”
    Then exibir a senha
        And o ícone “olho” passa a ser o ícone “olho com traço”

Scenario: Não visualizar senha
    When informo uma senha
        And clico no ícone “olho”
        And clico no ícone “olho com traço”
    Then esconder a senha 
        And o ícone “olho com traço” passa a ser o ícone “olho”

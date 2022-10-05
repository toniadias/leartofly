Feature: Esqueceu Senha

Scenario: Esqueci Senha
    When clicar no link “esqueci minha senha”
        And informar e-mail válido
        And clicar no botão “Continuar”
    Then exibir mensagem “Um link para atualizar sua senha foi enviado para seu e-mail”

Scenario: Não informar e-mail
    When clicar no link “esqueci minha senha”
        And não informar e-mail
        And clicar no botão “Continuar”
    Then destacar o campo e-mail do esqueceu senha
        And exibir no campo “E-mail obrigatório” do esqueceu senha

Scenario: Informar e-mail não cadastrado
    When clicar no link “esqueci minha senha”
        And informar e-mail não cadastrado
        And clicar no botão “Continuar”
    Then exibir mensagem “Ops! Você não tem um cadastro”

Scenario: Informar e-mail inválido
    When clicar no link “esqueci minha senha”
        And informar e-mail inválido do esqueceu senha
        And clicar no botão “Continuar”
    Then destacar o campo e-mail do esqueceu senha
        And exibir no campo “E-mail inválido” do esqueceu senha


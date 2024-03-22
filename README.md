# ponderada_s7

Ponderada referente à semana 7 - testes automatizados

# Documentação de Testes Automatizados

## Introdução

Esta seção da documentação foca na descrição detalhada dos testes automatizados desenvolvidos para as funcionalidades AttendanceListService e AttendanceListController. Estes testes têm como finalidade assegurar a correta funcionalidade e a integridade das operações relacionadas ao registro e à consulta de listas de presença na API.

## Testes Implementados

### Service Tests

- *Descrição:* Verifica se o serviço retorna a lista completa de registros de presença.
- *Cenário Testado:* Chamada do método getAllAttendances sem parâmetros.
- *Expectativa:* O serviço deve retornar uma lista contendo todos os registros de presença existentes no banco de dados.

- *Descrição:* Testa a capacidade do serviço de registrar corretamente a presença de alunos por seus IDs em uma determinada aula.
- *Cenário Testado:* Chamada do método postAttendanceListByIds com um array de IDs de alunos e um ID de aula válidos.
- *Expectativa:* O serviço deve inserir corretamente os registros de presença no banco de dados e retornar os IDs das inserções.

### Controller Tests

- *Descrição:* Garante que o controlador responda adequadamente ao solicitar a lista de presenças para a rota especificada.
- *Cenário Testado:* Requisição GET para a rota /.
- *Expectativa:* O controlador deve responder com a lista completa dos registros de presença.

- *Descrição:* Verifica se o controlador trata corretamente a inclusão de novos registros de presença por meio da rota especificada.
- *Cenário Testado:* Requisição POST para a rota /attendanceListIds/:ids com um corpo de requisição contendo studentIds e lessonId válidos.
- *Expectativa:* O controlador deve processar a requisição e retornar os IDs das novas inserções de presença no banco de dados.

## Executando os Testes

Para executar os testes, utilize o comando abaixo no terminal:

```
npm test
```

## Resultados obtidos

A execução dos testes resultou em um sucesso total, validando as funcionalidades de registro e consulta de listas de presença implementadas. Todos os cenários testados foram abordados e passaram sem erros, assegurando que tanto o AttendanceListService quanto o AttendanceListController funcionam conforme o esperado. Os detalhes da execução são apresentados abaixo:

<h6 align="center"> Figura 1: Resultado teste de AttendenceList </h6>

![Imagem_Teste](img/print_test)

<h6 align="center"> Fonte: Elaborado por Clara Coelho Mohammad </h6>
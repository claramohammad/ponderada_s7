// documentar aq

# Documentação de Testes Automatizados

## Introdução

Esta seção da documentação tem como objetivo fornecer uma descrição detalhada dos testes automatizados implementados para as funcionalidades de ClassTeacherService e ClassTeacherController. Os testes são projetados para validar a integridade e a funcionalidade da API.

## Testes Implementados

### Service Tests

- *Descrição:* Verifica se o serviço retorna corretamente a lista de professores associados a uma turma.
- *Cenário Testado:* Chamada do método getAllTeachersByClass com um fk_id_turma válido.
- *Expectativa:* O serviço deve retornar uma lista dos professores associados à turma fornecida.

### Controller Tests

- *Descrição:* Confirma que o controlador responde corretamente com a lista de professores para a rota especificada.
- *Cenário Testado:* Requisição GET para a rota /classId/:fk_id_turma.
- *Expectativa:* O controlador deve responder com a lista dos professores associados à turma fornecida.

- *Descrição:* Assegura que o controlador lida com erros apropriadamente.
- *Cenário Testado:* Simulação de uma falha no serviço ao chamar getAllTeachersByClass.
- *Expectativa:* O controlador deve responder com o status HTTP 500 e a mensagem de erro correspondente.

## Executando os Testes

Para executar os testes, utilize o comando abaixo no terminal:

```bash
npm run test

## Resultados obtidos

Todos os testes foram executados com sucesso
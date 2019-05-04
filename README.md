# Validador de CPF v.1.0.0

**Esta biblioteca se destina à validação de cartões de crédito, para uso em aplicações web.**
Na versão atual é capaz de verificar se um cartão de crédito de 16 ou 14 dígitos é valido ou inválido.

## Como instalar:

```shell

$  npm install card-validator-lib

```

## Como utilizar:

```node

const cardValidator = require('card-validator-lib');
> console.log(cardValidator('5220147622328021'))
> // returns "true"
> console.log(cardValidator('522014762232802'))
> // returns "false"

```

## roadmap oficial do projeto


#### versão 1.0.0 
- funcionalidades: verifica se o número de um cartão de crédito é valido ou inválido.

# back-end

Back-end para a página de produto

## Como rodar?

Primeiro, instale as dependências executando o comando:

```sh
npm install
```

Após isso, escolha algum script abaixo para executar.

### Servidor

Inicia o servidor para servir os produtos.

```sh
$ npm run dev
```

### Testes

Executa os testes do back-end.

```sh
$ npm run test
```

## Rotas

O servidor possui uma única rota, sendo ela:

- /products/:productId

Nessa você deverá passar algum id qualquer para que o produto seja retornado.

Estrutura do produto:

```js
{
    "company": "Sneaker Company",
    "name": "Fall limited edition sneakers",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate iusto placeat quam quaerat dolor, omnis quae odit unde cumque blanditiis, perspiciatis, tenetur officiis qui quis nobis nulla hic quod!",
    "price": 125,
    "oldPrice": 250,
    "images": {
        "full": [
            "Urls da imagem em alta resolução"
        ],
        "thumbnails": [
            "Urls da imagem para thumbnail"
        ],
    },
}
```

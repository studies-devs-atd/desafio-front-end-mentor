# Salve galerinha!

Para o desafio do grupo de estudos, teremos que seguir o layout descrito [nesse link](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6) do front-end mentor.

![Layout a ser seguido para o desafio](https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/uehz7kwoo7gesfebbqi8.jpg)

Os requisitos de tecnologia para fazer o projeto são:

- Projeto deverá ser feito em Vue 2;
- Projeto deverá ter interação com uma API (mais detalhes abaixo);
- Estilização pode ser feita com CSS ou SASS (exceto para o Léo, que tem que ser Tailwind).

## API

O desenvolvimento da API é opcional, mas vai ser massa fazer para aprender. 🤠

Apenas é necessário criar um endpoint que retorne o produto para o front-end, a estrutura do produto deve ser:

```ts
type Product = {
    company: string
    name: string
    description: string
    price: number
    oldPrice: number
    images: {
        full: string[]
        thumbnails: string[]
    }
}

// Um exemplo de json valido seria:

{
    "company": "Company",
    "name": "Product Name",
    "description": "Product Description",
    "price": 100,
    "oldPrice": 200,
    "images": {
        "full": [
            "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/uehz7kwoo7gesfebbqi8.jpg"
        ],
        "thumbnails": [
            "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_300/Challenges/uehz7kwoo7gesfebbqi8.jpg"
        ]
    }
}
```

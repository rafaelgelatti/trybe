Projeto elaborado durante o curso Trybe, assim como todos neste repositório.

## Requisitos Obrigatórios:

* Neste projeto, você implementará um gerador de cartas misteriosas.

**Ou seja, dado um valor digitado em um campo de texto, apresentar as palavras com uma aparência de uma carta onde cada palavra possui uma estilização própria.** 

### 1 - Deve haver um `input` com o `id="carta-texto"` onde o usuário poderá digitar o conteúdo da carta.

### 2 - Deve haver um parágrafo com o `id="carta-gerada"` onde o usuário verá o resultado de sua carta misteriosa.

### 3 - Deve haver um botão com `id="criar-carta"` e ao clicar nesse botão, a carta misteriosa deve ser gerada.

  Pontos importantes:

    * Cada palavra deve aparecer dentro de uma tag `span`.
    * As tags `span` devem ser adicionadas como filha do parágrafo que possui o id `carta-gerada`.

### 4 - Ao criar uma carta através do botão `id="criar-carta"`, o `input` com `id="carta-texto"` deve permanecer com o texto digitado.

### 5- Se o usuário não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'

### 6 - Crie a classe `newspaper`.

  Pontos importantes:

    * Defina as propriedades:
      - `background-color` com o valor `antiquewhite`
      - `font-family` com o valor `Times New Roman`
      - `font-weight` com o valor `bold`

### 7 - Crie a classe `magazine1`.

  Pontos importantes:

    * Defina as propriedades:
      - `background-color` com o valor `teal`
      - `color` com o valor `white`
      - `font-family` com o valor `Verdana`
      - `font-weight` com o valor `900`
      - `text-transform` com o valor `uppercase`

### 8 - Crie a classe `magazine2`.

  Pontos importantes:

    * Defina as propriedades:
      - `background-image` com a imagem `images/pink-pattern.png`
      - `color` com o valor `fuchsia`
      - `font-family` com o valor `Verdana`
      - `font-weight` com o valor `900`

### 9 - Crie a classe `medium`.

  Pontos importantes:

    * Defina as propriedades:
      - `font-size` com o valor `20px`
      - `padding` com o valor `8px`

### 10 - Crie a classe `big`.

  Pontos importantes:

    * Defina as propriedades:
      - `font-size` com o valor `30px`
      - `padding` com o valor `10px`

### 11 - Crie a classe `reallybig`.

  Pontos importantes:

    * Defina as propriedades:
      - `font-size` com o valor `40px`
      - `padding` com o valor `15px`

### 12 - Crie a classe `rotateleft`.

  Pontos importantes:

    * Defina as propriedades:
      - `transform` com o valor `rotate(-5deg)`

### 13 - Crie a classe `rotateright`.

  Pontos importantes:

    * Defina as propriedades:
      - `transform` com o valor `rotate(5deg)`

### 14 - Crie a classe `skewleft`.

  Pontos importantes:

    * Defina as propriedades:
      - `transform` com o valor `skewX(10deg)`;

### 15 - Crie a classe `skewright`.

  Pontos importantes:

    * Defina as propriedades:
      - `transform` com o valor `skewX(-10deg)`;

### 16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.

  Pontos importantes:

    * As classes devem ser adicionadas às tags `span` de forma **aleatória**.
    * Sempre adicione mais de uma classe em uma palavra.
    * Utilize as classes:
      - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
      - `medium`, `big`, `reallybig` (Grupo tamanho)
      - `rotateleft`, `rotateright` (Grupo rotação)
      - `skewleft`, `skewright` (Grupo inclinação)

      Não é necessário utilizar classes de todos os grupos em uma palavra, mas **não** utilize mais de uma classe do mesmo grupo.
      Ou seja, se você utilizar as classes `magazine1` e `skewright` em uma palavra, as classes `newspaper`, `magazine2`, `skeleft` não devem ser usadas para essa mesma palavra.

## Requisitos Bônus:

### 17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela.

  Pontos importantes:

    * Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
    * O número de mudanças deve ser ilimitado;

### 18 - Deve haver um parágrafo com o `id="carta-contador"` onde existirá um contador de palavras.

  Pontos importantes:

    * Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.
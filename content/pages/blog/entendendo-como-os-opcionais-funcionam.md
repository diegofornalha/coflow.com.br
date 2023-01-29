---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: Entendendo como os opcionais funcionam
titlePt: Entendendo como os opcionais funcionam
colors: colors-d
date: '2023-01-10'
excerpt: Como evitar e corrigir erros de referências vazias em seu código
excerptFr: Como evitar e corrigir erros de referências vazias em seu código
featuredImage:
  type: ImageBlock
  url: /images/CAPAS-Entendendo como os opcionais funcionam.png
  altText: Como evitar e corrigir erros de referências vazias em seu código
  caption: Como evitar e corrigir erros de referências vazias em seu código
  width: 800
  height: 450
media:
  type: ImageBlock
  url: /images/CAPAS-Entendendo como os opcionais funcionam.png
  altText: Como evitar e corrigir erros de referências vazias em seu código
  caption: Como evitar e corrigir erros de referências vazias em seu código
  width: 800
  height: 450
bottomSections: []
markdown_content_pt: >+
  Hoje, vou falar sobre um aspecto do Cadence com o qual muitas pessoas têm
  dificuldade de se familiarizar: os Optionais!


  Os Optionais são como o gato de Schrödinger da programação.


  Ou são mesmo?


  Desculpem, péssima analogia, mas vocês entenderão de onde venho quando
  terminarem de ler.


  Mas afinal, o que são Optionais?

  Os Optionais no Cadence são uma forma segura e poderosa de se usar variáveis
  em linguagens de programação. Eles podem ser difíceis de se acostumar, no
  entanto!


  Os Optionais dizem ou "há um valor, e ele é x" ou "não há valor algum". Então,
  o valor foi definido ou, mais importante, não foi definido. Os Optionais são
  inicializados como nil (que técnicamente é um valor) quando eles não possuem
  um valor específico do seu tipo.


  Qualquer tipo pode ser um Optional. Você declara um tipo Optional usando um ?
  após a declaração da variável, assim:


  // Declarando um Optional String

  var nome: String?

  Ao atribuir um valor a um Optional, você pode atribuir como se o tipo não
  fosse Optional:


  nome = "Josh"

  mas também pode atribuir o valor nil ao Optional.


  nome = nil

  Mas por que eu iria querer dizer que algo é nil?

  Os Optionais permitem que o software possa lidar com casos de erro e situações
  semelhantes de forma mais elegante.


  O objetivo principal é tornar o estado de uma variável de
  indisponível/vazio/nada explícito e, ainda mais, tornar explícito quando algo
  nunca poderá ser indisponível/vazio/nada. Em linguagens que permitem que
  qualquer variável seja nula, nem sempre é claro se a variável pode ser nula na
  localização específica do código, o que leva a dois problemas:


  Ou o caso nulo não é tratado pelo programador, e então há um valor nulo,
  causando uma referência nula, ou "null reference", no código. Isso ocorre
  quando uma variável é utilizada sem ter sido inicializada ou atribuída um
  valor válido. Isso pode causar erros e problemas no funcionamento do programa.



metaDescription: null
socialImage: null
---
Etiam facilisis lacus nec pretium lobortis. Praesent dapibus justo non efficitur efficitur. Nullam viverra justo arcu, eget egestas tortor pretium id. Sed imperdiet mattis eleifend. Vivamus suscipit et neque imperdiet venenatis.

> Vestibulum ullamcorper risus auctor eleifend consequat.

![Placeholder Image](https://assets.stackbit.com/components/images/default/post-4.jpeg)

In malesuada sed urna eget vehicula. Donec fermentum tortor sit amet nisl elementum fringilla. Pellentesque dapibus suscipit faucibus. Nullam malesuada sed urna quis rutrum. Donec facilisis lorem id maximus mattis. Vestibulum quis elit magna. Vestibulum accumsan blandit consequat. Phasellus quis posuere quam.

Vivamus mollis in tellus ac ullamcorper. Vestibulum sit amet bibendum ipsum, vitae rutrum ex. Nullam cursus, urna et dapibus aliquam, urna leo euismod metus, eu luctus justo mi eget mauris. Proin felis leo, volutpat et purus in, lacinia luctus eros. Pellentesque lobortis massa scelerisque lorem ullamcorper, sit amet elementum nulla scelerisque. In volutpat efficitur nulla, aliquam ornare lectus ultricies ac. Mauris sagittis ornare dictum. Nulla vel felis ut purus fermentum pretium. Sed id lectus ac diam aliquet venenatis. Etiam ac auctor enim. Nunc velit mauris, viverra vel orci ut, egestas rhoncus diam. Morbi scelerisque nibh tellus, vel varius urna malesuada sed. Etiam ultricies sem consequat, posuere urna non, maximus ex. Mauris gravida diam sed augue condimentum pulvinar vel ac dui. Integer vel convallis justo.
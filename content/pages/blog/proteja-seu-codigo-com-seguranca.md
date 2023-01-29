---
layout: PostLayout
metaTitle: null
addTitleSuffix: true
metaTags: []
title: Proteja seu código com segurança!
titlePt: Proteja seu código com segurança!
colors: colors-d
date: '2023-01-10'
excerpt: A importância do controle de acesso e como usá-lo no Cadence
excerptFr: A importância do controle de acesso e como usá-lo no Cadence
featuredImage:
  type: ImageBlock
  url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg'
  altText: Post thumbnail image
  caption: ''
media:
  type: ImageBlock
  url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg'
  altText: Post image
bottomSections: []
markdown_content_pt: >
  Você sabe o que é controle de acesso? É a restrição de campos, funções e tipos
  a certos escopos e usuários. É extremamente importante para os desenvolvedores
  considerarem profundamente para garantir que seu código esteja protegido
  contra vulnerabilidades potenciais. A tecnologia blockchain certamente teve
  sua cota justa de bugs e explorações e muitos deles poderiam ter sido evitados
  com um controle de acesso melhor gerenciado.


  Eu acredito que todo desenvolvedor deveria ter um entendimento completo do
  controle de acesso do Cadence antes mesmo de pensar em implantar seu projeto
  na mainnet. Padrões altos, eu sei, mas estamos lidando com coisas de
  verdadeiro valor aqui! (e a maioria de vocês provavelmente não vai me ouvir de
  qualquer maneira e simplesmente copiar o código do Top Shot sem pensar).


  Ao contrário de muitos idiomas, o Cadence fornece duas camadas diferentes de
  controle de acesso que são ambas incorporadas ao idioma:


  Controle de acesso baseado em palavra-chave

  Controle de acesso baseado em capacidade

  Eu recomendo conferir esses antes de ler mais deste post.


  Eu não vou fornecer uma explicação detalhada dos diferentes tipos de controle
  de acesso neste post, mas vou falar sobre algumas das razões para utilizá-los
  e alguns exemplos de como eles podem ser usados ​​efetivamente em contratos
  inteligentes.


  Bem, agora que você já entende o básico da keyword-based access control, vamos
  falar sobre a segunda camada de controle de acesso no Cadence:
  Capability-based Access Control.




  Capability-based Access Control

  A segunda camada de controle de acesso no Cadence é baseada em capacidades. Em
  vez de usar palavras-chave para especificar o nível de acesso de um campo,
  função ou tipo, as capacidades são usadas para controlar quem tem acesso a
  ele.


  As capacidades são objetos que representam uma chave para um recurso
  específico. Quando você tem uma capacidade, você pode acessar o recurso
  associado a ela. Por exemplo, se você tem uma capacidade para um contrato
  específico, você pode acessar e chamar as funções desse contrato.


  Existem três tipos de capacidades no Cadence:


  *   Recipient


  *   Signer


  *   Contract


  A capacidade Recipient é usada para controlar o acesso a recursos que são
  transferidos para outra conta. Por exemplo, se você quiser transferir uma
  quantidade específica de tokens para outra conta, você precisaria de uma
  capacidade Recipient para essa conta.


  A capacidade Signer é usada para controlar o acesso a recursos que precisam
  ser assinados para serem acessados. Por exemplo, se você precisar assinar uma
  transação para acessar determinadas funções de um contrato, você precisaria de
  uma capacidade Signer para essa conta.


  A capacidade Contract é usada para controlar o acesso a recursos de um
  contrato específico. Por exemplo, se você quiser chamar uma função de um
  contrato, você precisaria de uma capacidade Contract para esse contrato.


  Usando essas capacidades, você pode criar regras de acesso muito precisas e
  seguras para seus contratos inteligentes. Por exemplo, você pode garantir que
  apenas certas contas possam transferir tokens, ou que apenas certas contas
  possam assinar transações.


  Agora que você sabe um pouco sobre keyword-based access control e
  capability-based access control, você está pronto para criar contratos
  inteligentes seguros e eficientes usando o Cadence.
metaDescription: null
socialImage: null
---
Etiam facilisis lacus nec pretium lobortis. Praesent dapibus justo non efficitur efficitur. Nullam viverra justo arcu, eget egestas tortor pretium id. Sed imperdiet mattis eleifend. Vivamus suscipit et neque imperdiet venenatis.

> Vestibulum ullamcorper risus auctor eleifend consequat.

![Placeholder Image](https://assets.stackbit.com/components/images/default/post-4.jpeg)

In malesuada sed urna eget vehicula. Donec fermentum tortor sit amet nisl elementum fringilla. Pellentesque dapibus suscipit faucibus. Nullam malesuada sed urna quis rutrum. Donec facilisis lorem id maximus mattis. Vestibulum quis elit magna. Vestibulum accumsan blandit consequat. Phasellus quis posuere quam.

Vivamus mollis in tellus ac ullamcorper. Vestibulum sit amet bibendum ipsum, vitae rutrum ex. Nullam cursus, urna et dapibus aliquam, urna leo euismod metus, eu luctus justo mi eget mauris. Proin felis leo, volutpat et purus in, lacinia luctus eros. Pellentesque lobortis massa scelerisque lorem ullamcorper, sit amet elementum nulla scelerisque. In volutpat efficitur nulla, aliquam ornare lectus ultricies ac. Mauris sagittis ornare dictum. Nulla vel felis ut purus fermentum pretium. Sed id lectus ac diam aliquet venenatis. Etiam ac auctor enim. Nunc velit mauris, viverra vel orci ut, egestas rhoncus diam. Morbi scelerisque nibh tellus, vel varius urna malesuada sed. Etiam ultricies sem consequat, posuere urna non, maximus ex. Mauris gravida diam sed augue condimentum pulvinar vel ac dui. Integer vel convallis justo.
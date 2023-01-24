---
title: Home
layout: PageLayout
sections:
  - type: DividerSection
    colors: colors-d
    styles:
      self:
        width: full
        padding:
          - pt-0
          - pb-0
          - pl-0
          - pr-0
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
  - type: CtaSection
    colors: colors-e
    elementId: ''
    backgroundSize: full
    title: Accelerate every step!
    titlePt: Acelere cada etapa!
    text: |
      Will your team be fluent in web3?
    textPt: |
      Seu time vai ser fluente na web3?
    actions:
      - type: Button
        label: Contact Us
        altText: Entre em Contato
        url: 'https://wa.me/5521997806363?text=Ol%C3%A1'
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
      - type: Link
        label: Join Discord
        altText: Entre no Discod
        url: 'https://discord.com/invite/hT8EpC5mUN'
        showIcon: true
        icon: chevronRight
        iconPosition: left
        elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
    backgroundImage:
      type: BackgroundImage
      url: /images/Gifs/realidade virtual.gif
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 15
  - type: FeaturedItemsSection
    colors: colors-b
    elementId: ''
    items:
      - type: FeaturedItem
        textPt: |+
          ## Criamos Prova de Conceito

        actions: []
        styles:
          self:
            textAlign: left
        featuredIcon: bulb
        isIcon: true
        text: |+
          ##Ideation

      - type: FeaturedItem
        textPt: |+
          ## Desenhamos seu Token

        actions: []
        styles:
          self:
            textAlign: left
        featuredIcon: document
        isIcon: true
        text: |
          ## Token
      - type: FeaturedItem
        textPt: |+
          ## Publicamos na Rede de Teste

        actions: []
        styles:
          self:
            textAlign: left
        featuredIcon: play
        isIcon: true
        text: |
          ##OnGoing
    actions: []
    columns: 3
    spacingX: 32
    spacingY: 32
    enableHover: true
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
addTitleSuffix: true
metaTags:
  - type: MetaTag
    property: 'og:type'
    content: website
  - type: MetaTag
    property: 'og:image:alt'
    content: CoFlow
  - type: MetaTag
    property: 'og:url'
    content: 'https://coflow.com.br'
  - type: MetaTag
    property: 'og:site_name'
    content: CoFlow
  - type: MetaTag
    property: 'twitter:site'
    content: '@diegofornalha'
---

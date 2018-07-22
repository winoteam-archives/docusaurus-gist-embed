# Docusaurus gist embed

A remarkable plugin compatible with dicusaurus. Allow to embed gist inside your markdown documentation.

## Make the awesome

```
yarn add --dev @wino/docusaurus-gist-embed
```

and in `website/siteConfig.js`

```js
import embedGist from '@wino/docusaurus-gist-embed'

const siteConfig = {
  // …
  markdownPlugins: [embedGist],
  // …
}
```

## Usage

```markdown
Que vous soyez une très petite cave ou alors une grande entreprise, la solution Wino est faite pour vous. Elle s'adapte aux structures avec plusieurs points de vente et de multiples caisses, avec des entrepôts de stockage ou encore avec une boutique en ligne. Tous vos flux données de clients, produits et ventes transitent intelligemment entre les outils.

{gist baloran/d1564cf2c60471b3844be86507c29f45}
```

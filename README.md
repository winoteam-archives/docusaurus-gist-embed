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

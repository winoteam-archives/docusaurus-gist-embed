import Remarkable from 'remarkable'
import embedGist from './index'

let md

describe('Embed gist into documentation', () => {
  beforeAll(() => {
    md = new Remarkable()
    md.use(embedGist)
  })
  it('can correctly embed gist into remarkable', () => {
    expect(
      md.render(
        'Salut je suis un gist {gist baloran/d1564cf2c60471b3844be86507c29f45}',
      ),
    )
      .toEqual(`<p>Salut je suis un gist <script src=\"https://gist.github.com/baloran/d1564cf2c60471b3844be86507c29f45.js\"></body></script></p>
`)
  })
})

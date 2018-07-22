const parse = md => {
  if (md.src.charCodeAt(md.pos) !== 123) {
    return false
  }

  const match = /{gist\s+([\S]+?)}/.exec(md.src.slice(md.pos))
  if (!match) return false

  md.pos += match[0].length

  const token = {
    type: 'embedGist',
    level: md.level,
    content: {
      gist: match[1],
      match: match,
    },
  }

  md.push(token)
  return true
}

const render = (tokens, idx) => {
  const token = tokens[idx]

  return `<script src="https://gist.github.com/${token.content.gist}.js" />`
}

const embedGist = ctx => {
  ctx.inline.ruler.push('embedGist', parse)
  ctx.renderer.rules['embedGist'] = render
}

export default embedGist


const { parseSync, traverse } = require('@babel/core');
const path = require('path');
const { default: MagicString } = require('magic-string');

function parseJSXIdentifier(name) {
  if (name.type === 'JSXIdentifier')
    return name.name

  else
    return `${parseJSXIdentifier(name.object)}.${parseJSXIdentifier(name.property)}`
}

module.exports = function (content) {
  const s = new MagicString(content);

  const id = this.resourcePath;
  const projectDir = path.join(process.cwd());
  const fileName = id.replace(
    projectDir.replace(/\\/g, '/'),
    '',
  );

  const ast = parseSync(content, {
    configFile: false,
    filename: id,
    ast: true,
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  });

  traverse(ast, {
    enter({ node }) {
      if (node.type === 'JSXElement') {
        if (node?.openingElement?.name?.object?.name === 'React')
          return

        const { start } = node
        const { column, line } = node?.loc?.start
        const toInsertPosition = start + parseJSXIdentifier(node.openingElement.name).length + 1;
        const content = ` data-react-inspector="${fileName.slice(1)}:${line}:${column}"`
        s.appendLeft(toInsertPosition, content)
      }
    },
  })

  return s.toString();
};

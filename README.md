
<p align="center">
<a href="https://www.npmjs.com/package/rsbuild-plugin-react-inspector"><img src="https://raw.githubusercontent.com/hunghg255/rsbuild-plugin-react-inspector/main/logo.svg" width="180" alt="rsbuild-plugin-react-inspector"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rsbuild-plugin-react-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/rsbuild-plugin-react-inspector" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/rsbuild-plugin-react-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/dt/rsbuild-plugin-react-inspector" alt="NPM Downloads" /></a>
  <a href="https://www.npmjs.com/package/rsbuild-plugin-react-inspector/blob/master/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/rsbuild-plugin-react-inspector" alt="License" /></a>
</p>

## Playground

[Playground](https://github.com/hunghg255/rsbuild-plugin-react-inspector/tree/main/playground)

## 📖 Introduction

A rsbuild plugin which provides the ability that to jump to the local IDE when you click the element of browser automatically.

<p align="center">
<img src="https://raw.githubusercontent.com/hunghg255/rsbuild-plugin-react-inspector/main/assets/demo.gif" alt="rsbuild-plugin-react-inspector">
</p>


## 📦 Installation

```bash
npm install rsbuild-plugin-react-inspector -D
```

## 🦄 Usage

### Configuration in `rsbuild.config.ts`

```ts
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { pluginReactInspector } from 'rsbuild-plugin-react-inspector';

export default defineConfig({
  plugins: [pluginReact(), pluginReactInspector()],
});
```

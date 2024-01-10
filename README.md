
<p align="center">
<a href="https://www.npmjs.com/package/rsbuild-plugin-react-inspector"><img src="https://raw.githubusercontent.com/hunghg255/rsbuild-plugin-react-inspector/main/logo.svg" width="180" alt="rsbuild-plugin-react-inspector"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rsbuild-plugin-react-inspector" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/rsbuild-plugin-react-inspector.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/rsbuild-plugin-react-inspector" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/rsbuild-plugin-react-inspector.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=rsbuild-plugin-react-inspector" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/rsbuild-plugin-react-inspector" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/rsbuild-plugin-react-inspector/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/rsbuild-plugin-react-inspector/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/rsbuild-plugin-react-inspector" alt="License" /></a>
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

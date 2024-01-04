import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { pluginReactInspector } from 'rsbuild-plugin-react-inspector';

export default defineConfig({
  plugins: [pluginReact(), pluginReactInspector()],
});

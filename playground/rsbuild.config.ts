import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { pluginReactInspector } from '../dist/index';

export default defineConfig({
  plugins: [pluginReact(), pluginReactInspector()],
});

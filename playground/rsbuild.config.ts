import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

import { pluginReactInspector } from 'rsbuild-plugin-react-inspector';

export default defineConfig({
  // dev: {
  //   setupMiddlewares: [
  //     ({ unshift }, server) => {
  //       unshift((req, res, next) => {
  //         if (req.url.startsWith('/__open-in-editor')) {
  //           launchEditorMiddleware()(req, res, next);
  //           return;
  //         }

  //         next();
  //       });
  //     },
  //   ],
  // },
  plugins: [pluginReact(), pluginReactInspector()],
});

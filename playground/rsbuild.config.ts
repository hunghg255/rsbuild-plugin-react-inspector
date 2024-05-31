import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginConsoleDebug } from 'rsbuild-plugin-console-debug';

import { pluginReactInspector } from '../src';

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
  plugins: [pluginReact(), pluginReactInspector(), pluginConsoleDebug()],
});

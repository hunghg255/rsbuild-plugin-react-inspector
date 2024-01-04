import type { RsbuildPlugin } from '@rsbuild/core';

import { resolvePackage } from '@rsbuild/shared';
import { startServer } from './server/server';

export const pluginReactInspector = (options?: { port: number }): RsbuildPlugin => {
  const port = options?.port || 3070;

  return {
    name: 'rsbuild-plugin-react-inspector',
    setup(api) {
      if (api.context.bundlerType === 'webpack' || process.env.NODE_ENV !== 'development') {
        return;
      }

      api.modifyRsbuildConfig((config) => {
        const tags: any = config?.html?.tags || [];
        config.html = {
          tags: [
            ...tags,
            {
              tag: 'script',
              "head": true,
              attrs: {
                type: 'module',
                src: `http://localhost:${port}/virtual-react-inspector-path-load.js`,
              },
            },
          ]
        };

        return config;
      });

      api.onAfterStartDevServer(() => {
        startServer(port, api?.context?.rootPath);
      });

      api.modifyBundlerChain(async (chain, utils) => {
        chain.module
          .rule(utils.CHAIN_ID.RULE.TS)
          .test(/\.(tsx|jsx)$/i)
          .use(utils.CHAIN_ID.RULE.TS)
          .loader(resolvePackage('./core/applyInspector.js', __dirname))
          .end();
      });
    },
  };
};

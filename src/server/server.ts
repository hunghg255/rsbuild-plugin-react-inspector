import { createServer } from 'node:http';
import { resolve, join } from 'node:path';
import { cwd } from 'node:process';
import {
  createApp,
  eventHandler,
  getQuery,
  setResponseHeader,
  toNodeListener,
} from 'h3';
import launch from 'launch-editor';
import { defineCorsEventHandler } from '@nozomuikuta/h3-cors';
import { DIR_CLIENT } from './dir';
import fs from 'node:fs';

export async function startServer(port: number = 4567, rootPath) {
  let content = fs.readFileSync(resolve(DIR_CLIENT), 'utf-8');

  content = content.replace(
    '__PATH_ROOT_VALUE__',
    rootPath || join(process.cwd()),
  );

  try {
    await fetch(`http://localhost:${port}/health`);
  } catch (error) {
    const app = createApp();
    app.use(
      defineCorsEventHandler({
        origin: '*',
      }),
    );
    app.use(
      '/health',
      eventHandler(() => {
        return {
          message: 'ok',
        };
      }),
    );

    app.use(
      '/virtual-react-inspector-path-load.js',
      eventHandler((res) => {
        setResponseHeader(
          res,
          'Content-Type',
          'application/javascript; charset=utf-8',
        );
        return content;
      }),
    );

    app.use(
      '/__open-in-editor',
      eventHandler(async (event) => {
        try {
          const { file } = getQuery(event) as { file: string };
          launch(resolve(cwd(), file));
          return {
            message: 'ok',
          };
        } catch (error) {
          return {
            error: String(error),
          };
        }
      }),
    );
    createServer(toNodeListener(app)).listen(port);
  }
}

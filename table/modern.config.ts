import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    port: 8081,
  },
  runtime: {
    router: true,
    //     state: true,
  },
  deploy: {
    microFrontend: true,
  },
  plugins: [
    appTools({
      bundler: 'webpack', // Set to 'experimental-rspack' to enable rspack ⚡️🦀
    }),
    garfishPlugin(),
  ],
});

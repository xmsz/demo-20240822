import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    port: 8080,
  },
  runtime: {
    router: true,
    masterApp: {
      apps: [
        {
          name: 'Table',
          entry: 'http://localhost:8081',
          // activeWhen: '/table'
        },
        {
          name: 'Dashboard',
          entry: 'http://localhost:8082',
          // activeWhen: '/dashboard'
        },
      ],
    },
  },
  plugins: [
    appTools({
      bundler: 'webpack', // Set to 'experimental-rspack' to enable rspack ⚡️🦀
    }),
    garfishPlugin(),
  ],
});

import { Config } from '@rindo/core';

// https://rindojs.web.app/docs/config

export const config: Config = {
  enableCache: false,
  namespace: 'rindo-state-tunnel',
  outputTargets: [
    {
      type: 'dist'
    }
  ]
};

import { build } from 'esbuild';

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node14',
  outfile: 'dist/index.js',
  sourcemap: true,
  external: ['@solana/web3.js', '@solana/spl-token'],
}).catch(() => process.exit(1));
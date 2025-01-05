import { MauveAgent } from '../src';
import { Connection } from '@solana/web3.js';

async function main() {
  const agent = new MauveAgent({
    connection: new Connection('https://api.mainnet-beta.solana.com'),
  });

  const result = await agent.execute({
    task: 'analyze_market',
    parameters: {
      token: 'SOL',
      timeframe: '1h',
    },
  });

  console.log('Analysis result:', result);
}

main().catch(console.error);
import { MauveAgent } from '../src/agent';
import { Connection } from '@solana/web3.js';

describe('MauveAgent', () => {
  let agent: MauveAgent;

  beforeEach(() => {
    agent = new MauveAgent({
      connection: new Connection('https://api.mainnet-beta.solana.com'),
    });
  });

  test('should initialize correctly', () => {
    expect(agent).toBeDefined();
  });

  test('should execute tasks', async () => {
    await expect(
      agent.execute({
        task: 'analyze_market',
        parameters: { token: 'SOL' },
      })
    ).rejects.toThrow('Not implemented');
  });
});
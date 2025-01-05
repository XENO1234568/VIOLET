import { Connection } from '@solana/web3.js';

export interface AgentConfig {
  connection: Connection;
  programId?: string;
}

export interface TaskParameters {
  task: string;
  parameters: Record<string, any>;
}
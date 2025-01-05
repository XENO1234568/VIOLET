import { Connection } from '@solana/web3.js';

export interface AgentConfig {
  connection: Connection;
  programId?: string;
  settings?: AgentSettings;
}

export interface AgentSettings {
  riskLevel?: 'low' | 'moderate' | 'high';
  maxSlippage?: number;
  autoRebalance?: boolean;
  tradingPairs?: string[];
}
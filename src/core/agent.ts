import { Connection } from '@solana/web3.js';
import { AgentConfig } from '../types';
import { validateConfig } from '../utils/validation';
import { MarketAnalyzer } from './market-analyzer';
import { TaskExecutor } from './task-executor';

export class MauveAgent {
  private connection: Connection;
  private config: AgentConfig;
  private marketAnalyzer: MarketAnalyzer;
  private taskExecutor: TaskExecutor;

  constructor(config: AgentConfig) {
    validateConfig(config);
    this.connection = config.connection;
    this.config = config;
    this.marketAnalyzer = new MarketAnalyzer(this.connection);
    this.taskExecutor = new TaskExecutor(this.connection, this.config);
  }

  async execute(params: TaskParameters) {
    return this.taskExecutor.execute(params);
  }

  async analyze(token: string) {
    return this.marketAnalyzer.analyze(token);
  }
}
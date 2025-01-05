import { AgentConfig } from '../types/config';

export function validateConfig(config: AgentConfig): void {
  if (!config.connection) {
    throw new Error('Connection is required');
  }

  if (config.settings?.maxSlippage && (config.settings.maxSlippage < 0 || config.settings.maxSlippage > 100)) {
    throw new Error('Max slippage must be between 0 and 100');
  }
}
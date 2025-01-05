export interface TaskParameters {
  task: string;
  parameters: Record<string, any>;
}

export interface TaskResult {
  success: boolean;
  data: any;
  error?: string;
}
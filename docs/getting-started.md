# Getting Started

## Installation

```bash
npm install @mauve/agent
```

## Basic Setup

```typescript
import { MauveAgent } from "@mauve/agent";
import { Connection } from "@solana/web3.js";

const agent = new MauveAgent({
  connection: new Connection("https://api.mainnet-beta.solana.com")
});
```

## Configuration

The agent can be configured with various options:

```typescript
const config = {
  connection: new Connection("https://api.mainnet-beta.solana.com"),
  programId: "your_program_id", // Optional
  // Add more configuration options as needed
};
```

## Basic Usage

```typescript
// Execute a simple task
await agent.execute({
  task: "analyze_market",
  parameters: {
    token: "SOL",
    timeframe: "1h"
  }
});
```
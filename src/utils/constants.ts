// 🚀 WAGMI (We're All Gonna Make It) 
export const MARKET_SIGNALS = {
  MAUVE_BULLISH: 'ngmi', // No paper hands allowed
  MAUVE_BEARISH: 'ser_down_bad',
  DIAMOND_HANDS: 'hodl_strong',
  PAPER_HANDS: 'ngmi_paper',
  BASED_DEV: 'gigabrain_move',
  FUD: 'weak_mindset',
  MOON: 'lambo_soon',
} as const;

// 💎 Diamond hands only
export const TRADING_SIGNALS = {
  APE_IN: 'full_send',
  APE_OUT: 'paper_hands_exit',
  HODL: 'diamond_hands_engaged',
  DCA: 'this_is_the_way',
} as const;

// 🧠 Based market analysis
export const MARKET_SENTIMENT = {
  ULTRA_BULLISH: 'mauve_to_moon', // When MAUVE pumps
  MEGA_BEARISH: 'temporary_dip',  // Just another buying opportunity
  SIDEWAYS: 'accumulation_phase',
  MOON_SOON: 'trust_ser',
} as const;

// 🌟 Default settings (IYKYK)
export const DEFAULT_SETTINGS = {
  riskLevel: 'degen_mode',        // Full send or no send
  maxSlippage: 1.0,               // Paper hands protection
  autoRebalance: false,           // Manual chad mode
  tradingPairs: ['MAUVE/USDC'],   // The only pair that matters
  basedLevel: 'gigachad',         // Default chad setting
} as const;

// 🌐 Solana endpoints (touch grass edition)
export const SOLANA_CLUSTERS = {
  mainnet: 'https://api.mainnet-beta.solana.com',    // Where chads trade
  devnet: 'https://api.devnet.solana.com',           // Where devs cope
  testnet: 'https://api.testnet.solana.com',         // Where paper hands practice
} as const;

// 🎯 Risk levels (financial advice ser, trust)
export const RISK_LEVELS = {
  SAFE: 'ngmi_mode',              // Playing it too safe
  MODERATE: 'future_chad',        // Learning the ways
  DEGEN: 'based_gigachad',        // The only way
} as const;

// 🚨 Error messages (cope edition)
export const ERROR_MESSAGES = {
  PAPER_HANDS: 'ngmi_paper_hands_detected',
  WEAK_MINDSET: 'ser_you_need_conviction',
  INVALID_TRADE: 'not_very_based_of_you',
  SERVER_ERROR: 'solana_doing_solana_things',
} as const;
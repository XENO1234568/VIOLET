export interface MarketData {
  price: number;
  volume: number;
  timestamp: number;
  change24h: number;
  high24h: number;
  low24h: number;
  basedLevel?: 'ngmi' | 'based' | 'gigachad'; // Chad metrics
  paperhanded?: boolean;         // Paper hands detector
  moonStatus?: 'soon' | 'very_soon' | 'imminent'; // Scientific predictions
  copium?: number;              // Cope index 0-100
}
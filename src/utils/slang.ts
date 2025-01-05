// 🎮 Crypto slang translator
export const translateSlang = (term: string): string => {
  const slangDictionary = {
    bullish: 'mauve_pilled',
    bearish: 'ngmi_mindset',
    buy: 'ape_in',
    sell: 'paper_hands',
    hold: 'diamond_hands',
    dip: 'buying_opportunity',
    pump: 'moon_time',
    dump: 'whale_games',
    moon: 'lambo_soon',
    fud: 'weak_mindset',
  };

  return slangDictionary[term.toLowerCase()] || term;
};

// 🎯 Based level calculator
export const calculateBasedLevel = (
  holdTime: number,
  paperHanded: boolean,
  dipsBottomed: number
): string => {
  if (paperHanded) return 'ngmi_paper_hands';
  if (holdTime > 365) return 'diamond_hands_chad';
  if (dipsBottomed > 10) return 'dip_buying_gigachad';
  return 'future_chad_potential';
};
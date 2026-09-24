const clamp = n => Math.max(0, Math.min(1, n));
function normalize(values, invert=false) { const lo=Math.min(...values), hi=Math.max(...values); return values.map(v => hi===lo ? .5 : clamp((invert ? hi-v : v-lo)/(hi-lo))); }
export function rankStocks(stocks, weights) {
  const m=normalize(stocks.map(s=>s.momentum)), v=normalize(stocks.map(s=>s.volatility),true), n=normalize(stocks.map(s=>s.sentiment));
  return stocks.map((s,i)=>{const components={momentum:m[i]*weights.momentum,volatility:v[i]*weights.volatility,sentiment:n[i]*weights.sentiment};return {...s,components,score:Object.values(components).reduce((a,b)=>a+b,0)*100};}).sort((a,b)=>b.score-a.score);
}
export function explainRanking(ranked) {
  if (!ranked.length) return [];
  const leader=ranked[0], keys=Object.entries(leader.components).sort((a,b)=>b[1]-a[1]);
  return [
    {title:`${leader.ticker} ranks first`,text:`Its strongest contribution is ${keys[0][0]} (${(keys[0][1]*100).toFixed(1)} points), followed by ${keys[1][0]} (${(keys[1][1]*100).toFixed(1)} points).`},
    {title:'The order is relative',text:'Scores are normalized only across the stocks selected for this run. Adding or removing a stock can change every normalized score.'},
    {title:'Outcome is held back',text:'The ranking uses only point-in-time factors. Later returns remain hidden until you choose to reveal them, reducing hindsight bias in the first review.'}
  ];
}

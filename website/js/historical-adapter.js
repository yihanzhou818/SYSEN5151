export class HistoricalAdapter {
  constructor(url = './data/historical.json') { this.url = url; this.cache = null; }
  async load() { if (!this.cache) { const r = await fetch(this.url); if (!r.ok) throw new Error('Historical dataset could not be loaded.'); this.cache = await r.json(); } return this.cache; }
  async listSnapshots() { return (await this.load()).snapshots; }
  async getSnapshot(date) { const data = await this.load(); return data.snapshots.find(s => s.date === date); }
  async metadata() { return (await this.load()).dataset; }
}

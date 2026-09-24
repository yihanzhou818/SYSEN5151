# StockLens context and boundary

SOI: StockLens System (171150), context asset diagram 199029, Universe 199040; Innoslate project 659. Internal responsibility covers orchestration, scoring, explanation coordination and the dashboard. Historical validation is future work in the course model.

| External element | Interaction | Current realization |
|---|---|---|
| X.01 Research User | Pair/date in, displayed comparison out | Browser operator |
| X.02 Market Data Provider | Request in, market records/observation dates out | market_data_provider fixed stub |
| X.03 News Provider | Request in, news/source IDs/publication dates out | news_provider fixed stub |
| X.04 AI Model Service | Score-evidence package in, explanation out | ai_model_service fixed stub |
| X.05 System Maintainer | Configuration, support and retirement | Documented team role, outside nominal UC.1 |

No brokerage, order placement, portfolio management or new external provider is introduced. The hosted historical lab is an exploratory illustration, not proof of live provider integration.

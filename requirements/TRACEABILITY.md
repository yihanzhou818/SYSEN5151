# SYSEN 5151 Traceability Matrix

This Chapter 2 mapping uses modeled functions and stakeholder needs. Formal requirement identifiers remain TBD until requirements are approved; implementation does not create requirements retroactively.

| Stakeholder need | Model function | Requirement | Interface | Implementation | Check | Status |
|---|---|---|---|---|---|---|
| Compare two stocks consistently | UC.1.1–UC.1.5 | TBD | UI → StockLens → market/news providers | frontend, dashboard_ui, stocklens_system, market_data_provider, news_provider | tests/test_uc1.py | Fixed nominal path checked |
| Understand ranking drivers | UC.1.6–UC.1.7 | TBD | StockLens → AI Model Service → UI | ai_model_service, dashboard_ui | tests/test_uc1.py; tests/site.test.mjs | Stub explanation only |
| Inspect dated evidence | UC.1.8 | TBD | Dashboard → Research User | frontend/index.html; website/skeleton.html | Browser display check in docs/verification.md | Evidence displayed; human inspection pending |

See docs/model-code-reconciliation.md for allocation details and docs/submission-checklist.md for open course deliverables.

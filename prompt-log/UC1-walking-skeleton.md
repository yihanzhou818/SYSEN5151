# UC.1 walking skeleton — bounded increment

## LOCATE
Sources: SYSEN 5151 Lab Manual v3.0 (7 September 2026), pp. 53–56; Innoslate project 659, UC.1 Action/Activity/Sequence root 185145. User authorized model, code and report alignment. Remote baseline has empty backend/main.py and frontend/index.html. SPEC.md contains placeholders; no formal functional requirement is asserted here.

## EXTRACT
UC.1 Compare Stocks & Evaluate Ranking: Research User selects stock pair/date; Dashboard / UI transmits request; StockLens System queries External API; External API returns market/news evidence; StockLens System calculates ranking; External API supplies explanation; Dashboard / UI renders result; Research User inspects drivers/citations. Data includes identifiers and dates. Human inspection is not an automated validation result.

## CONSTRAIN
Python 3.12 and FastAPI as specified by repository. Fixed fictional fixture only. No real market access, AI call, ranking algorithm, investment recommendation, exception handling, retries or application logging. FastAPI and uvicorn are justified by the specified HTTP backend and local browser demonstration. Standard-library unittest checks wiring; no additional test framework. Existing local uncommitted work remains outside this clone.

## PROMPT
Implement one nominal UC.1 request using dashboard_ui/, stocklens_system/ and external_api/ participants and a human Research User. Preserve their model names in documentation. Add a minimal same-origin form and FastAPI transport. Return hard-coded market evidence, ranking and explanation; pass results through each modeled boundary. Add a numbered call list and tests of call order, field shape and returned evidence. Allowed changes: these modules, backend/main.py, frontend/index.html, dependency file, tests, README and docs. Do not claim actual AI or performance validation. Reconcile diagram differences explicitly before declaring alignment complete.

## REVIEW / RECONCILE
Pending execution and final live-model reconciliation. This is an AI-assisted engineering record, not evidence of teammate review.

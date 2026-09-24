# StockLens — SYSEN 5151

An AI-assisted stock research concept for students and beginning investors. A researcher selects a stock pair and date, StockLens obtains dated market and news evidence, produces a comparison, and displays score drivers, an explanation and supporting sources. The user inspects the evidence. Trading and portfolio management are outside the scope.

Group 29: Yihan Zhou, Shuxuan Wang, Henian Li, Xinyuan Yan, David Limmer, Rosa Szurgot.

## Run the Chapter 2 Walking Skeleton

```sh
python3 -m venv backend/.venv
backend/.venv/bin/python -m pip install -r backend/requirements.txt
backend/.venv/bin/python -m uvicorn backend.main:app --host 127.0.0.1 --port 8765 --no-access-log
```
Open http://127.0.0.1:8765 and select **Compare fixture**. One request traverses UI → StockLens → market stub → news stub → ranking stub → AI stub → UI. It returns fictional fixed data. No real provider or AI call occurs.

## Website

`website/` contains the migrated research interface and `skeleton.html`, a browser-only mirror of UC.1. The research lab's numerical data is illustrative and awaits source verification. Its scoring is deterministic; its explanation is a template. This exploratory view is separate from the fixed-stub Chapter 2 deliverable. GitHub Pages hosts static files, not the Python API.

Preview: `python3 -m http.server 8080 --directory website --bind 127.0.0.1`.

## Engineering records

- [Context and external systems](docs/context.md)
- [Numbered call list and demonstration](docs/walking-skeleton.md)
- [User story map](docs/user-story-map.md)
- [Environment](docs/environment.md)
- [Model/code reconciliation](docs/model-code-reconciliation.md)
- [Architecture decisions](docs/adr/)
- [Validation and test evidence](docs/verification.md)
- [Submission checklist](docs/submission-checklist.md)
- [Prompt log](docs/prompt-log.md)
- [Innoslate project](https://cloud.innoslate.com/cornell/p/659/diagrams)

## Check

```sh
python3 -m unittest discover -s tests -v
node --test tests/site.test.mjs
```
Formal requirement derivation is pending; SPEC.md retains preliminary headings. The course PDF and model supply the conceptual baseline. Proposed user MOEs are not completed test results.

## Reference and provenance

The existing StockLens website was supplied by the project owner and migrated with corrections recorded in ADR 0002. [EarthBreath](https://github.com/hg533-web/earthbreath-dashboard) was inspected for README/setup organization only. No EarthBreath code or dataset was copied. Its later-stage APIs and accounts are not requirements for this Chapter 2 increment.

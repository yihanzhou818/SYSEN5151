# StockLens System Specification

SYSEN 5151 · Group 29 · Repository baseline updated October 6, 2026

## Baseline and authority

This specification translates the team's *Stakeholder Needs and Requirements Definition* report, dated October 1, 2026, into a repository-readable baseline. The need and requirement statements below preserve the report's wording and identifiers. They are proposed stakeholder obligations, not claims of completed implementation or formal approval.

Sources:
- [Stakeholder Needs and Requirements Definition report](https://www.overleaf.com/project/6abc3c1cd54da187b6fd4a97): Sections 2.1–2.5, 3.1–3.3, and 4; current source reviewed October 6.
- Group 29, *Business or Mission Analysis*, September 19, 2026: inherited research scope and UC.1 behavioral baseline.
- [Innoslate project 659](https://cloud.innoslate.com/cornell/p/659/diagrams): modeled needs, requirements and behavior. Allocation descriptions below follow the report's October 1 model review; they are not a new live model audit.
- SYSEN 5151 Lab Manual v3.0, Chapter 3, including Section 3.5: repository specification and product-build evidence.
- Implementation inspected at commit `eeb36197d684aa40338d6d271e8387611efbcb0b`; subsequent code changes require reconciliation.

Read the target requirements separately from the current implementation status. This file does not approve previously unresolved parameters, create new functional requirement IDs, or mark stakeholder validation complete. Earlier repository documents describing requirement derivation as pending reflect the Chapter 2 increment; the SR baseline below now records the report's proposed requirements.

## Milestone 1: needs and acceptance at a glance

A student researcher preparing a two-stock discussion needs a consistent comparison, an explanation they can follow, and evidence they can inspect. StockLens sits between that researcher and external market, news and AI services. The target workflow returns a ranking and its supporting context; the researcher remains responsible for interpreting the result.

The compact view below follows **need → requirement → acceptance condition**. These are summaries for navigation, not replacement requirement statements. The full wording appears under Stakeholder Needs and Requirements; assessment rules and evidence appear under Validation. Acceptance remains proposed and is distinct from the fixed-fixture checks that have passed.

| Need | Traces to | Acceptance summary | Current evidence boundary |
|---|---|---|---|
| N-01: consistent comparison | SR-01 / MOE-01 | Both eligible stocks use the same analysis date and documented scoring configuration; proposed user-task target: at least 80% correct unassisted completion. | The fixed fixture runs; eligible-universe and full scoring conformance are not established. |
| N-02: understandable ranking | SR-02 / MOE-02 | Explanation identifies the selected computed drivers and correct values; proposed target: at least 80% identify both requested drivers unassisted. | Fixed or template explanations; no completed user assessment or real AI grounding check. |
| N-03: inspectable evidence | SR-03 / MOE-03 | Each assessed news claim has supporting evidence and required dates; proposed target: at least 80% locate sources and distinguish the three dates unassisted. | Fixture source/date display is demonstrated; real source support is not validated. |
| N-04: feasible delivery | SR-04 / MOE-04 | UC.1 runs within the agreed environment, time and resource baseline. | Nominal path checked; time/resource limits still require confirmation. |
| N-05: reviewable traceability | SR-05 / MOE-05 | All eight requirements link to needs, model entities, validation methods and evidence status. | Report-derived links recorded; legacy repository records still need reconciliation. |
| N-06: independent operation | SR-06 / MOE-06 | A non-author completes startup, run, shutdown and handover or retirement without undocumented help. | Run instructions exist; independent operator assessment is not complete. |
| N-07: appropriate provider use | SR-07 / MOE-07 | All in-scope provider use conforms to applicable access, retention and display conditions. | Stub calls do not establish compliance for future real services. |
| N-08: appropriate AI inputs | SR-08 / MOE-08 | All assessed requests conform to an approved schema and exclude credentials and unnecessary personal information. | Schema approval and an executable request gate remain open. |

The proposed 80% targets require confirmation of sample size and scoring rules. **Not assessed is not a pass.** This page does not certify satisfaction of SR-01–SR-08.

### Demonstrated scope and deferred work

**This milestone's demonstrated slice:** the UC.1 fixed-fixture path, its participant order, fixture identity, and display of a ranking, explanation and source/date context. The browser research lab separately demonstrates illustrative weighted scoring; it is not a live market-data or AI integration.

**Deferred implementation and assessment:** real provider connections, a grounded AI explanation, approved request-schema enforcement, complete requirement-linked acceptance evidence, provider-use review and independent handover assessment. These remain obligations or decisions in the baseline; calling them deferred does not remove them from scope.

**Outside the system baseline:** automated trading, order execution, personalized portfolio management and intraday support. No response-time threshold is borrowed from another team's example.

## System of Interest

StockLens is an AI-assisted stock research and ranking platform for student researchers and beginning investors. A research user selects two stocks and an analysis date, obtains a comparison on a consistent basis, and inspects the ranking's explanation and dated supporting evidence. The purpose is to support research and understanding, not to prescribe investment decisions.

The inherited target scope is up to 100 predefined U.S. stocks using daily market observations. The exact eligible universe and versioned scoring configuration remain open decisions. Automated trading, order execution, personalized portfolio management and intraday support are outside the baseline.

The system boundary includes the Dashboard/UI and StockLens processing. The research user, market-data provider, news provider and AI model service interact across that boundary. Project delivery, evaluation and maintenance are lifecycle responsibilities; they are not additional steps in the user's nominal comparison sequence.

### Current demonstrable slice

The local FastAPI walking skeleton traverses UI → StockLens → market stub → news stub → ranking stub → AI stub → UI. It always returns fictional DEMO_A/DEMO_B data dated 2026-09-18, fixed scores 60/40, a fixed explanation and source FIXTURE-01. Changing the requested pair or date does not change or relabel that fixture.

`website/skeleton.html` is a JavaScript mirror of this fixed nominal path. The separate research interface in `website/index.html` includes deterministic weighted scoring and template explanations over illustrative data whose provenance is not yet verified. It is exploratory and does not silently expand this two-stock requirements baseline. GitHub Pages serves static files; it does not run the Python API.

## Stakeholders

| ID | Stakeholder | Principal concern / role |
|---|---|---|
| ST-01 | Research users: students and beginning investors | Comparable results, understandable drivers and inspectable evidence. Maya Chen and Daniel Brooks are scenario-based personas, not interviewed participants. |
| ST-02 | StockLens project team | Feasible delivery within agreed scope, time, skills and service resources. |
| ST-03 | Course evaluators / project reviewers | Traceable reasoning, model consistency and evidence that distinguishes plans from results. |
| ST-04 | System maintainers | Repeatable operation, handover or retirement without undocumented knowledge. |
| ST-05 | Market-data and news providers | Access, retention and display consistent with applicable service conditions. |
| ST-06 | AI-service provider | Appropriate analysis inputs through approved service access. |

Research users have high interest and medium formal power. The team, evaluators and maintainers require close engagement; external providers have substantial dependency-related power but lower direct interest in the course submission. Provider conditions constrain the project team's behavior; providers are not assigned implementation of StockLens controls.

## Stakeholder Needs

These effective needs preserve the report's stakeholder wording. Each N-xx refines PN-xx with CTQ-xx and leads to SR-xx; the full primitive-needs and CTQ rationale remains in report Section 2.5.

| Need / source | Effective need |
|---|---|
| N-01 / ST-01 | I need to compare two stocks on a common analysis date using a consistent indicator basis. |
| N-02 / ST-01 | I need to understand a displayed ranking through the computed drivers that explain the difference between the stocks. |
| N-03 / ST-01 | I need inspectable, dated evidence for the news claims used in my stock comparison. |
| N-04 / ST-02 | We need an agreed core research workflow that our team can deliver within its available time, skills and service resources. |
| N-05 / ST-03 | I need a traceable account of how each stakeholder requirement follows from a need and is supported by model and assessment evidence. |
| N-06 / ST-04 | I need continuity of operation through instructions that another team member can follow without the original author's undocumented knowledge. |
| N-07 / ST-05 | We need the project's use of our services and content to remain within the conditions applicable to the selected access arrangements. |
| N-08 / ST-06 | We need the analysis request to contain only the inputs agreed for that task through the approved service access. |

## Functions

UC.1, **Compare Stocks & Evaluate Ranking**, is the parent behavior (Innoslate entity 185145). The formal Use Case view is rooted at entity 199938. UC identifiers are model action identifiers, not substitute requirement IDs.

| Action | Modeled behavior | Current implementation / responsibility |
|---|---|---|
| UC.1.1 | Select stock pair and analysis date | Research user operates `frontend/index.html`. |
| UC.1.2 | Transmit evaluation request | `dashboard_ui.transmit_evaluation_request`; local `POST /compare`. |
| UC.1.3 | Query external data feeds | `stocklens_system.query_external_data_feeds` calls both provider stubs. |
| UC.1.4.1 | Return market data | `market_data_provider.return_market_data`; fictional fixed records. |
| UC.1.4.2 | Return news evidence | `news_provider.return_news_evidence`; fictional fixed source. |
| UC.1.5 | Calculate and normalize ranking scores | `stocklens_system.calculate_and_normalize_ranking_scores`; fixed values in the skeleton, not a real calculation. |
| UC.1.6 | Synthesize grounded AI explanation | `ai_model_service.synthesize_grounded_ai_explanation`; fixed text, no AI call. |
| UC.1.7 | Render comparison dashboard | `dashboard_ui` and frontend display scores, explanation and source information. |
| UC.1.8 | Inspect drivers and evidence | Human research-user activity; not automated acceptance. |

The report allocates SR-02 to UC.1.6 (186309) and UC.1.7 (186503), and SR-03 to UC.1.7. UC.1.8 is inspection, not the system's provision of explanation or evidence. The nominal implementation serializes the market and news calls before ranking.

### Lifecycle and request-control allocations

| Action / entity | Intended responsibility | Performer recorded in the report | Requirement |
|---|---|---|---|
| A-04 / 219105 | Deliver Bounded Research Demonstration; retain scope, limits and run evidence | ST-02 project team (217610) | SR-04, together with UC.1 |
| A-05 / 216873 | Maintain Requirements Traceability | ST-02 project team | SR-05 |
| A-06 / 217607 | Maintain Operating and Transition Procedure | X.05 System Maintainer (199037), corresponding to ST-04 | SR-06 |
| A-07 / 217608 | Control Service and Content Use | Project team and maintainer | SR-07 |
| A-08 / 217609 | Control AI Analysis-Request Content | StockLens System (171150) | SR-08 |

These Action IDs are distinct from BMA assumption IDs. A-04–A-07 are lifecycle work. UC.1.6's reported dependency on A-08 expresses an intended precondition; it does not demonstrate an implemented request gate or an added Activity/Sequence control-flow step. The current stub does not enforce an approved AI-request schema.

## Requirements

The following statements are transcribed from report Section 3.1. SR-01–SR-03 and SR-08 specify system behavior; SR-04–SR-07 specify project delivery and support obligations.

| Requirement / origin | Statement | Rationale |
|---|---|---|
| SR-01 / N-01 | StockLens shall display a comparison of two eligible stocks using a common analysis date and the same documented indicator and scoring configuration. | Maya and Daniel need a common basis for interpreting the two results. |
| SR-02 / N-02 | StockLens shall provide an explanation of each displayed ranking that identifies the ranking's main computed drivers and their corresponding indicator values. | The explanation must connect the user's interpretation to the calculation, rather than substitute AI wording for scoring. |
| SR-03 / N-03 | StockLens shall associate each displayed news claim with an inspectable supporting source identifier and publication date, alongside the analysis and market-data dates for the comparison. | Inspectable evidence and distinct dates help the user assess support and freshness. |
| SR-04 / N-04 | The StockLens project shall deliver an executable instance of the agreed UC.1 research workflow within the time and service-resource limits recorded in the demonstration baseline. | Ben's delivery concern requires a bounded workflow that the team can finish with its available resources. |
| SR-05 / N-05 | The StockLens project shall maintain a traceability record for each stakeholder requirement identifying its originating need, related model entities, validation method and evidence status. | Elena needs to follow the reasoning and distinguish planned assessment from completed evidence. |
| SR-06 / N-06 | The StockLens project shall provide an operating and transition guide enabling a team member other than its author to start, run and shut down the demonstration and carry out the documented handover or retirement procedure without undocumented instructions. | Ben's maintenance concern extends beyond startup to continuity, transfer of responsibility and orderly shutdown. |
| SR-07 / N-07 | The StockLens project shall conduct its use of each selected market-data and news service in accordance with the applicable access, retention and display conditions identified in its dated service-use record. | Recording conditions alone does not meet the need; actual service and content use must conform to them. |
| SR-08 / N-08 | StockLens shall restrict AI analysis-request content to the approved field schema, excluding credentials and unnecessary personal information from that content. | Analysis inputs are limited to the explanation task; service authentication remains separate from analysis content. |

### Interpretation and current coverage

An eligible stock belongs to the agreed universe and has the inputs required by the scoring configuration. Analysis date, market-observation date and news-publication date have different meanings. Missing or differently dated inputs require an agreed rule. “Main computed drivers” must be selected from the actual score breakdown using a confirmed driver-selection rule; fluent text alone is insufficient.

| Requirement | Intended allocation | Evidence available / acceptance gap |
|---|---|---|
| SR-01 | UC.1 | Fixed two-stock path runs. Eligibility, real scoring configuration and user-task acceptance remain unverified. |
| SR-02 | UC.1.6; UC.1.7 | Fixed explanation is displayed. Computed-driver explanation and user comprehension are not established. |
| SR-03 | UC.1.7 | Fictional source ID and publication date appear. Real claim support, inspectability and all three displayed date types require assessment. |
| SR-04 | UC.1; A-04 | A local nominal run is demonstrated. Confirmed time/resource limits and an acceptance run record are still needed. |
| SR-05 | A-05 | Report contains all eight need/requirement mappings. Repository traceability and legacy documentation require synchronization and inspection. |
| SR-06 | A-06 | Setup/run instructions exist. Independent operation plus a documented transition procedure has not been assessed. |
| SR-07 | A-07 | Skeleton makes no real provider calls. Actual selected-service conditions and observed use have not been assessed. |
| SR-08 | A-08 | No external AI request occurs. Approved schema, executable enforcement and payload acceptance evidence are not established. |

## Interfaces

### Implemented local skeleton contract (descriptive, not a new requirement)

| Boundary | Inputs / outputs | Present behavior and limits |
|---|---|---|
| Browser → FastAPI | `POST /compare`; JSON strings `stock_a`, `stock_b`, `analysis_date` | All three fields are declared in `ComparisonQuery`. No explicit eligibility, distinct-stock or calendar-date validation is implemented. |
| Dashboard → StockLens | `stock_pair`: two-element list; `analysis_date`: string | The requested values are retained as `requested_query`. |
| Market stub → StockLens | `fixture`, `stock_pair`, `analysis_date`, `observation_date`, `market_bars[{symbol, close}]` | Fixed fictional closes 100.0/80.0; currency is not declared. No real feed, refresh cadence or outage handling. |
| News stub → StockLens | List of `{id, published_at, title, excerpt}` | FIXTURE-01, date 2026-09-18; no real article or source URL. |
| Ranking → AI stub | Fixture identifiers, dates, `scores[{symbol, score, driver}]`, `sources` | Fixed scores 60/40 and generic driver; not approved real-service input schema. |
| AI stub → StockLens | `{fixture, text, source_ids}` | Fixed text explicitly says no ranking algorithm or AI model ran. |
| FastAPI → Browser | `{mode, requested_query, ranking, explanation}` | Mode is `walking-skeleton-fixed-fixture`; response displayed by `frontend/index.html`. |

`GET /` serves the local frontend. The browser mirror has no Python HTTP boundary. String dates in the fixture use YYYY-MM-DD, but the request model only declares a string. The response is a dictionary rather than an explicit validated response schema. The skeleton supplies no declared policy for nulls, stale observations, missing data, real-provider unavailability, retries or recovery. These limitations must not be represented as approved production behavior.

### Contracts still requiring a team decision

- Market/news data: selected sources; fields, units and currency; event versus publication times; daily acquisition cadence and freshness; null/missing-value rules; eligibility and unavailable-provider behavior; permitted retention and display.
- Scoring: indicator definitions, windows, normalization population, weights, configuration version and driver-selection rule. The exploratory website formula is not automatically the accepted baseline.
- AI model: selected service and version; approved input fields and types; output schema and source association; validation, refusal/failure and fallback behavior; access arrangement. Authentication is separate from analysis content.

## Constraints

- Research-only scope; no trading, portfolio execution, guaranteed-return claims or intraday support.
- Preserve input provenance and distinct date meanings. Do not relabel a fixed fixture as the user's requested real data.
- Keep explanation consistent with checked calculations; it must not silently determine or alter the scoring method.
- Do not commit credentials, passwords, private data or service secrets. Do not include credentials or unnecessary personal information in AI analysis content.
- Obtain and record applicable provider conditions before treating service use as assessed. No service agreement or permission is inferred from the design.
- Freeze the demonstration's time/resource envelope before judging SR-04. No numeric latency, cost or accuracy limit is invented here.

### Development Environment

- Python 3.12; FastAPI backend. Direct package versions are in `backend/requirements.txt`.
- JavaScript browser interface and Node's built-in test runner; CI config uses Node 22.
- Git/GitHub for versioned code and engineering records; GitHub Pages for static hosting only.
- GPT supports reasoning and review; Codex supports implementation and repository work. Follow [AGENTS.md](AGENTS.md) and [.codex/5151-workflow.md](.codex/5151-workflow.md).
- Local startup instructions: [README](README.md) and [walking-skeleton guide](docs/walking-skeleton.md). A runtime environment is required; opening a static page does not start FastAPI.

## Architecture

```text
Research User
    | stock pair + analysis date
    v
Dashboard / UI -- POST /compare --> FastAPI transport
                                      |
                                      v
                               StockLens System
                                 |          |
                                 v          v
                           Market stub   News stub
                                 \          /
                                  dated evidence
                                       |
                                Ranking stub
                                       |
                                AI explanation stub
                                       |
                         result -> Dashboard / UI
                                       |
                              human inspection
```

The Python modules keep the modeled participant boundaries identifiable. Calls to simulated providers are local function calls, not external network integrations. Scoring belongs to StockLens; the AI service is intended to explain the score evidence. The Action, Activity, Sequence and behavioral Spider views describe the same UC.1 baseline, rather than independent implementations. See [walking-skeleton mapping](docs/walking-skeleton.md) and [deployment boundary ADR](docs/adr/0002-provider-and-pages-boundary.md).

## Verification

### Observed checks, October 6, 2026

At implementation commit `eeb3619`:

- `python3 -m unittest discover -s tests -v`: 2 tests passed. They check participant order/evidence handoff and that changing the request never relabels the fixed fixture.
- `node --test tests/site.test.mjs`: 3 tests passed. They check JavaScript/Python fixture parity, exclusion of later outcomes from illustrative scoring, and weighted-contribution arithmetic.
- A local FastAPI instance was started with the declared direct dependencies. Submitting the default query through the browser displayed DEMO_A=60, DEMO_B=40, the fixed explanation and FIXTURE-01 dated 2026-09-18. This is a nominal smoke check, not stakeholder acceptance or a performance measurement.

The repository has an automated test-and-Pages workflow. Its existence is not evidence of requirement-complete CI: the existing tests are primarily UC.1/illustrative-logic checks, not the Lab Manual's complete set of need-named failing acceptance tests. No new tests or runtime behavior are introduced by this specification update.

### Required reconciliation and evidence work

1. Link N/SR IDs to implementation locations and appropriately named tests; update the legacy [traceability matrix](requirements/TRACEABILITY.md) and [model/code reconciliation](docs/model-code-reconciliation.md).
2. Define missing contracts and acceptance cases before implementing real calculations or integrations.
3. Add and commit meaningful failing tests for unmet, sufficiently defined obligations, and ensure the automatic build reports those failures. Do not invent tests for criteria that remain undecided.
4. Retain versions, commands, outputs and discrepancies for subsequent runs. Re-run affected checks after changes.

Passing stub tests proves the tested fixture behavior, not financial correctness, source support, AI grounding, schema enforcement or user understanding.

## Validation

This section preserves the report's proposed assessment plan. No participant study or completed stakeholder acceptance is claimed. The 80% targets for MOE-01–MOE-03 are inherited planning targets, subject to team confirmation together with sample size and the answer rubric before assessment.

| Requirement / measure | Proposed acceptance condition | Method and evidence |
|---|---|---|
| SR-01 / MOE-01 | At least 80% correct, unassisted completion on the first scored attempt; both stocks eligible and assessed with the same date and documented indicator/scoring configuration | User comparison task plus input/configuration inspection; retain answers, assistance, dates and configuration version. |
| SR-02 / MOE-02 | At least 80% identify both requested drivers unassisted; every assessed explanation gives the selected computed drivers and correct values without contradicting the score | User task plus independent calculation review; retain factor values, weights, outputs and discrepancies. |
| SR-03 / MOE-03 | At least 80% locate supporting material and distinguish publication, analysis and market-data dates unassisted; every assessed news claim has inspectable supporting evidence and required dates | User task plus claim/source review; retain source IDs, supporting references, dates and inaccessible/unsupported items. |
| SR-04 / MOE-04 | Agreed UC.1 workflow executes in the documented environment within confirmed time and service-resource limits | Demonstration against a frozen baseline; retain run, elapsed time, resource-use record and deviations. Undefined limits mean not assessable. |
| SR-05 / MOE-05 | 100% of the eight requirements have correct originating-need links, related model entities, validation method and explicit evidence status | Inspect register, report and model; retain review and discrepancies. Recalculate denominator when the baseline changes. |
| SR-06 / MOE-06 | A member other than the guide author completes startup, run, shutdown and documented handover or retirement without undocumented instructions | Observe the complete procedure; retain guide version, assistance, responsibility and transition record. |
| SR-07 / MOE-07 | 100% provider coverage with no unresolved discrepancy between applicable conditions and observed access, retention or display in scope | Compare dated conditions with actual use; retain condition-to-use records and decisions. A register alone is insufficient. |
| SR-08 / MOE-08 | 100% of recorded requests conform to the approved schema, with no credentials or unnecessary personal information in analysis content | Inspect payloads against schema and task purpose; retain redacted evidence. Approved access is a separate prerequisite. |

For the user tasks, both the task-success target and conformance check are necessary. Use the first scored attempt without coaching; assisted, abandoned or incorrect attempts count as unsuccessful. Report numerator, denominator and percentage separately per task. Zero participants or zero relevant observations mean **not assessed**, not 100% success. Finite assessment sets do not prove correctness for all future outputs.

Freeze cases, configuration, targets, assistance rules and exclusions before collecting results. Record SR/N/MOE identifiers; criterion and artifact versions; date and reviewer/operator codes; assessment scope; observations and discrepancies; evidence references; and a separate pass, fail or not-assessed decision for each requirement. Do not average the eight measures into a score that conceals a failure.

## Open decisions and change control

| Decision still needed | Affected requirements |
|---|---|
| Eligible universe, indicator definitions, scoring windows/weights/normalization and missing/stale-data handling | SR-01 |
| Main-driver selection and explanation conformance rule | SR-02 |
| Real source provenance, inspectability, claim support and three-date display | SR-03 |
| Frozen demonstration scope, environment, time and service-resource limits | SR-04 |
| Repository/model/report reconciliation and retained evidence records | SR-05 |
| Selected handover/retirement procedure, responsibilities and independent operator assessment | SR-06 |
| Selected providers, dated conditions and actual-use evidence | SR-07 |
| Approved AI schema, service access, executable request gate and payload assessment set | SR-08 |
| User-study sample, rubric and confirmation of the proposed 80% targets | SR-01–SR-03 |

A change to a need, requirement, scoring configuration, provider condition or AI schema requires review of the associated model allocation, interface, implementation, measure and test. Update the report and model together with repository records when the agreed baseline changes. This specification makes the report baseline accessible in GitHub; it does not close the open decisions or authorize unbounded implementation.

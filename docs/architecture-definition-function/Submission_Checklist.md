# Submission checklist — Architecture Definition: Function

Reviewed against the current Canvas assignment 981139 and Lab Manual v3.0, Sections 6.1–6.4 and 7.1–7.4, on October 22, 2026.

| Requirement | Final evidence | Result |
|---|---|---|
| Integrated Chapter 6 + Chapter 7 report in Word/PDF (5 points) | Final PDF, coherent discussion, references, contribution table | Present |
| Trace flow consistency (40 points) | Corrected native action/sequence, matching uniquely numbered PowerPoint sequence/IDEF0 trace, complete ledger, pencil-test findings | Present; all first-level links accounted for |
| Complete IDEF0 and ICOM discussion (25 points) | Native context and first-level views; all 10 inherited ICOMs; internal flows; explicit staged mechanism exception | Present; no missing inherited I/O |
| Three-level hierarchy and readable partitions (10 points) | Native overall hierarchy; five fully spelled branch projections with native entity IDs and definitions | Present |
| System functional requirements (15 points) | Sixteen original shall statements, higher-level links, rationale, clearly defined MOPs and verification criteria | Present |
| Complete N² and interpretation (5 points) | Native N² plus readable cross-check matrix: four distinct I/O, five directed connections | Present |
| Lab 6.4 endpoint/use-case audit | Product docs/route-table.md; 10 initial HTTP routes -> 7 retained, 3 framework extras disabled; old sandbox controls removed | Executed; runtime route-set test passes |
| Lab 7.4 contract before code | Product docs/internal-flow-list.md -> contracts/api-v1.yaml -> generated client/server -> F.1–F.5 implementation | Executed; contract and code versioned in product release |
| Lab 7.4 divergent design decisions recorded | Product ADR-0004, model entities named | Present |
| Native consistency review | Intelligence rerun; all 30 I/O pass 6/6 heuristics; remaining global/physical/legacy findings scoped in report | Recorded; not a false global pass |
| Model structural/allocation verification | model-evidence/check_submission_model.py | 64/64 pass |
| Actual product checks | Product evidence/ch6-ch7/ | 34 Python + 3 JavaScript checks pass; HTTP/browser checks pass; 20 offline timings |
| Independent oracle detects a meaningful fault | Product evidence/ch6-ch7/fault-detection.json | Deliberately bad rank helper detected |
| Team table | Four assigned responsibilities separated from recorded earlier contributions; David/Rosa N/A | Updated per owner; no invented completion claims |
| Final presentation and PDF review | Editable PPT finalized; final PDF rendered and reviewed; source/PDF images synchronized | Checked in final package |

## Submission boundary

Upload the final PDF to Canvas; supporting PPT/source/model/product archives may accompany it if desired. The report has not been submitted automatically. This checklist verifies artifact completeness for the architecture assignment, not a predicted grade or a claim of completed real-provider integration, user comprehension, provider suitability or independent handover. Those later/full-plan evidence limits are explicitly retained in the report.

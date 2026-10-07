# Milestone 1 evidence checklist / 查漏补缺

Audit date: October 6, 2026. Review date: October 7, 2026.

Primary source: **SYSEN_5151_Project_Milestone_1_Checks_20260912.pdf**, pp. 1–2, supplied by the team. This checklist follows that document's six review areas and A/B/C criteria. It does not award rubric points. The PDF contains no numerical rubric weights.

Evidence inspected: current repository and report source reviewed October 6; report-recorded October 1 Innoslate findings; local automated tests (2 Python + 3 Node passing) and the earlier October 6 agent-operated FastAPI browser run. Current live Innoslate diagrams, stakeholder approval, human acceptance and Canvas submission have not been reverified in this audit. “Pending evidence” does not mean an artifact does not exist.

Status: **Met / 已满足** = evidence observed for the stated milestone condition; **Partial / 部分满足** = some evidence exists but a material condition remains; **Not evidenced / 未核实** = direct evidence unavailable. These are preparation findings, not the instructor's assessment.

## Six official review areas

| Review area (PDF p.2) | Status | Evidence and gap | Completion action / suggested lead |
|---|---|---|---|
| Mission / SoI / Boundary | Met at document level | SPEC System of Interest; docs/context.md distinguish internal UI/orchestration/scoring and X.01–X.05 external roles. Trading and portfolio execution excluded. | Yihan: state mission, user, problem and boundary in one coherent explanation; David verifies current context/hierarchy views. |
| OpsCon & Behavior | Partial | BMA continuity and UC.1 Action/Activity/Sequence/Spider are described in current report Section 4.1; numbered participant sequence exists in docs/walking-skeleton.md. Live diagrams not rechecked here; reported A-08 dependency is not an implemented or modeled pass/fail gate. | David: open all current views and verify same UC.1 actions, assets and boundaries; retain dated native exports and explain nominal versus future exception behavior. |
| Stakeholder Needs | Met at document level | ST-01–ST-06 and N-01–N-08, with PN→CTQ→N refinement, personas and prioritization in report Section 2; SPEC preserves need wording. Personas are scenarios, not completed interviews. | Shuxuan/Henian: explain one persona-to-need connection and its documented rationale; do not claim interview evidence. |
| Requirements Baseline | Partial | Eight “shall” statements and N→SR links now appear in SPEC and repository matrix. Proposed MOE/validation criteria exist. Approved scoring definitions, demonstration limits and AI schema remain unresolved; formal baseline approval not evidenced. | Xinyuan/Rosa: freeze or explicitly retain unresolved parameters, record baseline review and acceptance criteria for every accepted requirement. 80% targets alone are insufficient without cases/sample/rubric. |
| Walking Skeleton | Met for stubbed nominal path | 2 Python and 3 Node tests pass; local browser run displayed DEMO_A=60, DEMO_B=40, FIXTURE-01. The PDF explicitly permits stubs. GitHub Pages is a JavaScript mirror, not the local Python API. | Team: repeat the local run on presentation laptop; keep product and model open. Label fixtures and do not promise live market/AI output. |
| Model-to-Product Linkage | Partial | SPEC and updated traceability matrix connect N/SR/UC to participant modules; research lab is declared exploratory. Live model trace and documented review of exploratory capabilities remain outstanding. | David/Xinyuan: rehearse N-02→SR-02→UC.1.6/1.7→displayed explanation; say precisely which obligation is still stubbed. |

## A. MBSE entrance criteria — each PDF bullet

- [x] Mission/problem and SoI stated: SPEC System of Interest and README.
- [ ] OpsCon modeled and boundary verified against current model: documented; live model inspection pending.
- [x] Significant direct external actors/systems inventoried: Research User, market provider, news provider, AI service, maintainer (lifecycle role).
- [ ] Context, hierarchy and Spider agree on form/function: report describes continuity; current native views must be compared, not inferred from diagram count.
- [ ] Primary use case and appropriate behavior views verified: UC.1 call list and report references exist; live Use Case/Action/Activity/Sequence review pending.
- [ ] Need/requirement quality rules fully reviewed: need wording and “shall” statements present; report records unresolved definitions and 0% entity-quality attributes. Neither that attribute score nor project-wide Intelligence percentage proves semantic quality.
- [ ] Every accepted requirement has need trace and measurable/testable criterion: mappings now complete in the repository; unresolved thresholds/configurations/schema and approval status prevent a blanket completion claim.
- [x] Emerging system-level functions identified: UC.1.1–UC.1.8, including the split provider returns; SR-01–03 and SR-08 identify behavioral obligations. Derived functional requirement IDs are not invented.

## B. Product entrance criteria — each PDF bullet

- [x] Repository follows system context: dashboard_ui, stocklens_system, market_data_provider, news_provider and ai_model_service identify modeled participants.
- [ ] README/context reflect the approved OpsCon: aligned to the report-described concept; formal approval is not evidenced. README's obsolete “SPEC retains preliminary headings” statement corrected.
- [x] One nominal path runs end to end with stubs: agent-operated local run and existing checks; repeat live for the reviewer.
- [x] SPEC developed from report needs/requirements rather than loose product concept; source and ID continuity recorded. Approval status remains explicit.
- [ ] GenAI prompt/provenance complete: earlier bounded prompts and this audit record exist; actual human reviewer and acceptance/rejection dispositions remain pending.
- [x] Current code increments use bounded scope/spec references; this increment changes documentation/display only, not the entire product. Inspect prompt-log/ for prior implementation boundaries.

## C. Pass exit criteria — readiness checks

- [ ] Team can answer SoI / users / problem / boundary / obligations orally. Documents support the answers; a team rehearsal is not observed evidence.
- [ ] Live trace from one need to requirement to modeled function completed in front of a reviewer. Prepared N-02→SR-02→UC.1.6+UC.1.7 route; live rehearsal pending.
- [x] Walking skeleton has documented UC.1 linkage and running participant path.
- [ ] No major unexplained software capability: historical lab permits 2–5 stocks, editable weights and later-return reveal, beyond the two-stock fixture baseline. Its exploratory designation explains its origin but does not establish accepted model coverage. Team should explicitly scope it out of the milestone core proof or reconcile each capability with the model before claiming it as accepted functionality.
- [ ] Ready for detailed architecture without redefining fundamental scope: research-only boundary is stable in documents, but universe, scoring rule, provider choices and request schema need decisions before detailed implementation. Team readiness requires review, not an automated checkmark.

## Priority fixes before presentation

1. **P0 — Show one honest core proof.** Run the local UC.1 fixture. Show N-02, SR-02 and the two satisfying actions in Innoslate; then point to the explanation output. Explain that the wiring works while real computed-driver explanation remains stubbed. Use the historical lab only as a separately labeled exploratory view.
2. **P0 — Verify native model consistency.** Compare Context/Hierarchy/Spider and Use Case/Action/Activity/Sequence. Confirm SR-02→UC.1.6+UC.1.7 and SR-03→UC.1.7, SR-04→UC.1+A-04, SR-05–08→A-05–08. Report statements are not a substitute for current model readback.
3. **P0 — Confirm the accepted baseline.** List accepted versus proposed requirements and open decisions. Do not present unconfirmed MOE targets, schema or time/resource limits as approved criteria.
4. **P1 — Human review/provenance.** Record actual reviewer, date, accepted/rejected changes and remaining assumptions. No teammate identity or review is fabricated.
5. **P1 — Check submission packaging separately.** This two-page PDF does not specify the Canvas upload format, deadline time, all rubric weights or every Lab Manual deliverable. Consult the current Canvas template and Lab Manual for those items.

## Repairs made in this audit

- Added the compact need→requirement→acceptance summary and explicit demonstrated/deferred/out-of-scope distinctions to SPEC.
- Corrected README's stale empty-SPEC status and added specification links.
- Replaced the three-row TBD repository matrix with all eight report-based N/SR/model mappings; corrected the SR-03 allocation to UC.1.7.
- Clarified that stakeholder SR IDs exist while derived functional IDs remain pending.
- Prepared the website specification snapshot and navigation; publication status is verified separately.

No runtime feature, acceptance result, baseline approval or new Innoslate relationship is claimed by these documentation repairs.

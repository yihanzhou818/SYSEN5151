# StockLens need–requirement–model–product traceability

Updated October 6, 2026 from the report-derived baseline in [SPEC.md](../SPEC.md). SR identifiers are proposed stakeholder requirements; formal approval is not asserted. Model allocations below follow the report's October 1 review, not a fresh live Innoslate audit. A design allocation is not verification or acceptance.

| Need / stakeholder | Requirement | Intended model allocation | Product or evidence location | Current check and remaining gap |
|---|---|---|---|---|
| N-01 / ST-01 | SR-01 | UC.1 | frontend/index.html; dashboard_ui/; stocklens_system/ | tests/test_uc1.py checks fixed nominal path, not eligible-universe or real-scoring acceptance; MOE-01 proposed. |
| N-02 / ST-01 | SR-02 | UC.1.6 and UC.1.7 | ai_model_service/; dashboard_ui/; frontend/index.html | Fixed explanation and evidence handoff checked; computed-driver conformance and user understanding unassessed; MOE-02 proposed. |
| N-03 / ST-01 | SR-03 | UC.1.7 | frontend/index.html; news_provider/ | Fictional source/date displayed; real supporting-source inspection and three-date user task unassessed; MOE-03 proposed. UC.1.8 is human inspection, not the satisfying system behavior. |
| N-04 / ST-02 | SR-04 | UC.1 and A-04 | README.md; docs/walking-skeleton.md; tests/test_uc1.py | Nominal run observed; agreed time/resource limits and assessment record still needed; MOE-04 proposed. |
| N-05 / ST-03 | SR-05 | A-05 | SPEC.md; this matrix; report Section 4 | All eight mappings documented; live model/report/repository consistency and reviewer disposition still pending; MOE-05 proposed. |
| N-06 / ST-04 | SR-06 | A-06 | README.md; docs/walking-skeleton.md | Startup/run/shutdown instructions exist; independent operation and handover/retirement evidence pending; MOE-06 proposed. |
| N-07 / ST-05 | SR-07 | A-07 | SPEC.md Constraints and Interfaces | No real providers called by skeleton; selected-service conditions and actual-use assessment pending; MOE-07 proposed. |
| N-08 / ST-06 | SR-08 | A-08; reported UC.1.6 dependency | SPEC.md Interfaces; ai_model_service/ stub | Approved request schema and executable content gate not implemented or accepted; MOE-08 proposed. |

## Live trace example

Open N-02 in the model, follow its SR-02 relationship, then inspect the satisfying UC.1.6 and UC.1.7 actions. Run the fixture and point to its displayed explanation. Explain that the path is demonstrated with a fixed AI stub; the calculated-driver explanation required by SR-02 remains to be implemented and assessed. The report records UC.1.8 as the user's inspection activity, not the system's explanation provider.

See [milestone checklist](../docs/milestone1-checklist.md) for the review scope, pending evidence and follow-up owners. No test listed above is presented as proof of full stakeholder acceptance.

# StockLens — Architecture Definition: Function

SYSEN 5151 · Group 29 · revision October 22, 2026 · due October 25, 2026, 11:59 PM.

## Deliverables

- `StockLens_Architecture_Definition_Function.pdf`: 26-page integrated Chapters 6–7 report.
- `main.tex` and PNG figures: full LaTeX source and native/annotated model figures. GitHub stores the PNGs beside main.tex; the importable source ZIP uses an assets/ folder. Both layouts compile with the supplied graphicspath.
- `StockLens_Function_Tracing.pptx`: editable numbered sequence and IDEF0 trace slides.
- `model-evidence/`: UI-exported Innoslate records, original requirements, before-state use case and structural checks.
- `StockLens_Overleaf_Source.zip`: importable Overleaf source (main.tex and assets).

Live report: https://www.overleaf.com/project/6adaa9879783ef342eef1e3d
Live model: https://cloud.innoslate.com/cornell/p/659/diagrams/idef0/264782
Canvas assignment: https://canvas.cornell.edu/courses/92732/assignments/981139

## Completed model operations

Created five first-level functions and ten subordinate functions; carried all parent I/O to child functions; retained configuration as control and deferred mechanism allocation as instructed by Lab Manual 7.2. Linked all sixteen system requirements to first-level functions. Split market/news query actions and their commands, clarified StockLens calculation ownership, and retained terminal user inspection without inventing an output. Exported native IDEF0, hierarchy, N², action, sequence and requirement views. Added matching numbered external/internal trace arrows and a complete trace ledger to the report.

`functions-verified.json` is the final structural snapshot; `query-branches-final.json` records the final numbering/description correction. `usecase-before.json` is explicitly the earlier state, not a final model. These JSON files are readable audit records, not an Innoslate project import format.

## Verification

Extract `StockLens_Model_Evidence.zip`, then run `python3 model-evidence/check_consistency.py` from this directory. All 22 structural checks passed. Overleaf compiled with 0 errors, 0 warnings and two underfull-box informational messages. The downloaded 26-page PDF was rendered and visually checked.

Structural checks establish model connectivity and allocation. They do not establish live-provider behavior, completed software refactoring, stakeholder acceptance or newly executed software tests. Earlier software evidence remains attributed to the supplied final requirements report. No Canvas submission has been performed.

## Sync scope and workflow

This update synchronizes the Overleaf report and its supporting figures/evidence only. Existing application source remains outside this increment.

LOCATE: Canvas rubric, Lab Manual 6–7, prior final requirements and native Innoslate entities. EXTRACT: ICOM, hierarchy, use-case exchanges and sixteen shall statements. CONSTRAIN: preserve the authorized StockLens baseline, first-level mechanism deferral and truthful evidence status. PROMPT: complete model/report and synchronize report contents, as requested by the project owner. GENERATE: saved native model edits and generated report/trace slides. REVIEW: 22 structural checks, successful Overleaf compilation, visual PDF/slide review. RECONCILE: report findings and limitations match the saved model and distinguish historical software evidence from this revision.

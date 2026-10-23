# StockLens — Architecture Definition: Function

SYSEN 5151 · Group 29 · Chapters 6–7 · revision October 22, 2026 · due October 25, 2026, 11:59 PM.

## Submit and review

Submit `StockLens_Architecture_Definition_Function.pdf` as the integrated report. Canvas accepts Word/PDF for this assignment; the ZIP/PPT/source artifacts below are supporting evidence. No Canvas submission has been performed.

- Live report: https://www.overleaf.com/project/6adaa9879783ef342eef1e3d
- Live model: https://cloud.innoslate.com/cornell/p/659/diagrams/idef0/264782
- Canvas assignment: https://canvas.cornell.edu/courses/92732/assignments/981139
- `Submission_Checklist.md`: exact rubric/manual coverage, repairs and evidence limits.

## Artifacts

- PDF: integrated discussion, three-level hierarchy, readable branch projections, context/first-level IDEF0, N², uniquely numbered sequence/IDEF0 trace, sixteen requirements with rationale/MOP/criteria, actual operations and contribution table.
- `main.tex` and PNGs: matching editable source. GitHub keeps PNGs beside main.tex; the Overleaf source ZIP uses assets/. Both compile with the supplied graphicspath.
- `StockLens_Function_Tracing.pptx`: editable trace figures; configuration step 0 and service-status step 9 now have explicit sequence arrows.
- `StockLens_Overleaf_Source.zip`: importable main.tex and assets/.
- `StockLens_Model_Evidence.zip`: saved native records, scoped Intelligence output, 64-check audit and before-state use case.
- `StockLens_Chapter6_7_Product.zip`: complete versioned product-source release, model-derived OpenAPI contract, generated stubs, F.1–F.5 refactor, route audit, ADR and new executed evidence. PRODUCT_REVISION.txt records its local Git revision; this archive does not claim a push to the separate upstream class repository.

## Verification

All 64 saved-model checks passed. Native I/O Analysis passed 6/6 heuristics (100%); global legacy/physical-stage findings have explicit dispositions in the report and are not hidden. All 34 Python and 3 JavaScript checks passed. Actual loopback HTTP and browser valid/invalid requests were checked; 20 serial offline API comparisons were recorded. A deliberately corrupted ranking helper was detected by the independent calculation oracle.

To check model records, extract the model ZIP and run `python3 model-evidence/check_submission_model.py`.

To run the product, extract its ZIP, enter its root, create a Python 3.12 virtual environment and install `requirements-ch4-lock.txt`. Run `python scripts/generate_internal_stubs.py`, `python -m unittest discover -s tests -v`, and `python scripts/check_ch4_http.py`. For the static mirror use `PYTHON=python node --test tests/site.test.mjs`. Start `python -m walking_skeleton` and open http://127.0.0.1:8765/research.

The product uses explicitly synthetic data; real market/news/AI services remain unselected. Live-provider suitability and stakeholder/independent-handover studies are not claimed as completed. The owner assigned four report responsibilities and marked David Limmer/Rosa Szurgot N/A; assigned responsibilities are distinguished from previously recorded contribution evidence.

## Workflow and sync scope

LOCATE Canvas, full Lab Manual 6–7, native model and the actual a1f7067 product baseline; EXTRACT IF.01–IF.04 and entry points; CONSTRAIN authorized v0.1 calculation and truthful evidence; PROMPT bounded missing-work completion; GENERATE contract before stubs/refactor; REVIEW model, Python, JavaScript, HTTP, browser and PDF; RECONCILE native entity IDs, contract and findings. This GitHub folder synchronizes the Overleaf report and reproducible product evidence. It does not silently overwrite the older application tree at the repository root.

# UC.1 reconciliation and GitHub Pages increment — 2026-09-24

## LOCATE / EXTRACT
Sources: Lab Manual v3.0 (September 7, 2026), §§1.4 and 2.4.2, pp. 33–40 and 53–56; Canvas assignment 981153 inspected September 24; Innoslate project 659 UC.1 root 185145 and the report's split provider baseline.
The manual calls for a repository scaffold, OpsCon README, external context inventory, environment record, ADR, user-story map, numbered call list and one nominal stubbed end-to-end request. No derived functional requirement IDs are approved yet. The Canvas submission is a Word/PDF report with Innoslate diagrams; this repository supplements it.

## CONSTRAIN
Preserve original dirty checkout at /Users/jessie/SYSEN5151. Work in isolated existing branch. Python 3.12 / FastAPI stays. Split aggregate External API into X.02 Market Data Provider, X.03 News Provider and X.04 AI Model Service. Keep ranking and explanation hard-coded in the Chapter 2 skeleton; no real APIs, LLM calls, retry/error-handling or application logging. Preserve the user's existing historical research website as a separately labeled exploratory view. Deploy a static site to GitHub Pages, per user request; GitHub Pages does not run the Python backend. Document that deployment boundary.

## PROMPT
Implement split provider stubs and their orchestration; add source/driver/date handoff checks. Build a browser-executable mirror of the fixed-stub path for Pages, with parity tests against the Python fixture. Migrate the user's public historical lab HTML/CSS/JS/data; remove platform-injected scripts, label unverified historical values honestly, correct formula copy to match code, and keep later outcomes hidden until requested. Add user-story map, model-to-code register, demo instructions and submission checklist. Keep SPEC.md as preliminary headings; do not invent approved requirements or reviewer signatures. Allowed changes: participant modules, backend/frontend, website/, tests/, docs/, README, prompt-log and dependency records. Success: one action renders fixed scores, explanation, dated evidence; both provider records reach scorer; future-return changes cannot affect exploratory ranking; site works at a project subpath.

## REVIEW / RECONCILE
Execution results will be recorded in docs/verification.md after tests. Human review pending; this is an AI-generated draft provenance record, not a signed team review. The team must supply actual reviewer identity and disposition; no historical log entries are reconstructed.

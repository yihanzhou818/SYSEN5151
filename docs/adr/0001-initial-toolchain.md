# ADR 0001 — Initial walking-skeleton toolchain

Status: proposed course-project baseline, implemented for local demonstration.

Use Python 3.12 and FastAPI because SPEC.md and AGENTS.md specify them. Use plain HTML/JavaScript to exercise the same-origin HTTP boundary without a new frontend framework. Use uvicorn to serve FastAPI locally and unittest to check nominal wiring. Provider and AI integrations remain fixed stubs as required by Chapter 2. Revisit when the team selects real providers and derives formal interface/performance requirements; a preference for more infrastructure alone is not sufficient evidence.

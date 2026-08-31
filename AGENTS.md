# SYSEN 5151 AI Engineering Environment

## Mission

This repository is for SYSEN 5151.

GPT and Codex are development-time AI tools.

GPT is primarily used for:
- understanding course material
- interpreting models
- reasoning about requirements
- planning
- reviewing and explaining results

Codex is primarily used for:
- repository inspection
- implementation
- testing
- code review
- documentation
- Git workflows
- executing relevant skills

Neither GPT nor Codex may bypass the systems engineering process below.

---

# Mandatory Workflow

Every implementation increment must follow this exact sequence:

LOCATE
→ EXTRACT
→ CONSTRAIN
→ PROMPT
→ GENERATE
→ REVIEW
→ RECONCILE

The order must not change.

## 1. LOCATE

Find the relevant:
- stakeholder need
- function
- requirement
- interface
- constraint
- model artifact

Do not code yet.

## 2. EXTRACT

Extract only the information required for the current component.

Record:
- requirement IDs
- interface definitions
- inputs
- outputs
- dependencies
- acceptance criteria

## 3. CONSTRAIN

Identify:
- allowed libraries
- forbidden dependencies
- API boundaries
- data restrictions
- architecture constraints
- performance constraints

Do not silently invent missing constraints.

## 4. PROMPT

Create a bounded implementation task.

The prompt must identify:
- what to implement
- requirement IDs
- relevant interfaces
- allowed dependencies
- files allowed to change
- acceptance criteria

Store significant prompts in prompts/ or prompt-log/.

## 5. GENERATE

Codex may now implement the bounded task.

Modify only necessary files.

Do not add unrelated features.

## 6. REVIEW

Review generated work against:
- requirements
- interfaces
- constraints
- tests
- unintended behavior

Use appropriate Codex skills when useful.

## 7. RECONCILE

Compare the implementation back to the system model and requirements.

Identify:
- assumptions
- model/code mismatches
- requirement gaps
- interface mismatches
- necessary model updates

Code execution alone does not mean the task is complete.

---

# Source of Truth

Before implementation, inspect when relevant:

SPEC.md
requirements/
model-artifacts/
existing interfaces
existing tests

Do not invent requirements.

If information is missing or ambiguous, explicitly identify the gap.

---

# AI Tool Roles

## GPT

Use GPT primarily for:
- conceptual reasoning
- requirements interpretation
- systems thinking
- architecture discussion
- prompt preparation
- review support

## Codex

Use Codex primarily for:
- reading the repository
- using Skills
- implementation
- running tests
- reviewing code
- Git operations
- documentation

---

# Skills

Codex may use installed Skills when relevant.

Skills do not override this workflow.

Every skill-assisted implementation must still follow:

Locate
Extract
Constrain
Prompt
Generate
Review
Reconcile

---

# Python Environment

Backend:
backend/

Python:
3.12

Virtual environment:
backend/.venv

Activate with:

source backend/.venv/bin/activate

Backend framework:
FastAPI

---

# Safety and Scope

Never commit:
- API keys
- passwords
- credentials
- secrets
- private data

Do not modify unrelated files.

Do not add dependencies unless justified.

---

# Testing

Tests must trace to requirements whenever possible.

After implementation:
1. run relevant tests
2. inspect failures
3. verify requirement coverage
4. reconcile implementation with requirements

---

# Git

Prefer small, traceable commits.

When requirement IDs exist, include them in commit messages.

Example:

REQ-003: implement status endpoint

Before committing:
- review diff
- run relevant tests
- verify no secrets are included


# Claude Working Memory (Global Rules)

## Purpose
This file defines how Claude should behave across this codebase.
It evolves over time. If mistakes happen, update this file.

---

## Core Workflow

1. Understand → 2. Plan → 3. Execute → 4. Verify → 5. Iterate

Never skip steps.

---

## Planning Rules

- Always write a plan before coding
- Break problems into small steps
- If unclear → ask questions first
- Do not assume missing requirements

---

## Execution Rules

- Write clean, production-ready code
- Prefer TypeScript unless told otherwise
- Keep functions small and modular
- No unnecessary abstractions
- No placeholder logic

---

## Verification Rules

- After writing code:
  - Check correctness
  - Check edge cases
  - Check scalability
- If something might fail → call it out

---

## Debugging Rules

- Identify root cause (not symptoms)
- Explain why the issue happens
- Fix cleanly
- Suggest prevention

---

## Refactoring Rules

- Improve clarity first
- Reduce complexity
- Keep behavior unchanged
- Avoid overengineering

---

## Architecture Principles

- Separation of concerns
- Service-based structure
- Keep logic out of controllers
- Design for scale early

---

## Anti-Patterns (DO NOT DO)

- No guessing
- No rushing into code
- No large monolithic functions
- No vague explanations
- No fake “this should work”

---

## Communication Style

- Direct
- Precise
- No fluff
- No generic explanations

---

## Continuous Improvement Rule

If Claude:
- makes a mistake
- produces bad code
- misunderstands intent

→ Add a rule here to prevent it in future


## Multi-Agent Mode

For complex tasks:
- automatically use agent-team workflow
- do not require explicit command



---
name: team
description: Summon a persistent, per-project team of 10 expert subagents (strategist, architect, devil's advocate, first-principles thinker, security, QA, UX, code reviewer, team lead, plus a project-specific subject matter expert whose persona the user defines at init). Experts share project context via `.claude/team/` and consult each other via SendMessage. Invoke with `/team <subcommand>`. Subcommands in Phase 1 — `status`, `ask`, `kickoff`. Use when the user wants structured, multi-perspective help designing, building, reviewing, or brainstorming a project.
---

# /team — Expert Development Team

Persistent team of 10 specialists the user can summon on any project. Strategy-layer experts (product strategist, pragmatic architect, devil's advocate, first-principles thinker) help *decide*. Build-layer experts (security, QA, UX, code reviewer) help *execute*. A team lead routes and synthesizes. A **subject matter expert** — whose persona the user defines at init time, stored in `.claude/team/sme.md` — supplies domain ground-truth for whatever industry or field the project operates in.

## Subcommand routing

The user invokes this skill as `/team <subcommand> [args]`. Route by subcommand:

| Subcommand | Read and follow |
|---|---|
| `status` | `references/subcommands/status.md` |
| `ask` | `references/subcommands/ask.md` |
| `kickoff` | `references/subcommands/kickoff.md` |
| *anything else in Phase 1* | Reply: "Phase 1 supports `status`, `ask`, `kickoff`. Phase 2 will add `review`, `brainstorm`, `refresh`, `plan`, `dissolve`." |

If no subcommand is given, default to `status`.

## Bootstrap check (run on EVERY invocation, before any subcommand)

1. Read `references/bootstrap.md` and follow it. It resolves the project folder, creates `.claude/team/` if missing, and runs the initial audit (via `references/initial-audit.md`) if there is no `project-brief.md` yet.
2. Once bootstrap is done, build the standard context bundle per `references/context-injection.md` — this bundle is used by every subcommand when dispatching experts.
2a. Before executing the subcommand file, **restate the four resolved values internally** — `$PROJECT_ROOT`, `$PROJECT_SLUG`, `$TEAM_NAME`, `$TEAM_ROOM` — in a short internal note. These are referenced throughout the subcommand file and must stay stable.
3. Then execute the subcommand file above.

## Roster

The 9 experts and their system prompts are defined in `references/roster.md`. Always spawn experts by the names declared there.

## Charter

Every expert's system prompt includes the charter from `references/charter.md` verbatim. Do not paraphrase.

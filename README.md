# Azure Pre-Sales Command Center

Interactive Senior Manager-level Azure pre-sales learning and deal-simulation platform built around an end-to-end Contoso Global transformation pursuit.

## Build 1.20 production-hardening status

The platform has moved well beyond the original MVP. Current capabilities include:

- React + TypeScript + Vite application shell
- Responsive executive dashboard
- 14-stage end-to-end deal simulator
- Browser localStorage progress tracking
- Detailed learning modules and Learning OS
- Qualification War Room
- Discovery Simulator
- Customer Meeting Simulator
- Architecture Decision Lab
- Migration Factory Simulator
- Resource Loading Lab
- Deal Economics Lab
- Microsoft Co-Sell Lab
- SOW Risk Engine
- Pursuit Control Room
- Executive Deal Review
- Solution Defence Boardroom
- Capstone Pursuit
- Assessment Center
- Skills Radar
- Artifact Workbench and reusable deal artifacts
- Product Hub navigation
- GitHub Pages CI/CD deployment
- TypeScript validation in the deployment pipeline

### Remaining production-hardening work

- Pin dependency versions and introduce deterministic installs
- Complete accessibility review, including keyboard focus and reduced-motion behavior
- Improve page metadata and social-sharing metadata
- Run final responsive and cross-browser QA
- Reconcile build/version labels across the UI
- Validate all learning content, calculators, scoring logic, and downloadable artifacts

## Local setup

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run build
```

## GitHub Pages

The application is configured for the repository base path:

```text
/azure-presales-command-center/
```

A push to `main` triggers the GitHub Actions workflow. The pipeline installs dependencies, runs TypeScript validation, builds the Vite application, uploads `dist`, and deploys it to GitHub Pages.

## Product principle

This is not a collection of disconnected Azure lessons. The Contoso opportunity is the learning spine:

```text
QUALIFY → DISCOVER → ASSESS → SHAPE → ARCHITECT → ESTIMATE → CONSUMPTION
   → STAFF → COMMERCIALS → PROPOSE → DEFEND → NEGOTIATE → HANDOVER → DELIVERY
```

Every major capability should teach the learner to operate like a Senior Manager: connect customer outcomes to architecture, effort, Azure consumption, commercials, delivery feasibility, contractual exposure, Microsoft alignment, stakeholder decisions, and pursuit risk.

## Definition of done for Build 1.20

Build 1.20 is complete only when CI passes typecheck and production build, deployment succeeds, accessibility and responsive QA are completed, version labels are consistent, and the platform has no known release-blocking defects.

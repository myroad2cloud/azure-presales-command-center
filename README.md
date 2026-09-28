# Azure Pre-Sales Command Center

Interactive Senior Manager-level Azure pre-sales learning platform built around the Contoso Global transformation deal simulator.

## Current verified build status

- Platform foundation: complete
- React + TypeScript + Vite shell: complete
- GitHub Pages workflow: complete
- Responsive executive dashboard: complete
- 14-stage deal simulator model: complete
- Browser localStorage stage progress: complete
- Contoso case snapshot: initial version complete
- Daily mission: initial version complete
- Daily micro-challenge: initial version complete
- Detailed learning modules: pending
- Architecture Lab: pending
- Discovery Simulator: pending
- Estimation Lab: pending
- Resource Loading Lab: pending
- Consumption Lab: pending
- Commercial Lab: pending
- SOW Lab: pending
- Stakeholder Simulator: pending
- Solution Defence Simulator: pending
- Skills Radar: pending
- Resource library: pending
- Full QA: pending

## Local setup

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## GitHub Pages

The application is configured with Vite base path:

```text
/azure-presales-command-center/
```

The GitHub Actions workflow builds and deploys `dist` to GitHub Pages after a push to `main`.

If Pages has not been enabled yet, open repository Settings > Pages and ensure GitHub Actions is selected as the source.

## Product principle

The platform is not a collection of disconnected Azure lessons. The Contoso opportunity is the spine:

```text
QUALIFY → DISCOVER → ASSESS → SHAPE → ARCHITECT → ESTIMATE → CONSUMPTION
   → STAFF → COMMERCIALS → PROPOSE → DEFEND → NEGOTIATE → HANDOVER → DELIVERY
```

Each stage will progressively include learning, scenarios, practical artifacts, deal risks, Senior Manager actions, and solution-defence practice.

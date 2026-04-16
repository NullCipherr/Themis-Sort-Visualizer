# Contributing Guide

## Workflow

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes with focused commits.
4. Validate local build:

```bash
npm install
npm run build
```

5. Open a Pull Request with a clear description.

## Contribution Standards

- Keep architecture boundaries clear (`components`, `services`, `data`, `types`).
- Avoid mixing UI concerns with algorithm/data logic.
- Prefer readable names and small, cohesive functions.
- Update documentation when behavior changes.

## Pull Request Checklist

- [ ] Build succeeds locally.
- [ ] No unrelated file changes included.
- [ ] Documentation updated when relevant.
- [ ] Screenshots added for UI changes.

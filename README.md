# EMBS Book

Embedded Systems Design and Implementation (EMBS) Module at the University of York.

**Website**: [https://embs-book.github.io/](https://embs-book.github.io/)

## Development

This site is built with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

### Local preview

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000).

### Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on push to `main`.

## Contents

- **Getting Started** — Module overview and how to use this book
- **HW/SW Co-Design** — Introduction, design space exploration, partitioning and mapping
- **Interactive Tutorials**
  - [Kernighan-Lin Algorithm](https://embs-book.github.io/tutorials/kl-algorithm/)
  - [Diffusion Load Balancing](https://embs-book.github.io/tutorials/diffusion-algorithm/)
  - [PDA vs QPA](https://embs-book.github.io/tutorials/pda-qpa/)

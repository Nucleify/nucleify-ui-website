# Nucleify UI Website - categorized convenience targets (thin wrappers over pnpm)
#
#   make help          list everything
#   make setup         install dependencies
#   make dev           start Astro development server
#   make deploy        build and deploy to Cloudflare Workers

.DEFAULT_GOAL := help

PNPM := pnpm -s

.PHONY: help \
	setup install \
	dev build preview docs docs-build \
	deploy

# ── help ─────────────────────────────────────────────────────────────────────

help:
	@echo "Nucleify UI Website - make targets"
	@echo ""
	@echo "Setup"
	@echo "  make setup                 Install dependencies (pnpm install)"
	@echo "  make install               Same as make setup"
	@echo ""
	@echo "App"
	@echo "  make dev                   Start dev server (build:docs + astro dev)"
	@echo "  make build                 Build production bundle"
	@echo "  make preview               Preview production build locally"
	@echo "  make docs                  Watch and rebuild docs SPA"
	@echo "  make docs-build            Build docs SPA bundle"
	@echo ""
	@echo "Ops / Deploy"
	@echo "  make deploy                Production build + Wrangler deploy"

# ── setup ────────────────────────────────────────────────────────────────────

setup: install

install:
	pnpm install

# ── app ──────────────────────────────────────────────────────────────────────

dev:
	pnpm dev

build:
	pnpm build

preview:
	pnpm preview

docs:
	pnpm docs

docs-build:
	pnpm run build:docs

# ── ops ──────────────────────────────────────────────────────────────────────

deploy:
	pnpm deploy

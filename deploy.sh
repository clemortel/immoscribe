#!/usr/bin/env bash
set -euo pipefail

# Golden Boilerplate — Zero-prompt deploy via git push
# Vercel/Netlify auto-deploys on push to main.
# Usage: ./deploy.sh [remote-url]

REMOTE="${1:-origin}"

# Ensure git is initialized
if ! git rev-parse --is-inside-work-tree &>/dev/null; then
  git init && git add -A && git commit -m "Initial commit"
fi

# Set remote if a URL was provided
if [[ "$REMOTE" != "origin" ]]; then
  git remote remove origin 2>/dev/null || true
  git remote add origin "$REMOTE"
fi

# Build check before pushing
echo ":: Build check…"
npm ci --silent
npm run build --silent

# Push — Vercel deploys automatically
echo ":: Pushing to remote…"
git add -A
git diff --cached --quiet || git commit -m "Update site config"
git push -u origin main

echo ":: Done. Vercel will deploy automatically."

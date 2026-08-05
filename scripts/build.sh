#!/bin/bash
set -Eeuo pipefail

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"

cd "${COZE_WORKSPACE_PATH}"

echo "Installing dependencies..."
pnpm install --prefer-frozen-lockfile --prefer-offline --loglevel debug --reporter=append-only

echo "Building the Next.js project..."
pnpm next build

echo "Fixing static export file structure..."
bash "${COZE_WORKSPACE_PATH}/scripts/fix-export.sh"

# Copy .htaccess to out directory
if [ -f "${COZE_WORKSPACE_PATH}/public/.htaccess" ]; then
  cp "${COZE_WORKSPACE_PATH}/public/.htaccess" "${COZE_WORKSPACE_PATH}/out/.htaccess"
  echo "Copied .htaccess to out directory"
fi

echo "Bundling server with tsup..."
pnpm tsup src/server.ts --format cjs --platform node --target node20 --outDir dist --no-splitting --no-minify

echo "Build completed successfully!"

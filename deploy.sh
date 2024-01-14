pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "deploy"

git push -f https://github.com/aymfxhub/aymfx-ui.git master:gh-pages

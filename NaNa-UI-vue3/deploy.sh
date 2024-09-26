rm -rf dist &&
npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:ertigers/Website.git &&
git push -f -u origin main &&
cd -
echo https://ertigers.github.io/Website/nana-ui/index.html
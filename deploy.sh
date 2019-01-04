yarn build

sed -i.'' 's/\/static/static/g' build/asset-manifest.json

echo build/asset-manifest.json. > asset-manifest.json

mv build/ docs/


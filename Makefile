install: 
	npm ci

brain-games: 
	node bin/brain-games.js

init:
	npx eslint .

publish:
	npm publish --dry-run
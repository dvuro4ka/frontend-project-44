install: 
	npm ci

brain-games: 
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

init:
	npx eslint .

publish:
	npm publish --dry-run
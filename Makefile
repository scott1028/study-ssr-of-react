ssr:
	yarn build
	NODE_ENV=production node src/bootstrap.js

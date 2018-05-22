clean:
	rm -rf build

build:
	NODE_ENV=development yarn webpack --config config/webpack.config.dev.js
	NODE_ENV=development yarn webpack --config config/webpack.config.dev.server.js

dev: clean lift

lift: build
	node build/server/static/js/bundle.js

buildPrd:
	NODE_ENV=production yarn webpack --config config/webpack.config.prd.js
	NODE_ENV=production yarn webpack --config config/webpack.config.prd.server.js

liftPrd: buildPrd
	node build/server/static/js/main.js

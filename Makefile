build:
	yarn build

ssr: build
	NODE_ENV=production node src/bootstrap.js

clean:
	rm -rf build

buildSSR:
	NODE_ENV=production yarn webpack --config config/webpack.config.dev.server.js

buildFrontend:
	NODE_ENV=production yarn webpack --config config/webpack.config.prod.js

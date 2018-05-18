build:
	yarn build

ssr: build
	NODE_ENV=production node src/bootstrap.js

clean:
	rm -rf build

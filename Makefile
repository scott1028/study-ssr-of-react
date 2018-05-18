ssr: build
	yarn build
	NODE_ENV=production node src/bootstrap.js

clean:
	rm -rf build

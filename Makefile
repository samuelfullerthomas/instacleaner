#Comment for this Makefile
.PHONY: bootstrap start;

bootstrap:
	@npm i

start:
	@firebase data:get / > instagramDB.json -f nameOfFirebaseApp
	@node instacleaner.js

clean:
	@rm -rf ./instagramDB.json
	@rm -rf ./cleanDB.json

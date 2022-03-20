build: lint
	npm run build

lint:
	npm run lint

run:
	npm run run

clean:
	rm -rf output

re: build run
	true
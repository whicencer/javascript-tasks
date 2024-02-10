const COLOR_ERROR = '\x1b[31m';
const COLOR_INFO = '\x1b[90m';
const COLOR_NORM = '\x1b[32m';

const logger = (color) => (string) => {
	console.log(color + string);
};

logger.error = logger(COLOR_ERROR);
logger.success = logger(COLOR_NORM);
logger.info = logger(COLOR_INFO);

function test(func, cases) {
	let passed = 0;

	for ([arguments, expectedValue] of cases) {
		const msg = `Case ${func.name}(${JSON.stringify(arguments)}) --> `;

		expectedValue = JSON.stringify(expectedValue);
		const res = func(...arguments);
		const result = JSON.stringify(res);

		if (result === expectedValue) {
			passed++;
			logger.success(msg + `Completed: Expected ${expectedValue}, got ${result}`);
		} else {
			logger.error(msg + `Failed: Expected ${expectedValue}, but got ${result}`);
		}
	}

	logger.info(COLOR_INFO, `Passed: ${passed} of ${cases.length}`);
}

module.exports = { test };
const COLOR_ERROR = '\x1b[31m';
const COLOR_INFO = '\x1b[90m';
const COLOR_NORM = '\x1b[32m';
const COLOR_CYAN = '\x1b[36m';

const logger = (color) => (string) => {
	console.log(color + string);
};

logger.error = logger(COLOR_ERROR);
logger.success = logger(COLOR_NORM);
logger.info = logger(COLOR_INFO);

(() => {
	let passed = 0;
	let counter = 0;

	function test(description, expectTest) {
		const msg = COLOR_CYAN + `Running Test "${description}"...`;
	
		logger.info(msg);
		
		try {
			expectTest();
		} catch (error) {
			logger.error(`Test "${description}" failed \n`);
			throw new Error(error);
		}
	
		logger.info(`Passed: ${passed} of ${counter}`);
	};
	
	function expect(actual, expected) {
		actual = JSON.stringify(actual);
		expected = JSON.stringify(expected);

		if (actual === expected) {
			passed++;
			logger.success(`Completed: Expected ${expected}, got ${actual}\n`);
		} else {
			logger.error(`Failed: Expected ${expected}, but got ${actual}\n`);
		}

		counter++;
	}

	module.exports = { test, expect };
})();
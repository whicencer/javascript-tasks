function compare(firstDict, secondDict) {
	const a = Object.keys(firstDict);
	const b = Object.keys(secondDict);

	if (a.join('') !== b.join('')) return false;

	for (i of a) {
		if (firstDict[i] !== secondDict[i]) return false;
	}

	return true;
}
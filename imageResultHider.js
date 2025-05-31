javascript:(function() {
	/* Add your keywords and domain names here */
	const keywords = ["example", "test"];
	const figs = document.querySelectorAll('figure');
	var numHidden = 0;
	figs.forEach(figure => {
		const textContent = figure.textContent || figure.innerText;
		if (keywords.some(keyword => textContent.includes(keyword))) {
			figure.style.display = 'none';
			numHidden++;
		}
	});
	alert("Hid " + numHidden + " results!");
})();
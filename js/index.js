if (window.innerWidth >= 801) {
	const emblaNode = document.querySelector(".embla");
	const options = { loop: true };

	const embla = EmblaCarousel(emblaNode, options);

	const nextButton = document.querySelector("#next");
	const prevButton = document.querySelector("#prev");

	/**
	 * Names of people and the position in accordance to the slider
	 */

	const autoplayer = autoplay(embla, 4000);

	nextButton.addEventListener("click", (e) => {
		autoplayer.stop();
		embla.scrollNext();
	});

	prevButton.addEventListener("click", () => {
		autoplayer.stop();
		embla.scrollPrev();
	});

	const people = [
		{
			name: "Stewart Dekunle",
			position: "Industry Leading Sales Manager",
		},
		{
			name: "Stewart Dorrey",
			position: "Industry Leading Program Manager",
		},
		{
			name: "Sandra Dekunle",
			position: "Industry Leading Representative Sales Manager",
		},
	];

	embla.on("select", (e) => {
		console.log(embla.slidesInView());
		const slideInView = embla.slidesInView();
		/**
		 * slide in view return an array of the current index in view => [0]
		 */
		document.querySelector(
			"#__slide > div.flex > div:nth-child(1) > p.text-white.__text.text-lg.font-semibold"
		).textContent = people[slideInView[0]].name;
		document.querySelector(
			"#__slide > div.flex > div:nth-child(1) > p.text-white.text-base.__text.font-semibold.mt-1"
		).textContent = people[slideInView[0]].position;
	});

	embla.on("pointerDown", autoplayer.stop);
	embla.on("init", autoplayer.play);
}

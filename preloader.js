let overlayElement = document.querySelector('.overlay');
let counterElement = document.querySelector('.counter');
function startLoader() {
	let currentValue = 0;

	function updateCounter() {
		if (currentValue === 100) {
			return;
		}

		currentValue += Math.floor(Math.random() * 10) + 1;

		if (currentValue > 100) {
			currentValue = 100;
		}

		counterElement.textContent = currentValue;

		let delay = Math.floor(Math.random() * 200) + 50;
		setTimeout(updateCounter, delay);
	}
	updateCounter();
}

startLoader();

gsap.to('.counter', 0.25, {
	delay: 3.5,
	opacity: 0
});

gsap.to('.bar', 1.5, {
	delay: 3.5,
	height: 0,
	stagger: {
		amount: 0.5
	},
	ease: 'power4.inOut',
	onComplete: function() {
		overlayElement.style.display = 'none';
		counterElement.style.display = 'none';
	}
});

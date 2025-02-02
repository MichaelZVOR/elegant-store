function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#mobile-nav-btn');
	const navBtnClose = document.querySelector('#close-mobile-nav');
	const mobileNavFade = document.querySelector('mobile-nav-fede');
	const nav = document.querySelector('.mobile-nav');

	navBtnOpen.onclick = function () {
		nav.classList.add('mobile-nav--open');
		mobileNavFade.classList.add('mobile-nav-fede--open');
		document.body.classList.toggle('no-scroll');
	};

	navBtnClose.onclick = closeMobileNav;
	mobileNavFade.onclick = closeMobileNav;

	function closeMobileNav () {
		nav.classList.remove('mobile-nav--open');
		mobileNavFade.classList.remove('mobile-nav-fede--open');
		document.body.classList.toggle('no-scroll');
	}
}

export default mobileNav;
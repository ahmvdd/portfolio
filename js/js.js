$(function () {

	'use strict';


	//Lenis Smooth scroll
	const lenis = new Lenis({
		duration: 1.5,
		infinite: false
	});
	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)

	//Integration Lenis on GSAP ScrollTrigger
	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000)
	})

	//Create animation
	function scrollTrig() {

		gsap.registerPlugin(ScrollTrigger);

		let gsapAnim = gsap.utils.toArray('.gsap__anim');
		gsapAnim.forEach(section => {
			gsap.to(section, {
				scrollTrigger: {
					trigger: section,
					start: 'bottom bottom',
					end: 'bottom top',
					scrub: true,
					snap: true
				},
				yPercent: 100,
				ease: 'none'
			});
		});

		let parallaxWrapp = gsap.utils.toArray('.parallax__wrapp');
		parallaxWrapp.forEach(parallax => {
			gsap.to(parallax, {
				scrollTrigger: {
					trigger: parallax,
					start: 'top top',
					end: 'bottom top',
					scrub: true
				},
				yPercent: -20,
				ease: 'none'
			});
		});

		gsap.to('.title-p', {
			scrollTrigger: {
				trigger: 'header.header',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			yPercent: 100
		});

		gsap.to('.title__img img', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			},
			rotate: 360,
			ease: 'none'
		});

		gsap.to('.title__t', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			xPercent: -10,
			ease: 'none'
		});

		gsap.to('.serv .stroke', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			xPercent: 10,
			ease: 'none'
		});

		gsap.to('.serv__item:nth-child(1)', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			xPercent: -10,
			ease: 'none'
		});

		gsap.to('.serv__item:nth-child(3)', {
			scrollTrigger: {
				trigger: '.serv',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			xPercent: 10,
			ease: 'none'
		});

		gsap.to('.portfolio__item-img img', {
			scrollTrigger: {
				trigger: '.portfolio',
				start: 'top top',
				end: 'bottom top',
				scrub: true
			},
			scale: 1.3,
			ease: 'none'
		});

		gsap.to('.approve__star', {
			scrollTrigger: {
				trigger: '.approve',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			},
			rotate: 360,
			ease: 'none'
		});
		gsap.to('.approve__star', {
			scrollTrigger: {
				trigger: '.approve',  // Déclenche l'animation lorsque la section .approve entre dans la vue
				start: 'top bottom',  // L'animation commence lorsque le haut de la section touche le bas de la fenêtre
				end: 'bottom top',    // L'animation se termine lorsque le bas de la section touche le haut de la fenêtre
				scrub: true,          // Synchronisation avec le défilement
			},
			opacity: 1,             // L'élément devient visible
			rotation: 360,          // Rotation de 360° pour l'élément
			scale: 1.2,             // Vous pouvez ajuster la taille de l'élément pour un effet de zoom
			ease: 'power1.inOut',   // Une transition fluide
			duration: 1             // La durée de l'animation
		});
		
	}
	scrollTrig();

	//resize window
	const debouncedResize = _.debounce(onWindowResize, 500);
	function onWindowResize() {
		console.log('Window resized!');
		// location.reload();
	}
	$(window).on('resize', debouncedResize);
});
document.addEventListener("DOMContentLoaded", () => {
    const triggerElement = document.querySelector(".text-center"); // Élément déclencheur
    const animatedElement = document.querySelector(".approve__ix"); // Élément animé

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Lorsque le texte du deuxième bloc est visible, cache l'élément
                    animatedElement.classList.add("hidden"); // Cache l'élément
                    animatedElement.classList.add("position-absolute"); // Ajoute la classe pour le positionner
                } else {
                    // Lorsque l'élément n'est plus visible, le réaffiche
                    animatedElement.classList.remove("hidden");
                    animatedElement.classList.remove("position-absolute"); // Retire la position absolue
                }
            });
        },
        { threshold: 0.1 } // Se déclenche lorsque 10% de l'élément est visible
    );

    observer.observe(triggerElement); // Observer l'élément déclencheur
});






// document.addEventListener("DOMContentLoaded", () => {
// 	// Timeline Animation avec GSAP
// 	gsap.registerPlugin(ScrollTrigger);
  
// 	// Animation pour chaque item de la timeline
// 	const timelineItems = document.querySelectorAll(".timeline-item");
  
// 	timelineItems.forEach((item, index) => {
// 	  const dot = item.querySelector(".timeline-dot");
// 	  const content = item.querySelector(".timeline-content");
  
// 	  // Animation individuelle pour chaque élément
// 	  gsap.from(dot, {
// 		scrollTrigger: {
// 		  trigger: item,
// 		  start: "top 20%", // L'animation commence quand l'élément entre dans 80% de la fenêtre
// 		  end: "top 50%", // L'animation termine à 50% de la fenêtre
// 		  scrub: true, // Synchronisation avec le défilement
// 		},
// 		scale: 11, // Effet de zoom sur le point
// 		opacity: 0, // Apparition progressive
// 		duration: 1,
// 	  });
  
// 	  gsap.from(content, {
// 		scrollTrigger: {
// 		  trigger: item,
// 		  start: "top 98%", // Déclenchement un peu après le dot
// 		  end: "top 45%",
// 		  scrub: true,
// 		},
// 		x: index % 2 === 0 ? -100 : 100, // Alterne le côté de l'apparition
// 		opacity: 0, // Apparition progressive
// 		duration: 1,
// 	  });
// 	});
  
// 	// Animation pour le titre
// 	gsap.from(".parcours-timeline h2", {
// 	  scrollTrigger: {
// 		trigger: ".parcours-timeline",
// 		start: "top 50%", // Commence quand la section entre dans la vue
// 		end: "top 40%",
// 		scrub: true,
// 	  },
// 	  y: -50, // Décalage vers le haut
// 	  opacity: 0, // Apparition progressive
// 	  duration: 1.5,
// 	});
//   });
  






















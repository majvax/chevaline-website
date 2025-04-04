global_loop_opts = {
    loop: true,
}

global_opts = {
    typeSpeed: 50,
    backSpeed: 50,
}


last_writter = [];


Reveal.initialize({
    hash: true,
    transition: 'concave',
    transitionSpeed: 'slow',
    plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealZoom ]
});


Reveal.on('fragmentshown', (event) => {

    if (event.fragment.id === 'typewriter-introduction') {
        last_writter.push(new Typed("#typewriter-introduction", {
            strings: [
                "September 5, 2012",
            ],
            typeSpeed: 50,
        }));
    }

    if (event.fragment.id === 'typewriter') {
        last_writter.push(new Typed("#typewriter", {
            stringsElement: '#typed-strings',
            typeSpeed: 50,
        }));
    }
});


Reveal.on('slidechanged', (event) => {
    if (event.currentSlide.id === 'introduction') {
        last_writter.push(new Typed("#introduction-typed", {
            strings: [
                "La <strong><u>tuerie</u></strong> de <mark>Chevaline</mark>."            
            ],
            ...global_loop_opts,
            ...global_opts,
        }));
        new Audio("song.mp3").play();
    } else if (event.currentSlide.id === 'last-slide') {
        kill_writter();
        last_writter.push(new Typed("#last-slide-typed", {
            strings: [
                "Thank you for taking the time to view this presentation."            
            ],
            ...global_loop_opts,
            ...global_opts,
        }));
    } else if (event.currentSlide.id === 'sources') {
        kill_writter();
        last_writter.push(new Typed("#last-slide-typed", {
            strings: [
                "Sources."            
            ],
            ...global_loop_opts,
            ...global_opts,
        }));
    }
});


function kill_writter() {
    last_writter.forEach(element => {
        element.destroy();
    });
    last_writter = [];
}


Reveal.on('slidetransitionend', (event) => {
    if (event.currentSlide.id === 'first-slide') {
        kill_writter();
        last_type_slide = new Typed("#first-slide-writter-0", {
            strings: [
                "Chevaline, September 5, 2012."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'second-slide') {
        kill_writter();
        last_type_slide = new Typed("#second-slide-writter-0", {
            strings: [
                "September 5, 2012, ~ 3h45 PM."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'third-slide') {
        kill_writter();
        last_type_slide = new Typed("#third-slide-writter-0", {
            strings: [
                "September 5, 2012, ~ 4h00 PM."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'fourth-slide') {
        kill_writter();
        last_type_slide = new Typed("#fourth-slide-writter-0", {
            strings: [
                "September 6, 2012."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'fifth-slide') {
        kill_writter();
        last_type_slide = new Typed("#fifth-slide-writter-0", {
            strings: [
                "September 8, 2012."
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'sixth-slide') {
        kill_writter();
        last_type_slide = new Typed("#sixth-slide-writter-0", {
            strings: [
                "September 10, 2012."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'seventh-slide') {
        kill_writter();
        last_type_slide = new Typed("#seventh-slide-writter-0", {
            strings: [
                "September 12, 2012."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'eighth-slide') {
        kill_writter();
        last_type_slide = new Typed("#eighth-slide-writter-0", {
            strings: [
                "September 15, 2012."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'ninth-slide') {
        kill_writter();
        last_type_slide = new Typed("#ninth-slide-writter-0", {
            strings: [
                "September 27, 2012."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'tenth-slide') {
        kill_writter();
        last_type_slide = new Typed("#tenth-slide-writter-0", {
            strings: [
                "October, 2012."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'eleventh-slide') {
        kill_writter();
        last_type_slide = new Typed("#eleventh-slide-writter-0", {
            strings: [
                "From 2013 to 2019."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'twelfth-slide') {
        kill_writter();
        last_type_slide = new Typed("#twelfth-slide-writter-0", {
            strings: [
                "2020."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'thirteenth-slide') {
        kill_writter();
        last_type_slide = new Typed("#thirteenth-slide-writter-0", {
            strings: [
                "2022-2023."           
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'fourteenth-slide') {
        kill_writter();
        last_type_slide = new Typed("#fourteenth-slide-writter-0", {
            strings: [
                "2022-2023."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'fifteenth-slide') {
        kill_writter();
        last_type_slide = new Typed("#fifteenth-slide-writter-0", {
            strings: [
                "2024-2025."            
            ],
            ...global_opts,
        })
    } else if (event.currentSlide.id === 'conclusion-slide') {
        kill_writter();
        last_type_slide = new Typed("#sixteenth-slide-writter-0", {
            strings: [
                "2023."            
            ],
            ...global_opts,
        })
    }
});

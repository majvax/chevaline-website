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
                "la <strong><u>tuerie</u></strong> de <mark>chevaline</mark>."            
            ],
            ...global_loop_opts,
            ...global_opts,
        }));
        new Audio("song.mp3").play();
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
                "Chevaline, September 5, 2012, ~ 4h00 PM."            
            ],
            ...global_opts,
        })
    }
});

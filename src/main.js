let audio;

document.addEventListener("keydown", function(e) {
    if (e.code === 'KeyA') {
        audio = new Audio("A.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyS') {
        audio = new Audio("S.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyD') {
        audio = new Audio("D.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyF') {
        audio = new Audio("F.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyG') {
        audio = new Audio("G.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyH') {
        audio = new Audio("H.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyJ') {
        audio = new Audio("J.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyW') {
        audio = new Audio("W.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyE') {
        audio = new Audio("E.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyT') {
        audio = new Audio("T.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyY') {
        audio = new Audio("Y.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else if (e.code === 'KeyU') {
        audio = new Audio("U.mp3");
        audio.addEventListener("canplaythrough", ev => {
            audio.play();
        });
    } else {
        console.log("not a piano key" + e);
    }
});


function isInViewport(id) {
    let el = document.getElementById(id);
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (Window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (Window.innerwidth || document.documentElement.clientWidth) 
    );
}


function animate(id) {
    let body = document.getElementsByClassName(id)[0];
    let img = document.getElementById(id);
    img.style.marginLeft = '10px';
    body.style.right = '50px';
}

function display_profile() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = "block";
}

function hide_profile() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'none';
}

function show_bar() {
    let bar = document.getElementById("bar");
    bar.style.display = "block";
}
function hide_bar() {
    let bar = document.getElementById("bar");
    bar.style.display = "none";
}

document.addEventListener(
    'scroll', 
    function() {
        if (window.scrollY == 0) {
            document.getElementsByClassName("top-bar")[0].style.display = "none";
            return ;
        }
        document.getElementsByClassName("top-bar")[0].style.display = "block";
        
    }
)
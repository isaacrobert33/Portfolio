
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


// document.getElementById("webdev-main").addEventListener('wheel', function () {
//     animate("webdev");
// })
// document.addEventListener('scroll', function () {
//     let skills = ["webdev", "mobdev"];
//     let el = document.getElementById(skills[0]+"-main");
//     let vp = isInViewport(el);
//     console.log(vp);
//     if (vp==true) {
//         // alert("animating...");
//         animate(skills[0]);
//     };
//     // TCuyxuEoJzTsmojHP3dYw62fB3e6MrN55x
// } )
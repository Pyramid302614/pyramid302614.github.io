async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve,ms));
}

window.addEventListener("DOMContentLoaded",async () => {

    await sleep(1000);

    document.getElementById("opening_title_header").style.filter = "blur(0px)";
    document.getElementById("opening_title_header").style.opacity = "1";

    await sleep(2000);

    document.getElementById("opening_title_body").style.opacity = "1";
    document.getElementById("opening_title_body").style.bottom = "0px";
    document.getElementById("opening_title_body").style.filter = "blur(0px)";
    document.getElementById("opening_title_header").style.top = "0px";

    await sleep(3000);

    document.getElementById("opening_title_body").style.bottom = "60px";
    document.getElementById("opening_title_header").style.opacity = "0";
    document.getElementById("opening_title_header").style.filter = "blur(10px)";
    document.getElementById("opening_title_header").style.top = "-60px";
    
    await sleep(20);

    document.getElementById("opening_title_seperator").style.width = "90%";

    await sleep(200);

    window.addEventListener("scroll",() => {
        document.getElementById("opening_title_body").style.top = "calc(50% + " + (-60 - window.scrollY) + "px)";
        document.getElementById("opening_title_seperator").style.top = "calc(50% + " + (50 - window.scrollY) + "px)";
    });

    // document.getElementById("opening_title_body").innerHTML = "Pyramid30";
    

});
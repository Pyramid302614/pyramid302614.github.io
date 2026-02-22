async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve,ms));
}

window.addEventListener("DOMContentLoaded",async () => {

    await sleep(2000);

    document.getElementById("opening_title_body").style.opacity = "1";
    document.getElementById("opening_title_body").style.bottom = "0px";
    document.getElementById("opening_title_header").style.top = "0px";

    await sleep(3000);

    document.getElementById("opening_title_seperator").style.width = "90%";
    

});
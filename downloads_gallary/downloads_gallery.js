
//comparison for newest first mode
function comparatornewfirst(a, b) {
    if (a.dataset.date > b.dataset.date)
        return -1;
    if (a.dataset.date < b.dataset.date)
        return 1;
    return 0;
}

//comparison for olest first mode
function comparatoroldfirst(a, b) {
    if (a.dataset.date < b.dataset.date)
        return -1;
    if (a.dataset.date > b.dataset.date)
        return 1;
    return 0;
}

//setting the default sortmode on pageload to be pageload so that when it runs "sortdata()"
//function it will switch to newest first without hiccups.
var sortmode = "pageload";

// Function to sort Data
function SortData() {

    //tests
    console.log("-----function beginning-----")
    console.log(sortmode)


    if (sortmode == "pageload" || sortmode == "oldest") {
        //code to change sortmode to newest


        document.getElementById("sortbutton").innerHTML = "Sort: Newest";

        //setting a variable that contains all of the image elements
        var indexes = document.querySelectorAll("[data-date]");
        //setting the prior variable to be an array
        var indexesArray = Array.from(indexes);
        //sorting array based on newest first
        let sorted = indexesArray.sort(comparatornewfirst);
        //appending sorted list back into original elements
        sorted.forEach(e =>
            document.querySelector(".imagecontainer").appendChild(e));
        
        //tests
        console.log("test")
        //setting sortmode to newest so that if you click the button again it will go to oldest first
        sortmode = "newest";
    } else if (sortmode == "newest") {
        //code to change sortmode to oldest first
        //basically all the same code as above but sorts oldest first (there is probably a much more
        //efficiant way of doing this).

        document.getElementById("sortbutton").innerHTML = "Sort: Oldest";
        
        var indexes = document.querySelectorAll("[data-date]");
        var indexesArray = Array.from(indexes);
        let sorted = indexesArray.sort(comparatoroldfirst);
        sorted.forEach(e =>
            document.querySelector(".imagecontainer").appendChild(e));
        sortmode = "oldest";
        console.log("test2")
    }

    //other tests
    console.log(sortmode)
    console.log("function end")


}

//setting all high res renders from css 0% to js "0%", doing this because later function checks if images are
// equal to "0%", but because they are not technecally equal to "0%" it needs user to click twice the first time
rendershighres = document.getElementsByClassName("render_highres")
for (var i = 0; i < rendershighres.length; i++) {
    rendershighres[i].style.height = "0%";
}

var iscurrentimgopen = false
var lastonimg = "none"
var lastoninfo = "none"


function ShowHighRes(highresid,infoid) {
    var highresimg = document.getElementById(highresid);
    var infoelemenet = document.getElementById(infoid);

    if (iscurrentimgopen == false) {
        iscurrentimgopen = true
        if (highresimg.naturalWidth <= highresimg.naturalHeight) {
            openimgtall(highresimg,infoelemenet,lastoninfo,lastonimg)
        } else {
            openimglong(highresimg,infoelemenet,lastoninfo,lastonimg)
        }

        lastonimg = highresimg
        lastoninfo = infoelemenet

    } else {
        lastonimg = "none"
        infoelemenet.style.width = "0%";
        infoelemenet.style.border = "solid 0px";
        infoelemenet.style.paddingRight = "0px";
        infoelemenet.style.borderColor =  "#2b2b2b";
        setTimeout(() => { 
            highresimg.style.height = "0%";
            highresimg.style.border = "solid 0px";
            highresimg.style.borderColor =  "#2b2b2b";
        }, 500);
        iscurrentimgopen = false

    }
}
function openimgtall(highresimg,infoelemenet,lastoninfo,lastonimg) {
    //opening highresimg
    highresimg.style = `
        height: 250%;
        border: solid 5px;
        border-color: #2b2b2b;
        display: inline;
    `
    //getting % of parent that highresimg width takes up
    var imgratio = highresimg.naturalWidth/highresimg.naturalHeight
    var infowidth = imgratio*400
    var infowidthstring = infowidth.toString().concat("%")
    //opening info element
    setTimeout(() => {
        infoelemenet.style = `
            border: solid 5px;
            border-color: #2b2b2b;
            padding-right: 5px;
        `
        infoelemenet.style.width = infowidthstring
    }, 500);
    
    //getting rid of last img and info element
    lastoninfo.style = `
        width: 0%
        border: solid 0px;
        padding-right: 0px;
        border-color: #2b2b2b;
    `
    setTimeout(() => { 
        lastonimg.style = `
            height: 0%;
            border: solid 0px;
            border-color: #2b2b2b;
        `
        lastonimg = "none"
    }, 500);
    lastoninfo = "none"
}

function openimglong(highresimg,infoelemenet,lastoninfo,lastonimg) {
    //opening highresimg
    var imgratio = highresimg.naturalHeight/highresimg.naturalWidth
    var imgratiostring = imgratio * 250
    var imgheightstring = imgratiostring.toString().concat("%")
    highresimg.style = `
        border: solid 5px;
        border-color: #2b2b2b;
        display: inline;
        height: ${imgheightstring}
    `
    setTimeout(() => {
        infoelemenet.style.width = "300%";
        infoelemenet.style.height = imgheightstring;
        infoelemenet.style.border = "solid 5px";
        infoelemenet.style.paddingRight = "5px";
        infoelemenet.style.borderColor =  "#2b2b2b";
    }, 500);
    
    //getting rid of last img and info element
    lastoninfo.style = `
        width: 0%;
        border: solid 0px;
        padding-right: 0px;
        border-color: #2b2b2b;
    `
    setTimeout(() => { 
        lastonimg.style = `
            height: 0%;
            border: solid 0px;
            border-color: #2b2b2b;
        `
        lastonimg = "none"
    }, 500);
    lastoninfo = "none"

}

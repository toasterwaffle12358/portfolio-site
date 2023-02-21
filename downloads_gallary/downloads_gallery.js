
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

function ShowHighRes(highresid) {
    var highresimg = document.getElementById(highresid);

    if (highresimg.style.display == "none") {
        highresimg.style.display = "inline";
        highresimg.style.height = "200%";
        highresimg.style.transition = "height 1s";

    } else {
        highresimg.style.display = "none";
        highresimg.style.height = "0%";
    }

    console.log(highresid);
}


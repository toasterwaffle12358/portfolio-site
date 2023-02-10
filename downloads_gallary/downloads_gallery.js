
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

var sortmode = "pageload";

// Function to sort Data
function SortData() {
    console.log("-----function beginning-----")
    console.log(sortmode)
    if (sortmode == "pageload" || "oldest") {
        //code to change sortmode to newest

        var indexes = document.querySelectorAll("[data-date]");
        var indexesArray = Array.from(indexes);
        let sorted = indexesArray.sort(comparatornewfirst);
        sorted.forEach(e =>
            document.querySelector(".imagecontainer").appendChild(e));
        console.log("test")
        sortmode = "newest";
    } else if (sortmode == "newest") {
        //code to change sortmode to oldest first

        var indexes = document.querySelectorAll("[data-date]");
        var indexesArray = Array.from(indexes);
        let sorted = indexesArray.sort(comparatoroldfirst);
        sorted.forEach(e =>
            document.querySelector(".imagecontainer").appendChild(e));
        sortmode = "oldest";
        console.log("test2")
    }
    console.log(sortmode)
    console.log("function end")


}


$(".renderlink").sort(sort_li) // sort elements
                  .appendTo('.renderlink'); // append again to the list
// sort function callback
function sort_li(a, b){
    return ($(b).data('date')) < ($(a).data('date')) ? 1 : -1;    
}
var search = document.getElementById('axtaris');
var x = document.getElementById('xmark');
var lng = document.getElementById('lng');

search.addEventListener('click',function(e){

    e.preventDefault();
    var searchbox = document.getElementById('searchbox');
    searchbox.classList.toggle("active");
})
x.addEventListener('click',function(){

    // e.preventDefault();
    var searchbox = document.getElementById('searchbox');
    searchbox.classList.remove("active");
})

lng.addEventListener('click',function(e){
    var langbox = document.getElementById('langbox');
    e.preventDefault();
    langbox.classList.toggle("active2")
    lng.classList.toggle("active3")
})




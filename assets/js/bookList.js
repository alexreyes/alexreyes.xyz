
$(document).ready(function () {
    // Replace ./data.json with your JSON feed
    fetch('https://cors-anywhere.herokuapp.com/https://reyes-personal-website-api.herokuapp.com/book2019')
    .then(response => {
    return response.json()
    })
    .then(data => {
        var data = data[0]
        var total = data.length;
        $('.2019').hide().append('<h2 class="year"> 2019 (' + total + ' total)</h2>').fadeIn(0);
        
        data.forEach(book => {
            if (book) {
                var link = book.link

                var bookTitle = book.title

                if (book != ""){ 
                
                    $('.displayList').hide().append('<p class = "indent"><a href = ' + link + 'class = "no-underline">' + bookTitle + '</a></p>').fadeIn(0);
                }
            }
        });
    })
    .catch(err => {
        // Do something for an error here
        console.log("error reading JSON")
    })
});
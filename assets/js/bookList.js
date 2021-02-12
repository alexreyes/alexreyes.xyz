
$(document).ready(function () {

    // 2021: 
    fetch('https://book-list-api-v2.alex243.repl.co/?year=2021')
    .then(response => {
    return response.json()
    })
    .then(data => {
        var total = data.length;
        $('.2021').hide().append('<h2 class="year"> 2021 (' + total + ' total)</h2>').fadeIn(0);
        
        data.forEach(book => {
            if (book) {
                var link = book[1]

                var bookTitle = book[0]

                if (book != ""){ 
                
                    $('.displayList2021').hide().append('<p class = "indent"><a href = ' + link + ' target="_blank" class="no-underline">' + bookTitle + '</a></p>').fadeIn(0);
                }
            }
        });
    })
    .catch(err => {
        // Do something for an error here
        console.log("error reading JSON")
    })

    // 2020: 
    fetch('https://book-list-api-v2.alex243.repl.co/?year=2020')
    .then(response => {
    return response.json()
    })
    .then(data => {
        var total = data.length;
        $('.2020').hide().append('<h2 class="year"> 2020 (' + total + ' total)</h2>').fadeIn(0);
        
        data.forEach(book => {
            if (book) {
                var link = book[1]

                var bookTitle = book[0]

                if (book != ""){ 
                
                    $('.displayList2020').hide().append('<p class = "indent"><a href = ' + link + ' target="_blank" class="no-underline">' + bookTitle + '</a></p>').fadeIn(0);
                }
            }
        });
    })
    .catch(err => {
        // Do something for an error here
        console.log("error reading JSON")
    })

    // 2019:     
    fetch('https://book-list-api-v2.alex243.repl.co/?year=2019')
    .then(response => {
    return response.json()
    })
    .then(data => {
        var total = data.length;
        $('.2019').hide().append('<h2 class="year"> 2019 (' + total + ' total)</h2>').fadeIn(0);
        
        data.forEach(book => {
            if (book) {
                var link = book[1]

                var bookTitle = book[0]

                if (book != ""){ 
                
                    $('.displayList2019').hide().append('<p class = "indent"><a href = ' + link + ' target="_blank" class="no-underline">' + bookTitle + '</a></p>').fadeIn(0);
                }
            }
        });
    })
    .catch(err => {
        // Do something for an error here
        console.log("error reading JSON")
    })
});
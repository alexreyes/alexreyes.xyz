
$(document).ready(function () {
    var request = new XMLHttpRequest();
    const app = document.getElementById("root");

    request.open('GET', 'https://reyes-personal-website-api.herokuapp.com/bookList', true);

    request.onload = function () {
        var data = JSON.parse(this.response);

        var total = data.length - 1;
        $('.2019').append('<h2 class="year"> 2019 (' + total + ' total)</h2>')
    
        data.forEach(book => {
            var link = book.match('\,link:(.*)')[1]

            var bookTitle = book.match('^(.*?)\,link')[1]

            if (book != ""){ 
                // $('.displayList').append('<a href =' + link + '>' + bookTitle + '</a>')
                $('.displayList').append('<p class = "indent"><a href = ' + link + 'class = "no-underline">' + bookTitle + '</a></p>')
            }
        });
    }
    request.send();
});


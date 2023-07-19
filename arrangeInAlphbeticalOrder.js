function logTitlesInAlphaveticalOrder(titles){
    titles.sort();  
    for(let i = 0; i < titles.length; i++){
        console.log(titles[i])
    }
}

function getBookTitles(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles)

}


// Example Usage

const books = [
    {title: 'Book C', author: 'author C' , year: 2005},
    {title: 'Book B', author: 'author B' , year: 2015},
    {title: 'Book A', author: 'author A' , year: 2008},
];

getBookTitles(books, logTitlesInAlphaveticalOrder );
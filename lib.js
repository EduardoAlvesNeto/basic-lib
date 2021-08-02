/* "Dados da lib" */
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficaze s",
                author: "Stephen R. Covey"
            }
        ]
    }
]
/*************************/
const totalCategories = booksByCategory.length;

console.log(`Total de categorias: ${totalCategories}`);

for(let category of booksByCategory) {
    console.log(`A categoria ${category.category} tem: ${category.books.length}`)
}

function booksAuthors(author) {
    let books = []
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Os livros do autor ${author} são: ${books.join(', ')}`)
}

booksAuthors('Augusto Cury')
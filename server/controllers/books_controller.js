var books = []

var id = 0

module.exports = {
    read: function(req, res){
        res.status('200').send(books)
    },

    create: function(req, res) {

        let { title, author } = req.body

        let newBook = {
            bookId: id,
            title,
            author,
        }

        books.push(newBook)

        id++

        res.status('200').send(books)
    },



}
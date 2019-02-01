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

    update: function(req, res) {

        let index = null;
        books.forEach((book, i) => {
          if(book.id === Number(req.params.id)) index = i;
        })
        books[ index ] = {
          id: books[ index ].id,
          title: req.body.title || books[ index ].title,
          author: req.body.author || books[ index ].author
        }
        // I need practice with js but really understanding what is being done above and stuff

        res.status('200').send(books)
    },

    delete: function() {

        var index = null
        books.forEach((book, i) => {
            if(book.id === Number(req.params.id)) index = i
        })
        books.splice(index, 1)

        res.status(200).send( books );
    }

}
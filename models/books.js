const ORM = require("../config/orm");

class Books {
    selectAll(){
        return ORM.innerJoin(['firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id', 'authorId')
    }

    getOneBook(bookTitle){
        return ORM.innerJoinWhere(['books.id', 'firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id','authorID', 'title', bookTitle)
    }

    addBook(title, coverPhoto, authorId){
        return ORM.create('books', ['title', 'coverPhoto', 'authorId'] ,[title, coverPhoto, authorId])
    }

}

module.exports = new Books();
const ORM = require("../config/orm");

class Books {
    selectAll(){
        return ORM.innerJoin(['firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id', 'authorId')
    }


}

module.exports = new Books();
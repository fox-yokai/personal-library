const ORM = require("../config/orm");

class Notes {

    getBookNotes(bookTitle){
        return ORM.innerJoinWhere(['notes.id', 'note'], 'notes', 'books', 'id','bookID', 'title', bookTitle)
       }

    addBookNote(note, bookId){
        return ORM.create('notes',['note', 'bookId'], [note, bookId])
            
      }
    
    deleteNote(id){
        return ORM.delete('notes', 'id', id)
       }


}

module.exports = new Notes();
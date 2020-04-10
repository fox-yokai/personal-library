var connection = require("./connection.js");

class ORM  {
  constructor(connection){
    this.connection = connection
  }
  printQuestionMarks(numberOfValues){
    const questionMarks = [];
    for (var i = 0; i < numberOfValues; i++) {
      questionMarks.push("?");
    }
    return questionMarks.join(', ');
  }
  innerJoin(colsToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol) {
    // 'SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorsId'
    const queryString = `SELECT ${this.printQuestionMarks(colsToSelect.length)} FROM ?? INNER JOIN ?? ON ??.?? = ??.??`;
    return this.connection.query(queryString, [...colsToSelect, tableOne, tableTwo, tableOne, tableOneCol, tableTwo, tableTwoCol])
  }


  innerJoinWhere(colsToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol, tableTwoColTwo, bookTitle){
     // 'SELECT books.id, firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId WHERE books.title=?', [bookTitle] 
     
     const queryString = `SELECT ${this.printQuestionMarks(colsToSelect.length)} FROM ?? INNER JOIN ?? ON ??.?? = ??.?? WHERE ??.??=?`;
     return this.connection.query(queryString, [...colsToSelect, tableOne, tableTwo, tableOne, tableOneCol, tableTwo, tableTwoCol, tableTwo, tableTwoColTwo, bookTitle])

  }

  create(table, columns, values) {
    
    const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`;

    console.log(queryString);
    return this.connection.query(queryString, [table, ...values]) 
  }

  delete(table, columns, value) {
    const queryString = 'DELETE FROM ?? WHERE ??=?';

    return this.connection.query(queryString, [table, columns, value])

  }

};



module.exports = new ORM(connection);
// const test = new ORM(connection);
// test.innerJoin(['firstName', 'lastName', 'title', 'coverPhoto'], 'authors', 'books', 'id', 'authorId')
// .then(results => console.log(results))
// .catch(err => console.log(err))

// console.log(ORM.innerJoin([firstName, lastName], authors, books, authors.id, books.authorsId))
var connection = require("./connection.js");

class ORM  {
  constructor(connection){
    this.connection = connection
  }
  printQuestionMarks(numberOfValues){
    const questionMarks = [];
    for (var i = 0; i < numberOfValues; i++) {
      questionMarks.push("??");
    }
    return questionMarks.join(', ');
  }
  innerJoin(colsToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol) {
    // 'SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorsId'
    const queryString = `SELECT ${this.printQuestionMarks(colsToSelect.length)} FROM ?? INNER JOIN ?? ON ??.?? = ??.??`;
    return this.connection.query(queryString, [...colsToSelect, tableOne, tableTwo, tableOne, tableOneCol, tableTwo, tableTwoCol])
  }


  getSingle(table, columns, value){
      const queryString = "SELECT * FROM ?? WHERE ?? = ?"
      return this.connection.query(queryString, [table, columns, value])

  }

  create(table, columns, values) {
    
    const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`;

    console.log(queryString);
    return this.connection.query(queryString, [table, ...values]) 
  }

  update(table, objColVals, id) {
    var queryString = `UPDATE ?? SET ? WHERE ?`;

    console.log(queryString);

    return this.connection.query(queryString, [table, objColVals, id])
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
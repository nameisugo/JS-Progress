// Class

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }

  downvote() {
    this.votesQty -= 1;
  }
}

const firstComment = new Comment("First comment");

firstComment instanceof Comment;
firstComment instanceof Object;

// Method call

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }

  downvote() {
    this.votesQty -= 1;
  }
}

const firstComment = new Comment("First comment");

firstComment.upvote();
console.log(firstComment.votesQty);
firstComment.downvote();
console.log(firstComment.votesQty);
firstComment.upvote();
console.log(firstComment.votesQty);
firstComment.downvote();
console.log(firstComment.votesQty);
firstComment.upvote();
console.log(firstComment.votesQty);

const firstComment = new Comment("First comment");

firstComment.hasOwnProperty("text");
firstComment.hasOwnProperty("votesQty");
firstComment.hasOwnProperty("upvote");
firstComment.hasOwnProperty("downvote");
firstComment.hasOwnProperty("hasOwnProperty");

// Creating few examples

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }
}

const firstComment = new Comment("First comment");
const secondComment = new Comment("Second comment");
const thirdComment = new Comment("Third comment");

// Static method

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }

  static mergeComments(first, second) {
    return "${first} ${second}";
  }
}

Comment.mergeComments("First comment.", "Second comment.");

// Extends other classes

class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0);
  }
}

const myArray = new NumbersArray(2, 5, 7);

console.log(myArray);
myArray.sum();

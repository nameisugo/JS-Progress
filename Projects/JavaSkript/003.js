// Destructuring
const userProfile = {
  name: "Andrew",
  commentsQty: 27,
  hasSignedAgreement: false,
};

const { name, commentsQty } = userProfile;
const { hasSignedAgreement } = userProfile;

console.log(name); // Andrew
console.log(commentsQty); // 27

const fruits = ["Apple", "Banana"];
const [fruitOne, fruitTwo] = fruits;

console.log(fruitOne);
console.log(fruitTwo);

const userProfile = {
  name: "Albert",
  commentsQty: 32,
  hasSignedAgreement: true,
};

const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return "User ${name} has no comments";
  }

  return "User ${name} has ${commentsQty} comments";
};

userInfo(userProfile);

// If
let val = 10;
if (val > 5) {
  val += 20;
}

console.log(val);

// If Else
let val = 10;
if (val < 5) {
  val += 20;
} else {
  val -= 20;
}

console.log(val);

// If Else If
const age = 30;

if (age > 18) {
  console.log("Is adult");
} else if (age >= 12) {
  console.log("Is teenager");
} else {
  console.log("IS child");
}

const age = 5;
if (age >= 18) {
  console.log("Is adult");
}
if (age >= 12 && age < 18) {
  console.log("Is teenager");
}
if (age < 12) {
  console.log("Is child");
}

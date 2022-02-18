//if s-t <= 3 output = YES
//else output = NO
//input ["aaadbddvc"] [aabdcacadb]

function compare(s1, s2) {
  const map = {};

  if (s1.length !== s2.length) return "NO";

  for (let c of s1) {
    if (!map[c]) map[c] = 1;
    else map[c] += 1;
  }

  for (let c of s2) {
    if (map[c] !== undefined) map[c] -= 1;
    else map[c] = (map[c] || 0) + 1;
  }

  return Object.values(map).every((x) => Math.abs(x) <= 3) ? "YES" : "NO";
}

function areAlmostEquivalents(s, t) {
  const results = [];
  for (let i = 0; i < s.length; i++) {
    results.push(compare(s[i], t[i]));
  }
  return results;
}

s = ["aabaab", "aaaaabb"];
t = ["bbabbc", "abb"];

console.log(areAlmostEquivalents(s, t));

// number of repeated a letter
// The substring we consider is , the first  characters of the infinite string.
// There are  occurrences of a in the substring.

//simplify
function repeatedStringSimplify(s, n) {
  // Write your code here
  let numOfa = 0;
  let result = 0;
  let calc = Math.floor((n - s.length) / s.length);
  let reminder = n - s.length - calc * s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "a") {
      numOfa++;
    }
  }
  result += numOfa + calc * numOfa;

  for (let i = 0; i < reminder; i++) {
    if (s[i] == "a") {
      result++;
    }
  }
  return result;
}
repeatedStringSimplify("aba", 10);
//if for 3 elements we have 2 what about 100
//100 x 2 / 3
//abaabaabaa

// Preconditions/requirements: Classes - Animal, Cat. Cat inherits from Animal.
// Animal/Cat should store - id, name, url;
// Expected result: array of 1000 objects of Animal, array of 1000 objects of Cat.

function Animal(name) {
  this.color = "black";
  if (name !== null && name !== undefined) {
    this.Name = name;
  } else {
    this.Name = "";
  }
}
Animal.prototype.setName = function (name) {
  this.Name = name;
};

Animal.prototype.getName = function () {
  return this.Name;
};

function Cat(name, age) {
  Animal.call(this, name, age);
  this.setName(name);
  this.age = age;
}
Cat.prototype = Animal.prototype;
let cat = new Cat("mimi", 3);

cat.color;

function CreateAnimals(t) {
  let arrCat = [];
  let arrAnimal = [];
  const arr = new Array(10);

  for (let i = 0; i < arr.length; i++) {
    if (t === "Cats") {
      let cat = new Cat(t);
      arrCat.push(cat);
    } else {
      let animal = new Animal(t);
      arrAnimal.push(animal);
    }
  }

  console.log(arr);
  return arr;
}

let cats = CreateAnimals("Cats");
let anim = CreateAnimals(null);

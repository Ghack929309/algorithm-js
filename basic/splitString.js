//solution('abc') // should return ['ab', 'c_']
//solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  str.split("");
  let len = str.length;
  let verdict = [];
  let n = 0;
  for (let i = 0; i < len; i++) {
    if (len % 2 === 0 && str[i + n + 1] !== undefined) {
      verdict.push(`${str[i + n]}${str[i + n + 1]}`);
      n++;
    } else if (len % 2 !== 0 && str[i + n] !== undefined) {
      verdict.push(`${str[i + n] + (str[i + n + 1] || "_")}`);
      n++;
    }
  }
  return verdict;
}
solution("abcd");

function pigIt(str) {
  //Code here
  let newStr = str.split(" ");
  let arr = [];
  for (let i = 0; i < newStr.length; i++) {
    let rest = newStr[i].substring(1, newStr[i].length);
    let first = newStr[i][0];
    if (newStr[i] !== "!" && newStr[i] !== "?") {
      arr.push(`${rest}${first}ay`);
    } else {
      arr.push(`${rest}${first}`);
    }
  }

  return arr.join(" ");
}

pigIt("Pig latin is cool !");

let obj = {
  a: {
    b: {
      c: "d",
    },
    d: {},
  },
};
const get = (obj, path) => {
  let pathArr = path.split(".");
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    obj
  );
};
get(obj, "a.b");

function key(obj, path) {
  let arr = path.split(".");
  let tracker = [];
  for (let i = 0; i < arr.length; i++) {
    let iter = [];
    if (Object.keys(obj).includes(arr[i])) {
      iter.push(`["${arr[i]}"]`);
    }
    if (tracker.length > 0 && tracker.includes(arr[i]) === false) {
      iter.push(`["${arr[i]}"]`);
    }
    tracker.push(iter);
  }
  console.log(tracker);
  return obj;
}

key(obj, "a.b");

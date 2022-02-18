const toJadenCase = function () {
  //...
  let str = "How can mirrors be real if our eyes aren't real";

  return str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
};
toJadenCase();

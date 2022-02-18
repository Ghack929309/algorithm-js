// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

function maskify(cc) {
  const num = cc.replace(/\s+/g, "");
  let len;
  if (num.length > 4) {
    len = num.length - 4;
  } else {
    len = num.length;
    return num;
  }
  let output = "";
  for (let i = 0; i < len; i++) {
    output += "#";
  }
  return output + num.substr(num.length - 4, 4);
}
maskify("4556364607935616");

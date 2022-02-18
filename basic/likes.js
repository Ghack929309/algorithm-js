function likes(names) {
  // TODO
  if (names.length < 1) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  let text = "";
  for (let i = 0; i < names.length; i++) {
    text += `${names[i]} ${names[i + 1] ? "and " : "likes this"}`;
  }
  return `${text}`;
}

likes(["Jacob", "Alex"]);

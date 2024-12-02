function find(data) {
  if (data.length === 0) return "";

  let text = data[0];

  for (let i = 1; i < data.length; i++) {
    while (data[i].indexOf(text) !== 0) {
      text = text.substring(0, text.length - 1);
      if (text === "") return "";
    }
  }

  return text;
}


const data = ["flower", "flow", "flight"];
console.log(find(data)); 

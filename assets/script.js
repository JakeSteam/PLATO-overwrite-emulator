const textbox = document.getElementById("textbox");
const container = document.getElementById("container");

textbox.addEventListener("input", () => {
  container.innerHTML = "";
  const text = textbox.value;
  for (let i = 0; i < text.length; i++) {
    const charDiv = document.createElement("div");
    charDiv.className = "character";
    charDiv.textContent = text[i];
    container.appendChild(charDiv);
  }
});

const exampleLinks = document.querySelectorAll("a.example");
exampleLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    textbox.value = link.textContent;
    textbox.dispatchEvent(new Event("input"));
  });
});

const charactersLink = document.querySelector("a.characters");
const characters =
  "!\"#$%&'()*/^_`|~[]{}<>«»@£¥¦§¨©ª®¬¯±°¹²³´µ¶·¸º¼½¾ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÕÖ×ØÙÚÛÜÝàáâãäåèéêëìíîïñòóôõö÷øùúûüýþÿ".split(
    ""
  );
characters.forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.cursor = "pointer";
  span.addEventListener("click", () => {
    textbox.value += char;
    textbox.dispatchEvent(new Event("input"));
  });
  charactersLink.appendChild(span);
});

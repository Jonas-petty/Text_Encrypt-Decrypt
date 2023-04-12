function InputIsValid(inputId = "") {
  let texto = document.querySelector(inputId).value;
  return texto;
}

function Encrypt(text) {
  let encryptedText = ""
  for(let i  = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        encryptedText += "ai"
        break
      case "e":
        encryptedText += "enter"
        break
      case "i":
        encryptedText += "imes"
        break
      case "o":
        encryptedText += "ober"
        break
      case "u":
        encryptedText += "ufat"
        break
      default:
        encryptedText += text[i]
    }
  }
  return encryptedText;
}

function Decrypt(text) {
  let decryptedText = text
  .replace(/ai/g, "a")
  .replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u")

  return decryptedText
}

function DisplayTextOnScreen(fieldId, text = "") {
  let field = document.querySelector(fieldId)
  field.innerHTML = `<p>${text}<\p>`
}

document.querySelector("#encrypt").addEventListener("click", () => {
  var text = InputIsValid("#text_input");

  if (text) {
    let encryptedText = Encrypt(text);
    DisplayTextOnScreen("#result", encryptedText)
  } else {
    alert("Por favor, preencha o campo!");
  }
});

document.querySelector("#decrypt").addEventListener("click", () => {
  var text = InputIsValid("#text_input");

  if (text) {
    let encryptedText = Decrypt(text);
    DisplayTextOnScreen("#result", encryptedText)
  } else {
    alert("Por favor, preencha o campo!");
  }
});

function InputIsValid(inputId = "") {
  let texto = document.querySelector(inputId).value;
  return texto;
}

function Encrypt(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        encryptedText += "ai";
        break;
      case "e":
        encryptedText += "enter";
        break;
      case "i":
        encryptedText += "imes";
        break;
      case "o":
        encryptedText += "ober";
        break;
      case "u":
        encryptedText += "ufat";
        break;
      default:
        encryptedText += text[i];
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
    .replace(/ufat/g, "u");

  return decryptedText;
}

function DisplayTextOnScreen(fieldId, text = "") {
  let container = document.querySelector(fieldId);
  let result = container.querySelector("#result")
  let placeholder = container.querySelector("#placeholder")

  if (result.className.includes("hidden")) {
    result.className = ""
    placeholder.className = "hidden"
  }

  document.querySelector(".result_p").innerText = text
  
}

function CopyToClipboard(inputId = "") {
  let resultArea = document.querySelector(inputId);
  navigator.clipboard.writeText(resultArea.innerText);
}

document.querySelector("#encrypt_button").addEventListener("click", () => {
  var text = InputIsValid("#text_input");

  if (text) {
    let encryptedText = Encrypt(text);
    let defaultContent = document.querySelector("#default_content")
    let resultsContainer = document.querySelector("#results_container")

    if (resultsContainer.className.includes("hidden")) {
      resultsContainer.className = ""
      defaultContent.className = "hidden"
    }

    document.querySelector(".results").innerText = encryptedText
    
  } else {
    alert("Por favor, preencha o campo!");
  }
});

document.querySelector("#decrypt_button").addEventListener("click", () => {
  var text = InputIsValid("#text_input");

  if (text) {
    let decryptedText = Decrypt(text);
    let defaultContent = document.querySelector("#default_content")
    let resultsContainer = document.querySelector("#results_container")

    if (resultsContainer.className.includes("hidden")) {
      resultsContainer.className = ""
      defaultContent.className = "hidden"
    }

    document.querySelector(".results").innerText = decryptedText
  } else {
    alert("Por favor, preencha o campo!");
  }
});

document.querySelector("#copy_button").addEventListener("click", () => {
  CopyToClipboard(".results");

  alert("Valor Copiado!");
});

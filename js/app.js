// trayendo variables DOM
let cipherBtn = document.getElementById('cipher');
let desCipherBtn = document.getElementById('deCipher');
let input = document.getElementById('inputText');


cipherBtn.addEventListener('click', cipher);
function cipher() {
  let newPhrase = '';
  let patronMayus = /^[A-Z\s]*$/;
  let patronMinus = /^[a-z\s]*$/;
  for (i = 0; i < input.value.length; i++) {
    let toAscii = input.value.charCodeAt(i);
    if (!input.value.search(patronMayus))
      newPhrase += String.fromCharCode((toAscii - 65 + 33) % 26 + 65);
    else if (!input.value.search(patronMinus))
      newPhrase += String.fromCharCode((toAscii - 97 + 33) % 26 + 97);
    else
      newPhrase += String.fromCharCode(toAscii);
  }
  alert(newPhrase);
}

desCipherBtn.addEventListener('click', desCipher);
function desCipher() {
  let newPhrase = '';
  let patronMayus = /^[A-Z\s]*$/;
  let patronMinus = /^[a-z\s]*$/;
  for (i = 0; i < input.value.length; i++) {
    let toAscii = input.value.charCodeAt(i);
    if (!input.value.search(patronMayus))
      newPhrase += String.fromCharCode((toAscii - 65 - 33 + 26 * 2) % 26 + 65);
    else if (!input.value.search(patronMinus))
      newPhrase += String.fromCharCode((toAscii - 97 - 33 + 26 * 2) % 26 + 97);
    else
      newPhrase += String.fromCharCode(toAscii);
  }
  alert(newPhrase);
}

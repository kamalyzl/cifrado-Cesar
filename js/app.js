// trayendo variables DOM
let cipherBtn = document.getElementById('cipher'),
  desCipherBtn = document.getElementById('deCipher'),
  input = document.getElementById('inputText'),
  show = document.getElementById('show');

cipherBtn.addEventListener('click', cipher);
function cipher() {
  let newTxt = '';
  let inpuTxt = input.value;
  for (i = 0; i < inpuTxt.length; i++) {
    let toAscii = inpuTxt.charCodeAt(i);
    if (toAscii >= 65 && toAscii <= 90)
      newTxt += String.fromCharCode((toAscii - 65 + 33) % 26 + 65); // Mayus
    else if (toAscii >= 97 && toAscii <= 122)
      newTxt += String.fromCharCode((toAscii - 97 + 33) % 26 + 97); // Minus
    else
      show.innerHTML = `<p> Resultado: ${newTxt} </p>`;
  }
  show.innerHTML = `<p> Resultado: ${newTxt} </p>`;
}


desCipherBtn.addEventListener('click', desCipher);
function desCipher() {
  let newPhrase = '';
  let inpuTxt = input.value;
  for (i = 0; i < inpuTxt.length; i++) {
    let toAscii = inpuTxt.charCodeAt(i);
    if (toAscii >= 65 && toAscii <= 90)
      newPhrase += String.fromCharCode((toAscii - 65 - 33 + 26 * 2) % 26 + 65);
    else if (toAscii >= 97 && toAscii <= 122)
      newPhrase += String.fromCharCode((toAscii - 97 - 33 + 26 * 2) % 26 + 97);
    else
      show.innerHTML = `<p> Resultado: ${newPhrase} </p>`;
  }
  show.innerHTML = `<p> Resultado: ${newPhrase} </p>`;
}

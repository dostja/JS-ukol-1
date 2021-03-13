// tady je místo pro náš program
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
 function secti(a, b) {
  let c = a + b;
  return c;
}

let vysledekVypocet = document.querySelector("#vysledek");

function ukazVysledek() {
  vysledekVypocet.style.display = "none";
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
  vysledekVypocet.style.display = "inline";
}
/**
 * Upozorní uživatele při spuštění.
 */

let upozorneni = "Gratulace, právě jsi spustila tuto funkci!";

function upozorni() {
  alert(upozorneni);
  let napis = document.querySelector(".ctverecek_napis");
  napis.textContent = upozorneni;
  napis.style.lineHeight = "50px";
  console.log(upozorneni);
}

function zmenBarvu() {
  let ctverec;
  ctverec = document.querySelector(".ctverecek");
  ctverec.style.background = "green";
}

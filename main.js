// tady je místo pro náš program

(function () {
  let vysledekVypocet = document.querySelector("#vysledek");
  vysledekVypocet.style.display = "none";
})();

document.querySelector("#vysledek").innerHTML = secti(4, 5);

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

function ukazVysledek() {
  let vysledekVypocet = document.querySelector("#vysledek");
  vysledekVypocet.style.display = "inline";
}

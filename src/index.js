function zurKreativität() {
  let name = prompt("Hallo🖐Wie heißen Sie?");
  let age = prompt("Was ist Ihre E-mail-Adresse?✍");
  alert("Hallo," + name + "! Wir bleiben in Kontakt🖐");
}
let contactButton = document.querySelector("button");
contactButton.addEventListener("click", zurKreativität);

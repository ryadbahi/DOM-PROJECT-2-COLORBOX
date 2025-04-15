document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Fonction pour générer une couleur aléatoire en hexadécimal
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Ajouter un écouteur d'événement au bouton
  changeColorBtn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});

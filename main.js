const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const cardsContainer = document.querySelector(".cards-container");
navbarEmail.addEventListener("click", cambiarValor);
function cambiarValor() {
  const isMenuCart = asaid.classList.contains("inactive");

  if (!isMenuCart) {
    asaid.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
menu.addEventListener("click", cambiarValormobil);
function cambiarValormobil() {
  const isMenuCart = asaid.classList.contains("inactive");

  if (!isMenuCart) {
    asaid.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
// aqui se obtiene el valor del contendor del carrito
// se le crea un evento al boton para mostrarlo
//verifica si otros contedores estan abiertos
//ciera los contenedores

const navbarcart = document.querySelector(".navbar-shopping-cart");
const asaid = document.querySelector(".product-detail");
navbarcart.addEventListener("click", cambiarValorCart);

function cambiarValorCart() {
  const isMenuClosed = mobileMenu.classList.contains("inactive");
  const isMenuEmail = desktopMenu.classList.contains("inactive");

  if (!isMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isMenuEmail) {
    desktopMenu.classList.add("inactive");
  }
  asaid.classList.toggle("inactive");
}

// agregar elementos en main-conteniner
const productList = [];
productList.push({
  name: "panatalla",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Telefono",
  price: 190,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bicicleta",
  price: 89,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bicicleta",
  price: 89,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/* <div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div> */

function renderProductos(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productImg = document.createElement("img");
    const productInfoFigure = document.createElement("figure");
    const imgFigure = document.createElement("img");
    imgFigure.setAttribute("src", "./icons/bt_add_to_cart.svg");
    productImg.setAttribute("src", product.image);
    const div = document.createElement("div");
    const Pprice = document.createElement("p");
    const PName = document.createElement("p");
    Pprice.innerHTML = "$" + product.price;
    PName.innerHTML = product.name;
    div.append(Pprice, PName);
    productInfoFigure.append(imgFigure);
    productInfo.append(div, productInfoFigure);
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);
  }
}

renderProductos(productList)

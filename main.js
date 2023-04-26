const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const cardsContainer = document.querySelector(".cards-container");
navbarEmail.addEventListener("click", cambiarValor);
function cambiarValor() {
  const isMenuCart = asaid.classList.contains("inactive");
  const isProductAsaidClosed  =productAsaid.classList.contains("inactive")

  if (!isMenuCart) {
    asaid.classList.add("inactive");
  }else if(!isProductAsaidClosed){
    productAsaid.classList.add("inactive")
  }
  desktopMenu.classList.toggle("inactive");
}

const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
menu.addEventListener("click", cambiarValormobil);
function cambiarValormobil() {
  const isMenuCart = asaid.classList.contains("inactive");
  const isProductAsaidClosed  =productAsaid.classList.contains("inactive")

  if (!isMenuCart) {
    asaid.classList.add("inactive");
  }else if(!isProductAsaidClosed){
    productAsaid.classList.add("inactive")
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
  const isProductAsaidClosed  =productAsaid.classList.contains("inactive")

  if (!isMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isMenuEmail) {
    desktopMenu.classList.add("inactive");
  }else if(!isProductAsaidClosed){
    productAsaid.classList.add("inactive")
  }
  asaid.classList.toggle("inactive");
}

const productAsaid = document.querySelector(".product-asaid")
const productAsaidClosed = document.querySelector(".product-asaid-close")
productAsaidClosed.addEventListener("click", ClosedProductAsaid)
function opneProductAsaid(){
  const isMenuClosed = mobileMenu.classList.contains("inactive");
  const isMenuEmail = desktopMenu.classList.contains("inactive");

  if(!isMenuClosed) {
    mobileMenu.classList.add("inactive");
  } else if (!isMenuEmail) {
    desktopMenu.classList.add("inactive");
  }
  productAsaid.classList.remove("inactive")
  
}
function ClosedProductAsaid(){
  const isMenuCart = asaid.classList.contains("inactive");

  if (!isMenuCart) {
    asaid.classList.add("inactive");
  }
  productAsaid.classList.add("inactive")
}

const productList = [];

// agregar elementos en main-conteniner
function products(arr,name,price){
  
    arr.push({
      name: name,
      price: price,
      image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    })

  }

products(productList,"Television",200)
products(productList,"Telefono",300)
products(productList,"Computadora",600)



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
    productImg.addEventListener("click", opneProductAsaid)
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

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const detalleCarrito = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const contenedorTarjetas = document.querySelector('.cards-container');
const btnCerrarProductDetail = document.querySelector('.product-detail-close');

navEmail.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toogleMobileMenu);
menuCarrito.addEventListener('click', toggleDetalleCompra);
btnCerrarProductDetail.addEventListener('click', closeProductDetail);

function toggleDesktopMenu(){
    const isDetalleCarritoClosed = detalleCarrito.classList.contains('inactive');
    
    if(!isDetalleCarritoClosed){
        detalleCarrito.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isDetalleCarritoClosed = detalleCarrito.classList.contains('inactive');
    
    if(!isDetalleCarritoClosed){
        detalleCarrito.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleDetalleCompra(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    detalleCarrito.classList.toggle('inactive');
}

function openProductDetailAside(){
    detalleCarrito.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

const listaProductos = [];
listaProductos.push(
    {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Compu',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Teclado',
    price: 27,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Mouse',
    price: 15,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
);

/*
<div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>
*/



function renderizarProductos(lista){
    for (producto of lista){
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.classList.add('product-card');
        
        const imgProducto = document.createElement('img');
        imgProducto.setAttribute('src', producto.image);
        imgProducto.addEventListener('click', openProductDetailAside);
    
        const infoProducto = document.createElement('div');
        infoProducto.classList.add('product-info');
    
        const detailProducto = document.createElement('div');
        
        const priceProducto = document.createElement('p');
        priceProducto.innerText = producto.price;
        
        const nameProducto = document.createElement('p');
        nameProducto.innerText = producto.name;
        
        const figureProducto = document.createElement('figure');
        const imgBtn = document.createElement('img');
        imgBtn.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        figureProducto.appendChild(imgBtn);
        detailProducto.appendChild(priceProducto);
        detailProducto.appendChild(nameProducto);
        
        infoProducto.appendChild(detailProducto);
        infoProducto.appendChild(figureProducto);
    
        tarjetaProducto.appendChild(imgProducto);
        tarjetaProducto.appendChild(infoProducto);
        contenedorTarjetas.appendChild(tarjetaProducto);
    }
}

renderizarProductos(listaProductos);


// 2 forma posible
// for(producto of listaProductos){
//     const tarjetaProducto = document.createElement('div');
//     tarjetaProducto.classList.add('product-card');

//     tarjetaProducto.innerHTML = `
//                     <img src="${producto.image}"
//                         alt="">
//                     <div class="product-info">
//                         <div>
//                             <p>$${producto.price}</p>
//                             <p>${producto.name}</p>
//                         </div>
//                         <figure>
//                             <img src="./icons/bt_add_to_cart.svg" alt="">
//                         </figure>
//                     </div>`;
// contenedorTarjetas.appendChild(tarjetaProducto);
// }

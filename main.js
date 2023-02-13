const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside );

function toggleDesktopMenu(){
    const isAsideClosed = 
    aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = 
    aside.classList.contains('inactive');
    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){
    const ismobileMenuClosed = 
    mobileMenu.classList.contains('inactive');

    if (!ismobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
 
    aside.classList.toggle('inactive')

    if(ismobileMenuClosed){
        
    }
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 
    'https://exitocol.vtexassets.com/arquivos/ids/16228089/Televisor-XIAOMI-43-Pulgadas-Uhd-4K-Smart-Tv-Televisor-Xiaomi-43-P1-4K-UHD-LED-3220004_c.jpg?v=638089789301370000',
})

productList.push({
    name: 'MAC',
    price: 820,
    image: 
    'https://www.telegraph.co.uk/content/dam/technology/2016/05/16/97623364_Mcc0070155__technology_review._Copper_Macbook_11th_may_2016_trans_NvBQzQNjv4BqpiVx42joSuAkZ0bE9ijUnGH28ZiNHzwg9svuZLxrn1U.jpg',
})

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

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    // product = {name, price, image} -> product.image

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerHTML = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerHTML = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
} 



// General

const galleryImages =[
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    }
    
    ];

const products = [
    {
        title: "AstroFiction",
        author: "John Doe",
        price: 49.9,
        image: "./assets/products/img6.png"
      },
      {
        title: "Space Odissey",
        author: "Marie Anne",
        price: 35,
        image: "./assets/products/img1.png"
      },
      {
        title: "Doomed City",
        author: "Jason Cobert",
        price: 0,
        image: "./assets/products/img2.png"
      },
      {
        title: "Black Dog",
        author: "John Doe",
        price: 85.35,
        image: "./assets/products/img3.png"
      },
      {
        title: "My Little Robot",
        author: "Pedro Paulo",
        price: 0,
        image: "./assets/products/img5.png"
      },
      {
        title: "Garden Girl",
        author: "Ankit Patel",
        price: 45,
        image: "./assets/products/img4.png"
      }
]; 
function celsuisToFahr(temprature){
    let fahr =(temprature * 9 / 5) + 32;
    return fahr;
}

// Menu Section

function menuHandler(){
    document.querySelector("#open-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    
    document.querySelector("#close-nav-menu").addEventListener("click", function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });

}

// Greeting Section

function greetingHandler(){


let currentHour = new Date().getHours();
let greetingText;


if (currentHour < 12){
    greetingText = "Good morning!";
}
else if (currentHour < 19){
    greetingText = "Good afternoon!";
}
else if (currentHour < 24){
    greetingText = "Good evening!";
}
else{
    greetingText = "Welcome!";
}

const weatherCondition = "Sunny";
const userLocation = "New York";
let temprature = 25;
let CelsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temprature.toFixed(1)}°C outside`;
let FahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsuisToFahr(temprature).toFixed(1)}°F outside`;
document.querySelector("#greeting").innerHTML = greetingText;



document.querySelector(".weather-group").addEventListener("click", function(e){
    if (e.target.id == "celsius"){
        document.querySelector("p#weather").innerHTML = CelsiusText;
    }
    else if (e.target.id == "fahr"){
        document.querySelector("p#weather").innerHTML = FahrText;
    }    
});

}

// Clock Section

function clockHandler(){
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2,"0");
    
    },1000);

}


// Galery Selection:
function galeryHandler(){
    let mainImage = document.querySelector("#gallery > img");
    let thumbnails = document.querySelector("#gallery .thumbnails");
    
    mainImage.src = galleryImages[0].src;
    mainImage.alt = galleryImages[0].alt;
    
    galleryImages.forEach(function(image, index){
    
        let thumb = document.createElement("img");
        thumb.src = image.src;
        thumb.alt = image.alt;
        thumb.dataset.arrayIndex = index;
        thumb.dataset.selected = index === 0 ? true : false;
        
        thumb.addEventListener("click", function(e){
            let selectedIndex = e.target.dataset.arrayIndex;
            let selectedImage = galleryImages[selectedIndex];
            
            mainImage.src = selectedImage.src;
            mainImage.alt = selectedImage.alt;
    
            thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected = false;
            });
    
    
            e.target.dataset.selected = true;
        });
    
        thumbnails.appendChild(thumb);
        }
    
    )

}

// Products section:

function populateProducts(productList){


        let productsSection = document.querySelector(".products-area");
        productsSection.textContent = "";

        // Run a loop through the products and create an HTML element ("product-item") for each of the products.
        productList.forEach(function(product, index){

        // Create the HTML element for the individual product
        let productElement = document.createElement("div");
        productElement.classList.add("product-item");
        
        // Create the product's image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;

        // Create the product details section

        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        // Create product title, author, price-title and price

        let proudctTitle = document.createElement("h3");
        proudctTitle.classList.add("product-title");
        proudctTitle.textContent = product.title;

        let proudctAuthor = document.createElement("p");
        proudctAuthor.classList.add("product-author");
        proudctAuthor.textContent = product.author;

        let proudctPriceTitle = document.createElement("h3");
        proudctPriceTitle.classList.add("price-title");
        proudctPriceTitle.textContent = "Price";

        let proudctPrice = document.createElement("h3");
        proudctPrice.classList.add("product-price");
        proudctPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

        // Append the product details

        productDetails.append(proudctTitle);
        productDetails.append(proudctAuthor);
        productDetails.append(proudctPriceTitle);
        productDetails.append(proudctPrice);
        


        // Add all child HTML elements for the products.
        productElement.append(productImage);
        productElement.append(productDetails);

        // Add the complete individual product to the products section.
        productsSection.append(productElement);
        });


}

function productsHandler(){
    let productsSection = document.querySelector(".products-area");
    

    let freeProducts = products.filter(item => !item.price || item.price <= 0);
    let paidProducts = products.filter(item => item.price > 0);


    // Run a loop through the products and create an HTML element ("product-item") for each of the products.
    products.forEach(function(product, index){

        // Create the HTML element for the individual product
        let productElement = document.createElement("div");
        productElement.classList.add("product-item");
        
        // Create the product's image
        let productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = "Image for " + product.title;

        // Create the product details section

        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        // Create product title, author, price-title and price

        let proudctTitle = document.createElement("h3");
        proudctTitle.classList.add("product-title");
        proudctTitle.textContent = product.title;

        let proudctAuthor = document.createElement("p");
        proudctAuthor.classList.add("product-author");
        proudctAuthor.textContent = product.author;

        let proudctPriceTitle = document.createElement("h3");
        proudctPriceTitle.classList.add("price-title");
        proudctPriceTitle.textContent = "Price";

        let proudctPrice = document.createElement("h3");
        proudctPrice.classList.add("product-price");
        proudctPrice.textContent = product.price > 0 ? "$" + product.price.toFixed(2) : "Free";

        // Append the product details

        productDetails.append(proudctTitle);
        productDetails.append(proudctAuthor);
        productDetails.append(proudctPriceTitle);
        productDetails.append(proudctPrice);
        


        // Add all child HTML elements for the products.
        productElement.append(productImage);
        productElement.append(productDetails);

        // Add the complete individual product to the products section.
        productsSection.append(productElement);
        });

    
    
    //populateProducts(products);

    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;

    let productFilter = document.querySelector(".products-filter");
    productFilter.addEventListener("click", function(e){
        if (e.target.id === "all"){
            populateProducts(products);
        }
        else if (e.target.id === "paid"){
            populateProducts(paidProducts);
        }
        else if (e.target.id === "free"){
            populateProducts(freeProducts);
        }

    });
}

function footerHandler(){
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent =  `© ${currentYear} - All rights reserved`;
}

navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
})
// Page load

menuHandler()
greetingHandler()
clockHandler()
galeryHandler()
productsHandler() 
footerHandler()
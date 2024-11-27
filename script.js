// Fetch API
// https://fakestoreapi.com/products
const LoadAPI = () => {
    fetch("products.json")
    .then(responce => responce.json())
    .then(data => DisplayProducts(data))
}

// get data
const Getdata = (product) => {
    return (`
        <div class="product">
            <img src="${product.image}">
            <p class="p1">${product.title}</p>
            <p class="p2">${product.category}</p>
            <p class="p3">$${product.price}</p>
        </div>
    `)
}

// Display products

const DisplayProducts = (products) => {
    const DisplayHTML = products.map(product => Getdata(product));
    const Container = document.getElementById("products");
    Container.innerHTML = DisplayHTML.join(" ");
}

LoadAPI();
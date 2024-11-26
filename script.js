// Fetch API
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
            <p>${product.title}</p>
            <p>${product.category}</p>
            <p>${product.price}</p>
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
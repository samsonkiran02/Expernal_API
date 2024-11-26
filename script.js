const LoadAPI = () => {
    fetch("https://fakestoreapi.com/products")
    .then(responce => responce.json())
    .then(data => console.log(data))
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

LoadAPI();
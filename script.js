const LoadAPI = () => {
    fetch("https://fakestoreapi.com/products")
    .then(responce => responce.json())
    .then(data => console.log(data))
}

LoadAPI();
function createProduct(){
    console.log("Create Product")
    const name = document.getElementById("name").value
    const type = document.getElementById("type").value
    const price = document.getElementById("price").value
    const date = document.getElementById("date").value
    const vDate = document.getElementById("vDate").value
    const description = document.getElementById("description").value

    const product={
        name,
        type,
        price,
        date,
        vDate,
        description
    }

    console.log(product)

    localStorage.setItem("product", JSON.stringify(product))
    document.getElementById("msg").innerText="Artículo Agregado"
    document.getElementById("msg").style.color="red"
}
//store the products array in localstorage as "products"

function store(a, b, c, d) {
    this.image = a
    this.type = b
    this.desc = c

    this.price = d
}

var arr = JSON.parse(localStorage.getItem("Products")) || []

function storeinput(e) {
    e.preventDefault()

    let form = document.getElementById("form")

    let image = form.image.value

    let type = form.type.value

    let desc = form.desc.value

    let price = form.price.value


    var storage = new store(image, type, desc, price)

    arr.push(storage)

    localStorage.setItem("Products", JSON.stringify(arr))
}
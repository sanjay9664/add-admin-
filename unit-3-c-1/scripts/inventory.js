var arr = JSON.parse(localStorage.getItem("Products"))

console.log(arr)

arr.map(function(el, index) {

    let div = document.createElement("div")

    let image = document.createElement("img")

    image.src = el.image

    let type = document.createElement("p")

    type.innerText = el.type

    type.style.margin = "auto"

    let desc = document.createElement("p")

    desc.innerText = el.desc

    let price = document.createElement("p")

    price.innerText = el.price

    let btn = document.createElement("button")

    btn.innerText = "Remove"

    btn.addEventListener("click", function() {

        removeItem(el, index)
    })


    div.append(image, type, desc, price, btn)

    document.getElementById("all_products").append(div)

    function removeItem(el, index) {
        arr.splice(index, 1)

        localStorage.setItem("Products", JSON.stringify(arr))

        window.location.reload();
    }
})
function countBasketPrice(arr) {
    var allPrice = 0
    arr.forEach(p => {
        allPrice += p.price
    })

    return allPrice
}



var storeContent = {
    products: [
        { name: 'Продукт1', price: 1000 },
        { name: 'Продукт2', price: 3568 },
        { name: 'Продукт3', price: 1324 }
    ],
    basket: []
}

function drowProducts() {
    var productsDiv = document.getElementById('productList')
    var AllBasketPrice = document.createElement('div')
    AllBasketPrice.setAttribute('id', 'all_basket-price')
    if (AllBasketPrice.nodeValue === null) {
        AllBasketPrice.innerHTML = 'Корзина пустая'
    }

    storeContent.products.forEach(e => {
        var product = document.createElement('div')
        product.setAttribute('class', 'product')
        productsDiv.appendChild(product)

        var productName = document.createElement('p')
        productName.setAttribute('class', 'product_name')
        productName.innerHTML = e.name
        product.appendChild(productName)

        var productPrice = document.createElement('p')
        productPrice.setAttribute('class', 'product_price')
        productPrice.innerHTML = 'Цена: ' + e.price
        product.appendChild(productPrice)

        var productButton = document.createElement('button')
        productButton.setAttribute('class', 'product_button')
        productButton.innerHTML = 'добавить в корзину'

        productButton.onclick = () => {
            storeContent.basket.push(e)
            drowBasket()
            allPrice = countBasketPrice(storeContent.basket)
            AllBasketPrice.innerHTML = 'Общая цена в корзине: ' + allPrice
        }

        product.append(productButton)
        productsDiv.append(product)
        productsDiv.append(AllBasketPrice)
    })

}

function drowBasket() {
    var basketDiv = document.getElementById('basket')

    basketDiv.innerHTML = ''
    storeContent.basket.forEach(b => {
        var basketItem = document.createElement('div')
        basketItem.setAttribute('class', 'basket_item')

        var basketName = document.createElement('p')
        basketName.setAttribute('class', 'basket_name')
        basketName.innerHTML = `${b.name}`
        basketItem.appendChild(basketName)

        var BasketPrice = document.createElement('p')
        BasketPrice.setAttribute('class', 'basket_price')
        BasketPrice.innerHTML = 'Цена: ' + `${b.price}`
        basketItem.appendChild(BasketPrice)

        basketDiv.append(basketItem)

    })
}

drowProducts()
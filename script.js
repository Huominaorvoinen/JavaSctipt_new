function countBasketPrice() {
    var sum = 0;
    j = myBasket.getElementsByTagName('div').length
    for (let i = 0; i < j; i++) {
        sum = sum + (myBasket.getElementsByTagName('div')[i].childNodes[1].textContent * myBasket.getElementsByTagName('div')[i].childNodes[2].textContent)
    }
    return sum
}



var myBasket = document.getElementById('basket')


for (let j = 0; j < 3; j++) {
    var product = document.createElement('div')
    myBasket.appendChild(product).classList.add('Продукт' + (j + 1))
    myBasket.childNodes[j + 1].setAttribute('style',
        'border: 1px solid black; width: 30%;')
}


for (let i = 0; i < myBasket.childNodes.length - 1; i++) {
    var title = document.createElement('p')
    var price = document.createElement('p')
    var count = document.createElement('p')
    var newbutton = document.createElement('button')
    myBasket.getElementsByTagName('div')[i].appendChild(title).setAttribute('class', 'title')
    myBasket.getElementsByTagName('div')[i].appendChild(price).setAttribute('class', 'price')
    myBasket.getElementsByTagName('div')[i].appendChild(count).setAttribute('class', 'count')
    myBasket.getElementsByTagName('div')[i].appendChild(newbutton).setAttribute('class', 'productButton')
    newbutton.innerText = 'Удалить товар'
    myBasket.getElementsByTagName('button')[i].onclick = function () {
        if (parseInt(myBasket.getElementsByTagName('div')[i].childNodes[2].textContent) <= 0) {
            parseInt(myBasket.getElementsByTagName('div')[i].childNodes[2].textContent) = 0
        }
        myBasket.getElementsByTagName('div')[i].childNodes[2].textContent = parseInt(myBasket.getElementsByTagName('div')[i].childNodes[2].textContent) - 1
    }
}

//Список продуктов

myBasket.childNodes[1].childNodes[0].textContent = 'Продукт1'
myBasket.childNodes[1].childNodes[1].textContent = '1000'
myBasket.childNodes[1].childNodes[2].textContent = '0'

myBasket.childNodes[2].childNodes[0].textContent = 'Продукт2'
myBasket.childNodes[2].childNodes[1].textContent = '755'
myBasket.childNodes[2].childNodes[2].textContent = '0'

myBasket.childNodes[3].childNodes[0].textContent = 'Продукт3'
myBasket.childNodes[3].childNodes[1].textContent = '921'
myBasket.childNodes[3].childNodes[2].textContent = '0'



console.log(myBasket.childNodes[3].childNodes[0])

var prodictList = document.getElementById('prodictList')


for (let j = 0; j < 3; j++) {
    var product = document.createElement('div')
    prodictList.appendChild(product).classList.add('Продукт' + (j + 1))
    prodictList.childNodes[j + 1].setAttribute('style',
        'border: 1px solid black; width: 30%;')
}


for (let i = 0; i < prodictList.childNodes.length - 1; i++) {
    var title = document.createElement('p')
    var price = document.createElement('p')
    var newbutton = document.createElement('button')
    prodictList.getElementsByTagName('div')[i].appendChild(title).setAttribute('class', 'title')
    prodictList.getElementsByTagName('div')[i].appendChild(price).setAttribute('class', 'price')
    prodictList.getElementsByTagName('div')[i].appendChild(newbutton).setAttribute('class', 'productButton')
    newbutton.innerText = 'Добавить в корзину'

    prodictList.getElementsByTagName('button')[i].onclick = function () {
        myBasket.getElementsByTagName('div')[i].childNodes[2].textContent = parseInt(myBasket.getElementsByTagName('div')[i].childNodes[2].textContent) + 1
    }
}

//Список продуктов

prodictList.childNodes[1].childNodes[0].textContent = 'Продукт1'
prodictList.childNodes[1].childNodes[1].textContent = '1000'

prodictList.childNodes[2].childNodes[0].textContent = 'Продукт2'
prodictList.childNodes[2].childNodes[1].textContent = '755'

prodictList.childNodes[3].childNodes[0].textContent = 'Продукт3'
prodictList.childNodes[3].childNodes[1].textContent = '921'


console.log(prodictList.getElementsByTagName('button'))

var buy = document.getElementById('buyButton')

buy.onclick = function () {
    alert(countBasketPrice())
}
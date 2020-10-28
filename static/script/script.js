let imgArr = [ 
    'static/images/cells.webp',
    'static/images/coffeetable.webp',
    'static/images/folding-chair.webp',
    'static/images/puf.webp',
    'static/images/roundtable.webp',
    'static/images/shelf.webp',
    'static/images/shelving.webp',
    'static/images/shelving_2.webp',
    'static/images/sm-tab.webp',
    'static/images/tabl-fold.webp',
    'static/images/table.webp',
    'static/images/tablenooteb.webp'
]


function addCards(num) {
    let container = document.getElementsByClassName('product-cards-container')[0]
    for (let i = 1; i <= num; i++) {
        let card = document.getElementsByClassName('product-card')[0]
        container.insertAdjacentElement('beforeEnd', card.cloneNode(true))
    }
}

function setImages(imgList) {
    let elmList = document.querySelectorAll('.product-img')
    for (let i = 0; i < imgList.length; i++) {
        let elm = elmList[i]
        elm.setAttribute('src', imgList[i])
    }
}

function setColorToElm(selector, color) {
    let elmList = document.querySelectorAll(selector)
    for (let elm of elmList) {
        elm.style.backgroundColor = color
    }
}

function coloriseCards(flag) {
    if (flag) {
        setColorToElm('.product-card', '#e9d4b9')
        setColorToElm('.product-img-wrapper', 'antiquewhite')
        setColorToElm('.product-card-text-area', 'antiquewhite')
        setColorToElm('.add-to-favorite', 'lightyellow')
    } else {
        setColorToElm('.product-card', 'white')
        setColorToElm('.product-img-wrapper', 'white')
        setColorToElm('.product-card-text-area', 'white')
        setColorToElm('.add-to-favorite', null)
    }
}


// addCards(11)
// setImages(imgArr)

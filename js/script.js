import data from './database.js'
const shop_card = document.querySelector('.shop_card')
const show_five = document.querySelector('.five')
const show_all = document.querySelector('.all')
const change = document.querySelector('.change')
let cart = []
let basket = document.querySelector('.basket')
let close_modal = document.querySelector('.close')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let price = document.querySelector('h3')
let basket_length = document.querySelector('h2')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let o = document.querySelector('.shetchik h6')

plus.onclick = () => {
 o.innerHTML++
}
minus.onclick = () => {
    o.innerHTML--
}
basket.onclick = () => {
    modal.style.display = 'block'
    modal_bg.style.display = 'block'
    setTimeout(() => {
        modal.style.opacity = 1
        modal_bg.style.opacity = 1

    }, 200)
}
close_modal.onclick = () => {
    modal.style.opacity = 0
    modal_bg.style.opacity = 0


    setTimeout(() => {
        modal.style.display = 'none'
        modal_bg.style.display = 'none'
    }, 500)

}


console.log(basket);
show_five.onclick = () => {
    reload(data.slice(0, 5))
}

show_all.onclick = () => {
    reload(data)
}

change.innerHTML = cart.length


function reload(arr) {
    shop_card.innerHTML = ""

    for (let item of arr) {
        // create
        let shop_item = document.createElement('div')
        let item_img = document.createElement('div')
        let img = document.createElement('img')
        let item_text = document.createElement('div')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        let item_info = document.createElement('div')
        let info_elem_d = document.createElement('div')
        let img_d = document.createElement('img')
        let span_d = document.createElement('span')
        let info_elem_s = document.createElement('div')
        let img_s = document.createElement('img')
        let span_s = document.createElement('span')
        let info_elem_o = document.createElement('div')
        let img_o = document.createElement('img')
        let span_o = document.createElement('span')
        let item_button = document.createElement('div')
        let buttons = document.createElement('button')
        let basket_modal = document.createElement('div')


        // styling

        shop_card.classList.add('shop_card')
        shop_item.classList.add('shop_item')
        item_img.classList.add('item_img')
        item_text.classList.add('item_text')
        item_info.classList.add('item_info')
        info_elem_d.classList.add('info_elem')
        info_elem_s.classList.add('info_elem')
        info_elem_o.classList.add('info_elem')
        item_button.classList.add('item_button')




        img.src = item.image
        h2.innerHTML = item.category
        p.innerHTML = item.description.slice(0, 150) + "..."
        img_d.src = 'img/dollar.svg'
        span_d.innerHTML = item.price
        img_s.src = 'img/star.svg'
        span_s.innerHTML = item.rating.rate
        img_o.src = 'img/object.svg'
        span_o.innerHTML = item.rating.count
        buttons.innerHTML = 'В избранное'

        // append

        shop_card.prepend(shop_item)
        shop_item.prepend(item_img, item_text, item_info, item_button)
        item_img.prepend(img)
        item_text.prepend(h2, p)
        item_info.prepend(info_elem_d, info_elem_s, info_elem_o)
        info_elem_d.prepend(img_d, span_d)
        info_elem_s.prepend(img_s, span_s)
        info_elem_o.prepend(img_o, span_o)
        item_button.prepend(buttons)



        // functions
        buttons.onclick = () => {
            buttons.classList.toggle('active_btn')

            if (cart.includes(item.id)) {
                cart = cart.filter(el => el !== item.id)
            } else {
                cart.push(item.id)
            }
            basket_length.innerHTML = ` Товары(${cart.length}):`
            price.innerHTML = item[price]
            change.innerHTML = cart.length

        }
    }
}
console.log(change
);
reload(data)
const hearts = document.querySelectorAll("i")
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function() {
        if (this.style.color = "black") {
            this.style.color = "red"
        } else {
            this.style.color = "black"
        }
    })
}


const addButton = document.querySelectorAll("button.add")
const minusButton = document.querySelectorAll("button.minus")
const counters = document.querySelectorAll("p.Quantity")
const prices = document.querySelectorAll("p.prices")
const ttc_price = document.getElementById('ttc2')

for (let i = 0; i < addButton.length; i++) {
    addButton[i].addEventListener("click", function() {
        var count = Number(counters[i].textContent)
        count = count + 1
        counters[i].innerHTML = count
        var new_price = Number(prices[i].textContent)
        const old_price = new_price
        update_price = old_price + new_price
        prices[i].innerHTML = update_price
        var total = Number(ttc_price.textContent)
        total = total + new_price
        ttc_price.innerHTML = total
    })
}

for (let i = 0; i < minusButton.length; i++) {
    minusButton[i].addEventListener("click", function() {
        var count = Number(counters[i].textContent)
        if (count > 0 | count === 1) {
            count = count - 1
            counters[i].innerHTML = count
        } else {
            return 0
        }
        if (prices[i] == prices[0]) {
            prices[i].innerHTML = 1999.99
            var total = Number(ttc_price.textContent)
            total = (total - 1999.99).toFixed(2)
            ttc_price.innerHTML = total
        } else {
            prices[i].innerHTML = 99.99
            var total = Number(ttc_price.textContent)
            total = (total - 99.99).toFixed(2)
            ttc_price.innerHTML = total
        }
        if (prices[i] == prices[2]) {
            prices[i].innerHTML = 399.99
            var total = Number(ttc_price.textContent)
            total = (total - 399.99).toFixed(2)
            ttc_price.innerHTML = total
        }

    })
}



function promocheck() {
    const ttc_price = document.getElementById('ttc2')
    var total = Number(ttc_price.textContent)
    var coupon = document.getElementById('coupon_input').value
    if ("GOMYCODE50" == coupon) {
        var multiply = total * 50 / 100
        var new_total = total - multiply
        ttc_price.innerHTML = new_total
    } else {
        alert('Coupon code already used \n Good luck next time !')
    }
}
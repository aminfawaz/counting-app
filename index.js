let count = 0
let countL = document.getElementById("n")
function incr() {
    count += 1
    countL.innerText = count
}

function reset() {
    count = 0
    countL.innerText = count
}

let s = document.getElementById("sa")
s.innerText = ""

function save() {
    s.innerText += count + " - "

}

function dec() {
    count -= 1
    countL.innerText = count
}
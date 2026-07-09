let addproduct = document.getElementById("addproduct")
let deletelastBtn = document.getElementById("deletelast")
let deleteFirst = document.getElementById("deleteFirst")
let addMilkat3 = document.getElementById("addMilkat3")
let copyLastFour = document.getElementById("copyLastFour")
let list = document.getElementById("list")
let enteritem = document.getElementById("enteritem")

let items = ["rice", "sugar", "tea", "eggs", "bread"]

let itemlist = () => {
    list.innerHTML=""
    for (let x = 0; x < items.length; x++) {
        let para = "<p>" + (x + 1) + ")" + items[x] + "</p>"
        list.innerHTML += para

    }

}
let additem = () => {
    items.push(enteritem.value)
    itemlist()
    enteritem.value = ""
}
let deleteLast = () => {
    items.pop()
    itemlist()

}
let delete_first = () => {
    items.shift()
    itemlist()

}
let addmilkat3 = () => {
    items.splice(2, 0, "milk")
    itemlist()

}
let copy = () => {
     let copyarr=items.slice(1,5)
    alert(copyarr)

}


addproduct.addEventListener("click",additem)
deletelastBtn.addEventListener("click",deleteLast)
deleteFirst.addEventListener("click",delete_first)
addMilkat3.addEventListener("click",addmilkat3)
copyLastFour.addEventListener("click",copy)



itemlist()
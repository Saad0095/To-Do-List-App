
var getul1 = document.getElementById('ul1')


function sendthis() {
    var input = document.getElementById('inp')

    var li = document.createElement("li")
    li.setAttribute('class', 'listText')
    
    var litext = document.createTextNode(input.value)
    
    li.appendChild(litext)
    getul1.appendChild(li)
    
    input.value = " "

    //Delete Button Creation, styling and execution
    var dltbutton = document.createElement('button')
    dltbutton.setAttribute('onclick', 'dlt(this)')
    dltbutton.setAttribute('class', 'btn btn-outline-danger deleteButton ulButton')
    
    var dltbuttonText = document.createTextNode('Delete')
    dltbutton.appendChild(dltbuttonText)
    
    li.appendChild(dltbutton)
    
    
    //Edit Button Creation, styling and execution
    var editbutton = document.createElement('button')
    editbutton.setAttribute('onclick', 'editfunction(this)')
    editbutton.setAttribute('class', 'btn btn-outline-info editButton ulButton')
    
    var editbuttonText = document.createTextNode('Edit')
    editbutton.appendChild(editbuttonText)

    li.appendChild(editbutton)

}


function dlt(d) {
    // e.remove()            //Will only remove button
    d.parentNode.remove()
}


function editfunction(e) {

    // console.log(e.parentNode.firstChild)

    var a = prompt("Enter value you want to edit",e.parentNode.firstChild.nodeValue)
    //                                            (li)         (litext)
    e.parentNode.firstChild.nodeValue = a
}


function deleteall() {
    getul1.innerHTML = " "
}
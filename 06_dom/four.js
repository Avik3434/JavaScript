// Add item

function addLanguageList(listName){
    const list = document.createElement('li')
    list.innerHTML = `${listName}`
    document.querySelector('.language').appendChild(list)
}


function addOptimizedLangList(listName){
    const list = document.createElement('li')
    list.appendChild(document.createTextNode(listName))
    document.querySelector('.language').appendChild(list)   
}

addLanguageList('Python')
addLanguageList('Java')

addOptimizedLangList('C++')
addOptimizedLangList('Ruby')

// Edit item

function editListItem(index=2, langName){
    const secondLang = document.querySelector(`li:nth-child(${index})`)
    const newLI = document.createElement('li')
    newLI.textContent = `${langName}`
    secondLang.replaceWith(newLI)
}

editListItem(index=2, langName="Golang")

// Remove

const lastLang = document.querySelector('li:last-child')
lastLang.remove()


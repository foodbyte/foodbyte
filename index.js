const Storage = {
  menuList: {
    nextId: 3,
    data: [
      {
        id: 1,
        name: 'Nasi Goreng',
        imageUrl: 'assets/nasi-goreng.jpg',
      },
      {
        id: 2,
        name: 'Soto Ayam',
        imageUrl: 'assets/soto-ayam.jpg',
      },
    ],
  },
}

const App = {
  displayMenu: () => {
    const $menuItems = document.getElementById('menu-items')
    let menuItems = Storage.menuList.data
    menuItems.forEach(item => {
      const div = document.createElement('div')
      div.setAttribute('class', 'menu-item')
      div.innerHTML = `
      <button>+</button> <img class='item-image' src="${item.imageUrl}">
      <span>${item.name}</span>
      `
      $menuItems.append(div)
    })
  },
  addItem: () => {
    let itemName = prompt('Please enter the name of your dish')
    let itemImage = prompt('Please enter the image url of your dish')
    let newItem = {
      id: Storage.menuList.nextId,
      name: itemName,
      imageUrl: itemImage,
    }
    Storage.menuList.nextId += 1
    Storage.menuList.data.push(newItem)
    const $menuItems = document.getElementById('menu-items')
    $menuItems.innerHTML = ''
    App.displayMenu()
  },
}

App.displayMenu()

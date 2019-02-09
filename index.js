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
      div.innerHTML = `
      <button>+</button> <img src="${item.imageUrl}">
      <span>${item.name}</span>
      `
      $menuItems.append(div)
    })
  },
}

App.displayMenu()

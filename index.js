const Storage = {
  // ---------------------------------------------------------------------------
  menuList: {
    nextId: 3,
    data: [
      {
        id: 1,
        name: 'Nasi Goreng',
        imageURL: 'assets/nasi-goreng.jpg'
      },
      {
        id: 2,
        name: 'Soto Ayam',
        imageURL: 'assets/soto-ayam.jpg'
      }
    ]
  },

  // ---------------------------------------------------------------------------
  collectionMenuList: {
    name: 'Week 1 Favorites',
    nextId: 1,
    data: []
  }
}

const App = {
  // ---------------------------------------------------------------------------
  displayAll: () => {
    App.displayMenu()
    App.displaySelectedCollection()
  },

  // ---------------------------------------------------------------------------
  displayMenu: () => {
    const $menuList = document.getElementById('menu-list')
    $menuList.innerHTML = ''

    Storage.menuList.data.forEach((menuItem, index) => {
      const div = document.createElement('div')
      div.setAttribute('class', `menu-item animated faster fadeInUp`)
      div.innerHTML = `
        <button class="button button-green button-add-menu-to-collection"
        onclick="App.addMenuItemToSelectedCollection(${menuItem.id})">
          +
        </button>
        <img
          class="menu-image"
          src="${menuItem.imageURL}"
          alt="${menuItem.name}"
        />
        <span>${menuItem.name}</span>
        <button
          class="button button-red button-delete-menu-item"
          onclick="deleteMenuItem(${menuItem.id})">
          DELETE
        </button>
      `
      $menuList.append(div)
    })
  },

  // ---------------------------------------------------------------------------
  displaySelectedCollection: () => {
    const $collectionMenuList = document.getElementById('collection-menu-list')
    $collectionMenuList.innerHTML = ''

    Storage.collectionMenuList.data.forEach(menuItem => {
      const div = document.createElement('div')
      div.setAttribute('class', `menu-item animated faster fadeInUp`)
      div.innerHTML = `
        <img
          class="menu-image"
          src="${menuItem.imageURL}"
          alt="${menuItem.name}"
        />
        <span>${menuItem.name}</span>
      `
      $collectionMenuList.append(div)
    })
  },

  // ---------------------------------------------------------------------------
  openAddNewMenu: () => {
    const newMenuName = prompt('Food name?')
    const newMenuImageURL = prompt('Food image URL?')

    if (newMenuName && newMenuImageURL) {
      const newMenuItem = {
        name: newMenuName,
        imageURL: newMenuImageURL
      }
      Storage.menuList.data = Storage.menuList.data.concat(newMenuItem)
      App.displayMenu()
    }
  },

  // ---------------------------------------------------------------------------
  addMenuItemToSelectedCollection: id => {
    const selectedMenuItem = Storage.menuList.data.find(menuItem => {
      return menuItem.id === id
    })
    Storage.collectionMenuList.data = Storage.collectionMenuList.data.concat(
      selectedMenuItem
    )
    App.displaySelectedCollection()
  }
}

// -----------------------------------------------------------------------------
App.displayAll()

const App = {
  menuList: {
    data: [
      {
        id: 1,
        name: 'Nasi Goreng',
        imageURL:
          'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/nasi-goreng.jpg'
      }
    ]
  },
  chosenCollection: {
    name: 'Week 1 Favorites',
    data: [
      {
        id: 1,
        name: 'Nasi Goreng',
        imageURL:
          'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/nasi-goreng.jpg'
      }
    ]
  },

  displayMenu: () => {
    const $menuList = document.getElementById('menu-list')
    $menuList.innerHTML = ''

    App.menuList.data.forEach(menuItem => {
      const div = document.createElement('div')
      div.setAttribute('class', 'menu-item')
      div.innerHTML = `
      <div class="menu-item">
        <button>+</button>
        <img
          class="menu-image"
          src="${menuItem.imageURL}"
          alt="${menuItem.name}"
        />
        <span>${menuItem.name}</span>
        <button class="button button-red button-delete-menu-item">DELETE</button>
      </div>
      `
      $menuList.append(div)
    })
  },

  openAddNewMenu: () => {
    const newMenuName = prompt('Food name?')
    const newMenuImageURL = prompt('Food image URL?')

    if (newMenuName && newMenuImageURL) {
      const newMenuItem = {
        name: newMenuName,
        imageURL: newMenuImageURL
      }
      const newMenuListData = App.menuList.data.concat(newMenuItem)
      App.menuList.data = newMenuListData
      App.displayMenu()
    }
  }
}

App.displayMenu()

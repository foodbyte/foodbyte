const Storage = {
  menuList: {
    nextId: 5,
    data: [
      {
        id: 1,
        name: 'Nasi Goreng',
        imageUrl: 'assets/nasi-goreng.jpg'
      },
      {
        id: 2,
        name: 'Soto Ayam',
        imageUrl: 'assets/soto-ayam.jpg'
      },
      {
        id: 3,
        name: 'Soto Ayam3',
        imageUrl: 'assets/soto-ayam.jpg'
      },
      {
        id: 4,
        name: 'Soto Ayam4',
        imageUrl: 'assets/soto-ayam.jpg'
      }
    ]
  },
  weeklyJournal: {
    nextId: 3,
    data: [
      {
        id: 1,
        name: 'Nasi Goreng',
        imageUrl: 'assets/nasi-goreng.jpg'
      },
      {
        id: 2,
        name: 'Soto Ayam',
        imageUrl: 'assets/soto-ayam.jpg'
      }
    ]
  }
}

const App = {
  displayAll: () => {
    let menuItems = Storage.menuList.data
    let weeklyItems = Storage.weeklyJournal.data

    App.displayMenu(menuItems)
    App.displayWeeklyJournal(weeklyItems)
  },

  displayMenu: dishes => {
    const $menuItems = document.getElementById('menu-items')
    dishes.forEach(item => {
      const div = document.createElement('div')
      div.setAttribute('class', 'menu-item')
      div.innerHTML = `
        <div class="m-item-image">
          <img class="item-image" src="${item.imageUrl}">
          <div class="m-bottom-design"></div>
        </div>
        <span>${item.name}</span>
        <div>
          <button onclick="App.addToJournal(${
            item.id
          })">Add to this week</button> 
        </div>
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
      imageUrl: itemImage
    }
    Storage.menuList.nextId += 1
    Storage.menuList.data.push(newItem)
    const $menuItems = document.getElementById('menu-items')
    $menuItems.innerHTML = ''
    App.displayMenu()
  },

  searchItem: event => {
    event.preventDefault()
    const word = document.getElementById('search-word').value
    let filteredDishes = Storage.menuList.data.filter(dish => {
      return dish.name === word
    })
    const $menuItems = document.getElementById('menu-items')
    $menuItems.innerHTML = ''
    App.displayMenu(filteredDishes)
  },

  addToJournal: id => {
    let meal = Storage.menuList.data.filter(meal => {
      return meal.id === id
    })
    Storage.weeklyJournal.data.push(meal[0])
    const $weeklyItems = document.getElementById('journal-collection')
    $weeklyItems.innerHTML = ''
    let weeklyItems = Storage.weeklyJournal.data
    App.displayWeeklyJournal(weeklyItems)
  },

  displayWeeklyJournal: dishes => {
    const $weeklyItems = document.getElementById('journal-collection')
    dishes.forEach(item => {
      const div = document.createElement('div')
      div.setAttribute('class', 'menu-item')
      div.innerHTML = `
        <div class="m-item-image">
          <img class="item-image" src="${item.imageUrl}">
          <div class="m-bottom-design"></div>
        </div>
        <span>${item.name}</span>
        <div>
          <button>Remove from this week</button> 
        </div>
      `
      $weeklyItems.append(div)
    })
  }
}

App.displayAll()

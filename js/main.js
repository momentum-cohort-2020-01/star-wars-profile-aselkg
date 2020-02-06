let starWarsData
const main = document.querySelector('.data')
const portfolio = document.createElement('h2')
portfolio.textContent = 'Customer Database'
main.classList.add('container')
main.appendChild(portfolio)

const urls = [
  'https://swapi.co/api/people/',
  'https://swapi.co/api/planets/',
  'https://swapi.co/api/films/',
  'https://swapi.co/api/species/1',
  'https://swapi.co/api/vehicles/',
  'https://swapi.co/api/starships/'
]

/// use map() to perform a fetch and handle the response for each url
Promise.all(urls.map(url =>
  fetch(url)
    .then((response) => {
      return response.json()
    })
))

  .then(function (data) {
    console.log(data[0].results[0].name)
    for (const element of data) {
      var i
      for (i = 0; i < element.results.length; i++) {
        // name field

        const nameField = document.createElement('h3')
        nameField.textContent = element.results[i].name
        main.classList.add('name')
        main.appendChild(nameField)

        // species field

        const speciesTitle = document.createElement('p')
        speciesTitle.classList.add('title')
        speciesTitle.textContent = 'species'
        main.appendChild(speciesTitle)

        const speciecisField = document.createElement('p')
        speciecisField.classList.add('content')
        main.appendChild(speciecisField)
        const species = (data[3].name).toLowerCase()

        speciecisField.textContent = species
        console.log(data[3].name)

        // homerworld field

        const homeworldTitle = document.createElement('p')
        homeworldTitle.classList.add('title')
        homeworldTitle.textContent = 'homeworld'
        main.classList.add('content')
        main.appendChild(homeworldTitle)

        const planetField = document.createElement('p')
        const planet = data[1]
        const planets = element.results[i].homeworld
        const planetPosition = ((planets.charAt(planets.length - 2)) - 1)
        planetField.textContent = planet.results[planetPosition].name
        planetField.classList.add('content')
        main.appendChild(planetField)
        console.log(planet.nameField)

        // DOB field

        const dobTitle = document.createElement('p')
        dobTitle.classList.add('title')
        dobTitle.textContent = 'birth year'
        main.appendChild(dobTitle)

        const dobField = document.createElement('p')
        dobField.textContent = element.results[i].birth_year
        dobField.classList.add('content')
        main.appendChild(dobField)

        // height field

        const heightTitle = document.createElement('p')
        heightTitle.classList.add('title')
        heightTitle.textContent = 'heigth'
        main.appendChild(heightTitle)

        const heigthField = document.createElement('p')
        heigthField.textContent = element.results[i].height
        heigthField.classList.add('content')
        main.appendChild(heigthField)

        console.log(data[1].results[planetPosition].name)
        // starships Field

        const starshipsTitle = document.createElement('p')
        starshipsTitle.classList.add('title')
        starshipsTitle.textContent = 'starships'
        main.appendChild(starshipsTitle)

        const starshipsField = document.createElement('p')
        const starshipsList = element.results[i].starships
        for (const starship of starshipsList) {
          const starNum = (starship.slice(-3, -1))
          starshipsField.textContent = data[5].results[i].name
          starshipsField.classList.add('content')
          console.log(data[5].results[i].name)
          main.appendChild(starshipsField)
        }
      }
    }
  })

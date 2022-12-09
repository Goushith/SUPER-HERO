// https://superheroapi.com/api/access-token/character-id


const SUPERHEROTOKEN='3438388049818560'
const BASE_URL=`https://superheroapi.com/api.php/${SUPERHEROTOKEN}`
const newheros=document.getElementById('newhero')

// --------------------------------------------------------------------

const heroimgdiv= document.getElementById('heroImage')
const searchButton= document.getElementById('searchButton')
const searchInput= document.getElementById('searchInput')
// -----------------------------------------------------------------

const getSuperHero =(id,name)=> {
fetch(`${BASE_URL}/${id}`)
  .then(response=>response.json())
  .then(json => {
   console.log(json.powerstats) 
    const superHero = json
    showHeroInfo(json)
  })
  
}


const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const showHeroInfo = (character) =>{
  const name= `<h2>${character.name}</h2>`

  const img=`<img src="${character.image.url}" height=200 width=200/>`


  
 const stats= Object.keys(character.powerstats).map(stat => {
  return `<p>${statToEmoji[stat]} ${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
  }).join('')
  // console.log(stats.join(''))

  heroimgdiv.innerHTML = `${name}${img}${stats} `
  
  // return stats.join('')
}

const getSearchSuperHero = (name) => {
 console.log(searchInput.value) 
fetch(`${BASE_URL}/search/${name}`)
  .then(response=>response.json())
  .then(json => {
   const hero = json.results[0]
  showHeroInfo(hero)
    
  })
}

const randomHero = () => {
  const totalHeros = 731 
 return  Math.floor(Math.random()*totalHeros) + 1
  
}

newhero.onclick=()=>getSuperHero(randomHero())
searchButton.onclick=()=> getSearchSuperHero(searchInput.value)


// https://superheroapi.com/api/access-token/character-id

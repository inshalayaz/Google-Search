const googleDataBase = [
    'cats.com',
    'souprecipies.com',
    'flowers.com',
    'puppy.com',
    'catfood.com',
    'cafecat.com'
]

const googleSearch = (searchInput) =>{
    const matches = googleDataBase.filter(websites=>{
        return websites.includes(searchInput);
    })

   return matches > 3 ? matches.slice(0,3) : matches

}

console.log(googleSearch('cat'));
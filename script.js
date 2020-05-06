const googleDataBase = [
    'cats.com',
    'souprecipies.com',
    'flowers.com',
    'puppy.com',
    'catfood.com',
    'cafecat.com'
]

const googleSearch = (searchInput,db) =>{
    const matches = db.filter(website=>{
        return website.includes(searchInput);
    })

   return matches < 3 ? matches : matches.slice(0,3)

}
console.log(googleSearch('.com',googleDataBase));
module.exports = googleSearch
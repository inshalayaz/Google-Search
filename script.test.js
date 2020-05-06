const googleSearch = require('./script')

dbMock = [
    'dogs.com',
    'cat.com',
    'piegon.com',
    'dogpictures.com',
    'catpictures.com'

]
describe('googleSearch',()=>{

it('Google Search test',()=>{
    expect(googleSearch('test',dbMock)).toEqual([])
    expect(googleSearch('dog',dbMock)).toEqual(['dogs.com','dogpictures.com'])
})

it('Works with null and undifined',()=>{
    expect(googleSearch(undefined,dbMock)).toEqual([])
    expect(googleSearch(null,dbMock)).toEqual([])
})

it('Does not return more than 3 matches', ()=>{
    expect(googleSearch('.com',dbMock).length).toEqual(3)
})
})

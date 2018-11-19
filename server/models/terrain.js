//OUR ARRAY THAT HOLDS TERRAIN OBJECTS
//EACH OBJECT HOLDS THE TYPE OF TERRAIN AS WELL AS THE URL TO THE PICTURE
var terrainOptions = [
    {type: 'forest', url: ('<img src="/images/forest.jpg">')},
    {type: 'plains', url: ('<img src="/images/plains.jpg">')},
    {type: 'mountains', url: ('<img src="/images/mountain.jpg">')},
    {type: 'desert', url: ('<img src="/images/desert.jpg">')}
];

//OUR GET TERRAIN FUNCTION
exports.getTerrainArray = function() {
    return terrainOptions;
}

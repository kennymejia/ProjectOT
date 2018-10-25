//OUR ARRAY THAT HOLDS TERRAIN OBJECTS
//EACH OBJECT HOLDS THE TYPE OF TERRAIN AS WEEL AS THE URL TO THE PICTURE
var terrainOptions = [
    {type: 'forest', url: ('../../client/public/images/forest.jpg')},
    {type: 'plains', url: ('../../client/public/images/plains.jpg')},
    {type: 'mountains', url: ('../../client/public/images/mountains.jpg')},
    {type: 'desert', url: ('../../client/public/images/desert.jpg')}
];

//OUR GET TERRAIN FUNCTION
exports.getTerrain = function() {
    
    //WHILE THE WAGON CONTINUES TO MOVE
    while (currentPace != resting ) {
       
        //WE SET RANDOM TERRAIN TO A RANDOM TERRAIN FROM THE ARRAY
        var randomTerrain = 
        terrainOptions[Math.floor(Math.random() * terrainOptions.length)];
    }
    return randomTerrain;
}

function loadTilemap (numOfTileMap: number) {
    if (numOfTileMap == 1) {
    	
    } else if (numOfTileMap == 2 || numOfTileMap == 3) {
        tiles.setTilemap(tilemap`level3`)
    } else if (numOfTileMap == 4) {
        tiles.setTilemap(tilemap`level4`)
    }
}
let mySprite2 = 0
let mySprite3 = 0
let O = 0
let list2 = 0
let L = 0
let M = 0
let numOfColumns = 0
let N = 0
let numOfRows = 0
let I = 0
let J = 0
let myNecromancer = sprites.create(assets.image`Necromancer`, SpriteKind.Player)
controller.moveSprite(myNecromancer, 50, 50)
scene.cameraFollowSprite(myNecromancer)
animation.runImageAnimation(
myNecromancer,
assets.animation`myNecromancerWalkAnimation`,
300,
true
)
let myKnight = sprites.create(assets.tile`myTile`, SpriteKind.Enemy)
animation.runImageAnimation(
myKnight,
assets.animation`myKnightWalkAnimation`,
300,
true
)
color.setColor(3, color.rgb(150, 150, 150))
let numOfRows2 = 0
let numOfColmuns2 = 0
loadTilemap(1)
let following = 1
let formation = 1
let currentMap = 1

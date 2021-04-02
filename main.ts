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
forever(function () {
    tiles.setTilemap(tilemap`level1`)
})

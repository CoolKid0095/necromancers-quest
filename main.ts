namespace SpriteKind {
    export const Tree = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myNecromancer,
    assets.animation`myNecromancerWalkUp0`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myNecromancer,
    assets.animation`myNecromancerWalkLeft`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    myNecromancer,
    assets.animation`myNecromancerWalkAnimation`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    myNecromancer,
    assets.animation`myNecromancerWalkAnimation`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    myNecromancer,
    assets.animation`myNecromancerWalkRight`,
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    myNecromancer,
    assets.animation`myNecromancerWalkAnimation`,
    200,
    true
    )
})
let Tree1: Sprite = null
let Tree2: Sprite = null
let myNecromancer: Sprite = null
tiles.setTilemap(tilemap`DarkeForest1`)
myNecromancer = sprites.create(assets.image`Necromancer`, SpriteKind.Player)
myNecromancer.setPosition(250, 250)
controller.moveSprite(myNecromancer, 75, 75)
scene.cameraFollowSprite(myNecromancer)
color.setColor(3, color.rgb(150, 150, 150))
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    Tree2 = sprites.create(assets.image`Tree2`, SpriteKind.Tree)
    tiles.placeOnTile(Tree2, value)
}
for (let value of tiles.getTilesByType(assets.tile`myTile134`)) {
    Tree1 = sprites.create(assets.image`Tree1`, SpriteKind.Tree)
    tiles.placeOnTile(Tree1, value)
}
animation.runImageAnimation(
myNecromancer,
assets.animation`myNecromancerWalkAnimation`,
200,
true
)

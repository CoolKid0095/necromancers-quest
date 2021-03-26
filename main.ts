let myNecromancer = sprites.create(assets.image`Necromancer`, SpriteKind.Player)
controller.moveSprite(myNecromancer)
scene.cameraFollowSprite(myNecromancer)
forever(function () {
    tiles.setTilemap(tilemap`level1`)
})

namespace SpriteKind {
    export const Cloud = SpriteKind.create()
}
sprites.onDestroyed(SpriteKind.Cloud, function (sprite) {
    game.over(true)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let rain_drop: Sprite = null
let sub = sprites.createProjectileFromSide(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 5 5 . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 5 5 5 . . 
    5 . . 5 5 5 5 5 5 5 5 6 6 6 . . 
    . 5 5 5 1 6 6 1 5 5 5 6 6 6 . . 
    5 5 5 5 1 6 6 1 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
    5 . 5 5 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, 10, 0)
sub.y = 110
sub.setKind(SpriteKind.Cloud)
game.onUpdateInterval(50, function () {
    rain_drop = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sub, 0, -34)
    rain_drop.y += 3
    rain_drop.x += randint(1, 5)
})

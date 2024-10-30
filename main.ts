namespace SpriteKind {
    export const obj = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    controller.moveSprite(mySprite, 140, 140)
    tiles.setTileAt(location, sprites.castle.tileDarkGrass3)
    animation.runImageAnimation(
    mySprite,
    [img`
        .............fff555.............
        ............f777775f............
        ..5.........f7777775............
        ..5.........f722722f5...........
        55.55.......f722722f5...........
        ..5.........f777777f............
        ..5.........f777777f............
        .............ffffff.............
        .........ffffffff1f.............
        ........f111111111ff............
        ........ff1111111111f...5.......
        .........f111111111f....5.......
        .........fffffffffff..55.55.....
        ........f66666266666f...5.......
        ........f66662626666f...5.......
        .....ff..f662666266f..ffff......
        ....fddf.ffffffffff..ffddf......
        ....fddf.fddddddddf.fefddf......
        .....ff6ffddfddfddfffefddf......
        .....f66f.fddddddff99f6ff.......
        .....f66f.ffddddff99f66f........
        ......f66f66ffff66ff66f.........
        .......f666f1111f6666f..........
        ........fff111116ffff...........
        ..........f111166f9f............
        ..........f166666ff.............
        ...........f6666f...............
        ...........f6666f...............
        ..........ffffffff..............
        ..........f9f..f9f..............
        .........f99f..f99f.............
        ........ffff....ffff............
        `],
    2000,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile2`)
    item = itens._pickRandom()
    if (item == " comida") {
        info.changeLifeBy(1)
        game.showLongText("Você encontrou" + " comida, sua vida aumentou em um!", DialogLayout.Bottom)
    } else if (item == " pulgas") {
        game.showLongText("Você encontrou" + " pulgas, sua velocidade diminuiu!", DialogLayout.Bottom)
        controller.moveSprite(mySprite, 70, 70)
    } else {
    	
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direçãotiro = 3
    animation.runImageAnimation(
    mySprite,
    [img`
        ................................
        ..............f.................
        .............f1ffffffff.........
        ............ff111111111f........
        ...........f1111111111ff........
        ............f111111111f.........
        ............f111111111f.........
        ...........f11111111111f........
        ...........f11ffffffff1f........
        ............ff66666666f.........
        ....fff......f66666666f.........
        ....f66f.....f66666666f.........
        ....f966f.....ffffffff..........
        .....f999f....fddddddf..........
        ......f699f...ffddddff..........
        .......f699f.f66ffff66f.........
        ........f69ff66f1111f6ff........
        .........ffddff611111fddf.......
        ..........fddff661111fddf.......
        ...........ffff666661fff........
        ............ff.f6666f...........
        ...............f6666f...........
        ..............ffffffff..........
        ..............f9f.ffff..........
        .............f99f..fff..........
        ............ffff....f...........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ..............f.................
        .............f1ffffffff.........
        ............ff111111111f........
        ...........f1111111111ff........
        ............f111111111f.........
        ............f111111111f.........
        ...........f11111111111f........
        ...........f11111111111f........
        ............fffffffffff.........
        .............f66666666f.........
        .............f66666666f.........
        ..............ffffffff..........
        ..............fddddddf..........
        ..............ffddddff..........
        .............f66ffff66f.........
        ............f66f1111f66ff.......
        ............fff611111ffddf......
        ...........fdff661111ffddf......
        ..........fdddf666661f.ff.......
        ..........fddf.f6666f...........
        .........f9ff..f6666f...........
        ........f699f.ffffffff..........
        .......f996f..fff..f9f..........
        ......f699f..ffff..f99f.........
        ......f66f...fff....ffff........
        ......fff.....f.................
        ................................
        ................................
        ................................
        ................................
        `],
    300,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direçãotiro == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            ................................
            ...........ff...................
            ..........f22ff.................
            ...........ff22ffff.............
            .........444f111122f............
            .......4455f11111122f...........
            .....444555f111111222f..........
            .....4555f222211112222f.........
            ......4455ff111111222f..........
            .......4455f11111122f...........
            ........4444f111122f............
            ...........ff22ffff.............
            ..........f22fff................
            ...........ff...................
            ................................
            ................................
            `, mySprite, 200, 0)
    } else if (direçãotiro == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..................ff............
            ...............fff22f...........
            ............ffff22ff............
            ...........f221111f4444.........
            ..........f22111111f5544........
            .........f222111111ff5544.......
            ........f222211112222f5554......
            .........f222111111f555444......
            ..........f22111111f5544........
            ...........f221111f444..........
            ............ffff22ff............
            ................ff22f...........
            ..................ff............
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, mySprite, -200, 0)
    } else if (direçãotiro == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            .......f........
            ......f2f.......
            .....f222f......
            ....f22222f.....
            ...f2222222f....
            ...f2111112f....
            ...f1111111f....
            ...f1111111ff...
            ..f211111112f...
            ..f211121112f...
            .f2ff11211ff2f..
            .f2f4ff2ff4f2f..
            ..f.4552f54.f...
            ....455f554.....
            .....455544.....
            .....44544......
            ......454.......
            ......44........
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            `, mySprite, 0, -200)
    } else if (direçãotiro == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            ................................
            ................................
            ................................
            ...............44...............
            ..............454...............
            .............44544..............
            ............445554..............
            ............455f554.............
            ..........f.45f2554.f...........
            .........f2f4ff2ff4f2f..........
            .........f2ff11211ff2f..........
            ..........f211121112f...........
            ..........f211111112f...........
            ..........ff1111111f............
            ...........f1111111f............
            ...........f2111112f............
            ...........f2222222f............
            ............f22222f.............
            .............f222f..............
            ..............f2f...............
            ...............f................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `, mySprite, 0, 200)
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direçãotiro == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f . . . . . . . 
            . . f 5 5 5 5 5 4 f . . . . . . 
            . . f 5 5 5 5 4 4 4 f . . . . . 
            . . f 5 5 5 5 4 4 4 f . . . . . 
            . . f 5 5 5 5 5 4 f . . . . . . 
            . . f f f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 150, 0)
    } else if (direçãotiro == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . f 4 5 5 5 5 5 f . . 
            . . . . . f 4 4 4 5 5 5 5 f . . 
            . . . . . f 4 4 4 5 5 5 5 f . . 
            . . . . . . f 4 5 5 5 5 5 f . . 
            . . . . . . . f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -150, 0)
    } else if (direçãotiro == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . f 4 4 4 4 f . . . . . . 
            . . . . f 5 4 4 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -150)
    } else if (direçãotiro == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 5 5 5 f . . . . . . 
            . . . . f 5 4 4 5 f . . . . . . 
            . . . . f 4 4 4 4 f . . . . . . 
            . . . . . f 4 4 f . . . . . . . 
            . . . . . . f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 150)
    } else {
    	
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direçãotiro = 2
    animation.runImageAnimation(
    mySprite,
    [img`
        ................................
        ................................
        ................................
        ................f...............
        ............f.fffffff...........
        ...........f1f111111f...........
        ...........f11111111ff..........
        ...........f111111111f..........
        ..........f11f1111111f..........
        ..........f1f6fffffff...........
        ..........f1f62666666f..........
        ..........f1ff6266666f..........
        ...........f.fffffffff..........
        .............fdddddddf..........
        .............fdfddddf...........
        .............fdddddf............
        ..............fffff.............
        ..............f66f1f............
        .............fff66f1f...........
        ............f9f6f66ff...........
        ...........f99f11f6fff..........
        ..........f6991f6ffddf..........
        .........f699ffffffddf..........
        .........f66f.f9ff9ff...........
        .........fff.f99ff999f..........
        ............ffff..fff...........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ................f...............
        ............f.fffffff...........
        ...........f1f111111f...........
        ...........f11111111ff..........
        ...........f111111111f..........
        ..........f11f1111111f..........
        ..........f1f6fffffff...........
        ..........f1f62666666f..........
        ..........f1ff6266666f..........
        ...........f.fffffffff..........
        .............fdddddddf..........
        .............fdfddddf...........
        .............fdddddf............
        ..............ffffff............
        ..............f11f6ff...........
        ..............f1f66f6f..........
        ..............ff66ff66f.........
        .............ff66f6ff66f........
        ...........ffff6f66f66f.........
        ..........f9fddfffff6f..........
        .........f99fddfff99f...........
        ........f999fff9ff999f..........
        .......f999fffff..fff...........
        .......f99f.....................
        .......fff......................
        ................................
        ................................
        ................................
        `],
    300,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direçãotiro = 1
    animation.runImageAnimation(
    mySprite,
    [img`
        ................................
        ................................
        ................................
        ................................
        ...............f................
        ...........fffffff.f............
        ...........f111111f1f...........
        ..........ff11111111f...........
        ..........f111111111f...........
        ..........f1111111f11f..........
        ...........fffffff6f1f..........
        ..........f66666626f1f..........
        ..........f6666626ff1f..........
        ..........fffffffff.f...........
        ..........fdddddddf.............
        ...........fddddfdf.............
        ............fdddddf.............
        .............fffff..............
        ............f1f66f..............
        ...........f1f66fff.............
        ...........ff66f6f9f............
        ..........fff6f11f99f...........
        ..........fddff6f1996f..........
        ..........fddffff.f996f.........
        ...........ff9ff9f.f66f.........
        ..........f999ff99f.fff.........
        ...........fff..ffff............
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        ...............f................
        ...........fffffff.f............
        ...........f111111f1f...........
        ..........ff11111111f...........
        ..........f111111111f...........
        ..........f1111111f11f..........
        ...........fffffff6f1f..........
        ..........f66666626f1f..........
        ..........f6666626ff1f..........
        ..........fffffffff.f...........
        ..........fdddddddf.............
        ...........fddddfdf.............
        ............fdddddf.............
        ............ffffff..............
        ...........ff6f11f..............
        ..........f6f66f1f..............
        .........f66ff66ff..............
        ........f66ff6f66ff.............
        .........f66f66f6ffff...........
        ..........f6fffffddf9f..........
        ...........f99fffddf99f.........
        ..........f999ff9fff999f........
        ...........fff..fffff999f.......
        .....................f99f.......
        ......................fff.......
        ................................
        ................................
        ................................
        `],
    300,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.fire, 500)
    game.gameOver(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direçãotiro = 4
    animation.runImageAnimation(
    mySprite,
    [img`
        ................................
        ................................
        ..................f.............
        ..........ffffffff1f............
        .........f111111111ff...........
        .........ff1111111111f..........
        ..........f111111111f...........
        ..........f111111111f...........
        .........f11111111111f..........
        .........f1ffffff1f11f..........
        ..........f66626616ff...........
        ..........f66262666f......fff...
        ..........f62666266f.....f66f...
        ..........fddfddfddf....f669f...
        ...........fddddddf....f999f....
        ...........ffddddff...f996f.....
        ..........f66ffff66f.f996f......
        .........ff6f1111f66ff96f.......
        ........fddf111116ffddff........
        ........fddf111166ffddf.........
        .........fff166666ffff..........
        ............f6666f.ff...........
        ............f6666f..............
        ...........ffffffff.............
        ...........ffff.f9f.............
        ...........fff..f99f............
        ............f....ffff...........
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ..................f.............
        ..........ffffffff1f............
        .........f111111111ff...........
        .........ff1111111111f..........
        ..........f111111111f...........
        ..........fffffffffff...........
        .........f66666266666f..........
        .........f66662626666f..........
        ..........f662666266f...........
        ..........ffffffffff............
        ..........fddddddddf............
        ..........fddfddfddf............
        ...........fddddddf.............
        ...........ffddddff.............
        ..........f66ffff66f............
        ........ff66f1111f66f...........
        .......fddff111116fff...........
        .......fddff111166ffdf..........
        ........ff.f166666fdddf.........
        ............f6666f.fddf.........
        ............f6666f..ff9f........
        ...........ffffffff.f996f.......
        ...........f9f..fff..f699f......
        ..........f99f..ffff..f996f.....
        .........ffff....fff...f66f.....
        ..................f.....fff.....
        ................................
        ................................
        ................................
        `],
    300,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.fire, 500)
    numero = randint(0, 10)
})
let numero = 0
let projectile: Sprite = null
let direçãotiro = 0
let item = ""
let itens: string[] = []
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ...................f............
    ...........ffffffff1f...........
    ..........f111111111ff..........
    ..........ff1111111111f.........
    ...........f111111111f..........
    ...........fffffffffff..........
    ..........f66666266666f.........
    ..........f66662626666f.........
    ...........f662666266f..........
    ...........ffffffffff......fff..
    ...........fddddddddf.....f66f..
    ...........fddfddfddf....f669f..
    ............fddddddf....f999f...
    ............ffddddff...f996f....
    ...........f66ffff66f.f996f.....
    .........ff66f1111f66ff96f......
    ........fddff111116ffddff.......
    ........fddff111166ffddf........
    .........ff.f166666ffff.........
    .............f6666f.ff..........
    .............f6666f.............
    ............ffffffff............
    ............f9f..f9f............
    ...........f99f..f99f...........
    ..........ffff....ffff..........
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
    ......fff.......
    ....fffffff.....
    .f.fff111ff...ff
    .fffff1f1ffffff.
    ..fffff1fffff...
    ....ff1f1fff....
    ...f22222222f...
    ...fdfdddfd22f..
    ...fd1fdf1df22f.
    ....fdddddf.ff..
    .....fdddf......
    ..ffff111ffff...
    .ff111111111ff..
    .f11111111111f..
    .fddf1111fdddf..
    .fddf1111fdddf..
    .fddf1111fdddf..
    .fddffffffdddf..
    ..fffeeeeffff...
    ....feeeeff.....
    ...ffeefeeff....
    ..ffeef.feeff...
    ..feeef.feef....
    ..feeef.ffef....
    ..fffff..fff....
    ffffff....ffff..
    ................
    ................
    ................
    ................
    ................
    ................
    `, SpriteKind.Food)
mySprite2.setPosition(8, 7)
mySprite2.setVelocity(35, 35)
tiles.setCurrentTilemap(tilemap`level11`)
scene.cameraFollowSprite(mySprite)
itens = [" comida", " pulgas"]
info.setLife(3)

let Pix_Y = 0
let Pix_X = 0
OLED12864_I2C.init(60)
OLED12864_I2C.zoom(true)
OLED12864_I2C.showString(
0,
0,
"Hi Big Clive!",
1
)
basic.pause(2000)
OLED12864_I2C.clear()
OLED12864_I2C.zoom(true)
basic.forever(function () {
    Pix_X = randint(0, 127)
    Pix_Y = randint(0, 31)
    OLED12864_I2C.rect(
    Pix_X,
    Pix_Y,
    Pix_X + 1,
    Pix_Y + 1,
    1
    )
    Pix_X = randint(0, 127)
    Pix_Y = randint(0, 31)
    OLED12864_I2C.rect(
    Pix_X,
    Pix_Y,
    Pix_X + 2,
    Pix_Y + 2,
    0
    )
})
basic.forever(function () {
	
})

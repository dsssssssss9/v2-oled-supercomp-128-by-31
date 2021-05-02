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
OLED12864_I2C.zoom(false)
basic.forever(function () {
    OLED12864_I2C.pixel(randint(0, 127), randint(0, 63), 1)
    OLED12864_I2C.pixel(randint(0, 127), randint(0, 63), 0)
})

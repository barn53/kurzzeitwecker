pins.onPulsed(DigitalPin.P8, PulseValue.High, function () {
	
})
input.onButtonPressed(Button.A, function () {
    MinuteErhöhen()
    Zeige_Zeit()
})
input.onButtonPressed(Button.AB, function () {
    minute = 0
    sekunde = 0
    Zeige_Zeit()
})
input.onButtonPressed(Button.B, function () {
    sekunde += 1
    if (sekunde > 59) {
        sekunde = 0
        MinuteErhöhen()
    }
    Zeige_Zeit()
})
function Zeige_Zeit () {
    OLED_I2C.clear()
    OLED_I2C.number_32x40(
    0,
    12,
    minute,
    1
    )
    OLED_I2C.rect(
    66,
    15,
    73,
    22,
    1
    )
    OLED_I2C.rect(
    66,
    35,
    73,
    42,
    1
    )
    OLED_I2C.number_32x40(
    67,
    12,
    sekunde,
    1
    )
    OLED_I2C.draw()
}
function MinuteErhöhen () {
    minute += 1
    if (minute > 99) {
        minute = 0
    }
}
let minute = 0
let sekunde = 0
OLED_I2C.init(60)
sekunde = 55
minute = 95
Zeige_Zeit()
basic.forever(function () {
	
})

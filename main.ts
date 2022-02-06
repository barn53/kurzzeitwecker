input.onPinPressed(TouchPin.P0, function () {
    if (gestartet) {
        gestartet = false
    } else {
        gestartet = true
    }
    Anzeige()
})
input.onButtonPressed(Button.A, function () {
    MinuteErhöhen()
    Anzeige()
})
input.onButtonPressed(Button.AB, function () {
    minute = 0
    sekunde = 0
    Anzeige()
})
input.onButtonPressed(Button.B, function () {
    sekunde += 1
    if (sekunde > 59) {
        sekunde = 0
        MinuteErhöhen()
    }
    Anzeige()
})
function MinuteErhöhen () {
    minute += 1
    if (minute > 99) {
        minute = 0
    }
}
function Anzeige () {
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
    if (gestartet) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
}
let gestartet = false
let minute = 0
let sekunde = 0
OLED_I2C.init(60)
sekunde = 55
minute = 95
gestartet = false
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Resistive)
Anzeige()
loops.everyInterval(1000, function () {
	
})
basic.forever(function () {
	
})

input.onButtonPressed(Button.A, function () {
    MinutePlus()
    Anzeige()
})
function MinutePlus () {
    minute += 1
    if (minute > 99) {
        minute = 0
    }
}
input.onPinPressed(TouchPin.P2, function () {
    music.stopAllSounds()
    if (gestartet) {
        gestartet = false
        soundExpression.sad.play()
    } else {
        gestartet = true
        soundExpression.soaring.play()
    }
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
        MinutePlus()
    }
    Anzeige()
})
function Anzeige () {
    OLED_I2C.clear()
    OLED_I2C.number_32x40(
    0,
    12,
    minute,
    1
    )
    OLED_I2C.number_32x40(
    67,
    12,
    sekunde,
    1
    )
    OLED_I2C.rect(
    62,
    18,
    66,
    24,
    1
    )
    OLED_I2C.rect(
    62,
    35,
    66,
    41,
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
music.setVolume(21)
soundExpression.hello.play()
Anzeige()
loops.everyInterval(1000, function () {
    if (gestartet) {
        soundExpression.giggle.play()
    }
})
basic.forever(function () {
	
})

def on_button_pressed_a():
    MinutePlus()
    Anzeige()
input.on_button_pressed(Button.A, on_button_pressed_a)

def MinutePlus():
    global minute
    minute += 1
    if minute > 99:
        minute = 0

def on_pin_pressed_p2():
    global gestartet
    music.stop_all_sounds()
    if gestartet:
        gestartet = False
        soundExpression.sad.play()
    else:
        gestartet = True
        soundExpression.soaring.play()
    Anzeige()
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_ab():
    global minute, sekunde
    minute = 0
    sekunde = 0
    Anzeige()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global sekunde
    sekunde += 1
    if sekunde > 59:
        sekunde = 0
        MinutePlus()
    Anzeige()
input.on_button_pressed(Button.B, on_button_pressed_b)

def Anzeige():
    OLED_I2C.clear()
    OLED_I2C.number_32x40(0, 12, minute, 1)
    OLED_I2C.number_32x40(67, 12, sekunde, 1)
    OLED_I2C.rect(62, 18, 66, 24, 1)
    OLED_I2C.rect(62, 35, 66, 41, 1)
    OLED_I2C.draw()
    if gestartet:
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)
gestartet = False
minute = 0
sekunde = 0
OLED_I2C.init(60)
sekunde = 55
minute = 95
gestartet = False
pins.touch_set_mode(TouchTarget.P0, TouchTargetMode.RESISTIVE)
music.set_volume(21)
soundExpression.hello.play()
Anzeige()

def on_every_interval():
    if gestartet:
        soundExpression.giggle.play()
loops.every_interval(1000, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)

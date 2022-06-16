input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.servoWritePin(AnalogPin.P2, 180)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
})
basic.forever(function () {
	
})

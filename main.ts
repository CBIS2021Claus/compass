bluetooth.startMagnetometerService()
bluetooth.startLEDService()
let degrees = input.compassHeading()
basic.showString("COMPASS")
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45 || degrees > 315) {
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
    } else if (degrees < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})

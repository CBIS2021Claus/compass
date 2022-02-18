bluetooth.startMagnetometerService()
bluetooth.startLEDService()
let degrees = input.compassHeading()
basic.showString("COMPASS")
basic.forever(function () {
    if (degrees < 45 || degrees > 315) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showString("N")
    } else if (degrees < 135) {
        basic.showString("E")
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (degrees < 225) {
        basic.showString("S")
        basic.showLeds(`
            . # . # .
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showString("W")
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
    degrees = input.compassHeading()
})

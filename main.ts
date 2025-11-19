radio.onReceivedString(function (receivedString) {
    if (receivedString == "gauche") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
radio.setGroup(1)
basic.forever(function () {
    basic.clearScreen()
    basic.pause(1000)
})

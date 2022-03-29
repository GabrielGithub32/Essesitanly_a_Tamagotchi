input.onPinPressed(TouchPin.P0, function () {
    hour += 1
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # # #
        . # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
    happynes += 2
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("" + (hour))
    basic.showString("" + (miniute))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # # # .
            # # . . #
            # . . . #
            # # # . #
            # # # # #
            `)
        basic.showLeds(`
            . # # # .
            # # . . #
            # . . . #
            # # . . #
            . # # # .
            `)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
    happynes += 2
})
input.onPinPressed(TouchPin.P1, function () {
    miniute += 1
})
let miniute = 0
let hour = 0
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . . . #
        # . # . #
        . # # # .
        `)
}
let happynes = 25
hour = 0
miniute = 0
let AGE = 0
loops.everyInterval(60000, function () {
    miniute += 1
})
loops.everyInterval(60000, function () {
    happynes += -2
})
loops.everyInterval(60000, function () {
    AGE += 1
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . . . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . # . #
        # # # # #
        `)
    while (happynes == 20) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (AGE == 20) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # . # #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # # . # #
            # . # . #
            . # # # .
            `)
    }
    if (AGE == 2880) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # # # .
            . # # # .
            `)
    }
    if (AGE == 1440) {
        basic.showLeds(`
            # # # # #
            # . . . #
            . # . # .
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # # . # #
            . . # . .
            # . # . #
            # # # # #
            `)
    }
})
loops.everyInterval(3600000, function () {
    miniute += -60
})
loops.everyInterval(3600000, function () {
    hour += 1
})

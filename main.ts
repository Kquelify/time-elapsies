let Stop = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Stop = input.runningTime()
})
function on_button_pressed_a2() {
    let elapsed: number;
    if (on_button_pressed_a2) {
        basic.showString("Stop Time")
        elapsed = input.runningTime() - Stop
        basic.showNumber(Math.idiv(elapsed, 1000))
    }
    
}

input.onButtonPressed(Button.B, on_button_pressed_a2)

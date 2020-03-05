forever(function () {
pins.PIN_LED_BLUE.digitalWrite(false)
pause(1000);
pins.PIN_LED_BLUE.digitalWrite(true)
pause(1000);
})
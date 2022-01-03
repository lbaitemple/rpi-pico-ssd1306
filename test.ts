// tests go here; this will not be compiled when this package is used as an extension.
SSD1306.createI2C(pins.P0, pins.P1)
SSD1306.clear()
SSD1306.writeString("hello world")

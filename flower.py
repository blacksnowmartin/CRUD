import turtle
import math
import time

# --- Configuration ---
turtle.bgcolor("black")
turtle.speed(0)
turtle.pencolor("cyan")
turtle.hideturtle()
turtle.tracer(0, 0)  # turn off automatic updates for smooth animation

base_radius = 6      # starting circle radius
num_layers = 17      # how many hex layers to draw (including center)
growth_factor = 1.12 # exponential growth per frame
max_radius = 120     # stop growing when circle radius exceeds this
frame_delay = 0.03   # seconds between frames

def draw_flower(r, layers):
    turtle.clear()
    turtle.pensize(3)  # make lines bold
    # center circle
    turtle.penup()
    turtle.goto(0, -r)
    turtle.pendown()
    turtle.circle(r)

    # hexagonal layers of centers at distance k * r from origin
    for layer in range(1, layers):
        dist = r * layer
        for i in range(6 * layer if False else 6):  # keep 6 positions per layer (simple hex ring)
            angle = math.radians(i * 60)
            cx = dist * math.cos(angle)
            cy = dist * math.sin(angle)
            # Move so that the circle is centered at (cx, cy)
            turtle.penup()
            turtle.goto(cx, cy - r)
            turtle.pendown()
            turtle.circle(r)

try:
    r = base_radius
    while r <= max_radius:
        draw_flower(r, num_layers)
        turtle.update()
        time.sleep(frame_delay)
        r *= growth_factor

    # final display until user clicks
    turtle.update()
    turtle.exitonclick()
except turtle.Terminator:
    # window closed by user
    pass

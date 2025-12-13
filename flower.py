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

running = False
r = base_radius

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

def start_simulation():
    global running, r
    running = True
    r = base_radius
    while running and r <= max_radius:
        draw_flower(r, num_layers)
        turtle.update()
        time.sleep(frame_delay)
        r *= growth_factor

def stop_simulation():
    global running
    running = False

def reset_simulation():
    global running, r
    stop_simulation()
    r = base_radius
    turtle.clear()

def create_button(x, y, label, command):
    button = turtle.Turtle()
    button.penup()
    button.goto(x, y)
    button.pendown()
    button.fillcolor("gray")
    button.begin_fill()
    button.circle(30)  # Create a circular button
    button.end_fill()
    button.penup()
    button.goto(x, y - 10)  # Adjust position for text
    button.write(label, align="center", font=("Arial", 16, "normal"))
    button.onclick(command)

# Create buttons
screen = turtle.Screen()
screen.title("Flower Simulation Control")

create_button(-100, 250, "Start", start_simulation)
create_button(0, 250, "Stop", stop_simulation)
create_button(100, 250, "Reset", reset_simulation)

try:
    turtle.mainloop()
except turtle.Terminator:
    pass

import turtle
import math
import time

# --- Configuration ---
turtle.bgcolor("black")
turtle.speed(0)
turtle.pencolor("cyan")
turtle.hideturtle()
turtle.tracer(0, 0)

base_radius = 6
num_layers = 17
growth_factor = 1.12
max_radius = 120
frame_delay = 0.03

running = False
r = base_radius
buttons = []

def draw_flower(r, layers):
    turtle.clear()
    turtle.pensize(3)
    turtle.penup()
    turtle.goto(0, -r)
    turtle.pendown()
    turtle.circle(r)

    for layer in range(1, layers):
        dist = r * layer
        for i in range(6):
            angle = math.radians(i * 60)
            cx = dist * math.cos(angle)
            cy = dist * math.sin(angle)
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
    button.speed(0)
    button.penup()
    button.goto(x, y)
    button.pendown()
    button.pensize(2)
    button.fillcolor("white")
    button.pencolor("gray")
    button.begin_fill()
    for _ in range(4):
        button.forward(60)
        button.right(90)
    button.end_fill()
    
    button.penup()
    button.goto(x + 30, y - 15)
    button.pencolor("black")
    button.write(label, align="center", font=("Arial", 12, "bold"))
    button.onclick(command)
    buttons.append(button)

screen = turtle.Screen()
screen.setup(width=800, height=600)
screen.title("Flower Simulation Control")

create_button(-100, 250, "Start", start_simulation)
create_button(0, 250, "Stop", stop_simulation)
create_button(100, 250, "Reset", reset_simulation)

turtle.update()
turtle.mainloop()

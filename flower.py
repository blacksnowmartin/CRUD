import turtle
import math

# --- Configuration ---
turtle.bgcolor("black") # Set the background color
turtle.speed(0)         # Set the drawing speed to fastest
turtle.pencolor("white")# Set the pen color
radius = 30             # Define the radius of each circle
num_layers = 3          # Number of layers in the hexagonal grid (including center)

# Function to draw a single circle
def draw_circle(r):
    turtle.circle(r)

# --- Drawing the main pattern ---

# The Flower of Life is a hexagonal pattern built around a central point.
# We iterate through layers to create the grid.

# Center circle
turtle.penup()
turtle.goto(0, -radius) # Adjust position to center the overall pattern
turtle.pendown()
draw_circle(radius)

# Hexagonal layers
for layer in range(1, num_layers):
    current_radius = radius * layer
    # Position the turtle at the start of the current layer's hexagon
    turtle.penup()
    turtle.goto(current_radius, 0)
    turtle.pendown()
    
    # Draw circles around the current layer
    for i in range(6):
        draw_circle(radius)
        # Move to the position for the next circle in the hexagon
        angle = math.radians((i + 1) * 60)
        x = current_radius * math.cos(angle)
        y = current_radius * math.sin(angle)
        turtle.penup()
        turtle.goto(x, y)
        turtle.pendown()

# Optional: Draw the large enclosing circle
# The total radius of the final circle needs to encompass the entire pattern
total_radius = radius * num_layers
turtle.penup()
# Adjust Y position for the enclosing circle to be centered correctly
turtle.goto(0, -total_radius) 
turtle.pendown()
draw_circle(total_radius)


# --- Finish ---
turtle.hideturtle() # Hide the turtle icon
turtle.exitonclick() # Close the window on click

import turtle
import math

def draw_circle(x, y, radius, color="black"):
    """Draw a circle at position (x, y) with given radius"""
    turtle.penup()
    turtle.goto(x, y - radius)
    turtle.pendown()
    turtle.pencolor(color)
    turtle.circle(radius)

def flower_of_life(radius=50, rows=4, colors=None):
    """Draw the Flower of Life pattern with enhancements"""
    turtle.speed(0)
    turtle.pensize(2)
    
    if colors is None:
        colors = ["#FF6B9D", "#C44569", "#F8B500", "#1F77B4", "#2CA02C"]
    
    # Calculate spacing between circle centers
    spacing = radius * math.sqrt(3)
    
    # Draw circles in a hexagonal grid pattern
    for row in range(rows):
        for col in range(rows):
            x_offset = col * spacing
            y_offset = row * spacing * math.sqrt(3) / 2
            
            if row % 2 == 1:
                x_offset += spacing / 2
            
            x = x_offset - (rows * spacing) / 2
            y = y_offset - (rows * spacing * math.sqrt(3) / 2) / 2
            
            color = colors[(row + col) % len(colors)]
            draw_circle(x, y, radius, color)
    
    turtle.hideturtle()

if __name__ == "__main__":
    turtle.setup(800, 800)
    turtle.bgcolor("white")
    flower_of_life(radius=50, rows=4)
    turtle.done()
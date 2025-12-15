import turtle
import math

def draw_circle(x, y, radius):
    """Draw a circle at position (x, y) with given radius"""
    turtle.penup()
    turtle.goto(x, y - radius)
    turtle.pendown()
    turtle.circle(radius)

def flower_of_life(radius=50, rows=4):
    """Draw the Flower of Life pattern"""
    turtle.speed(0)
    turtle.pensize(1)
    
    # Calculate spacing between circle centers
    spacing = radius * math.sqrt(3)
    
    # Draw circles in a hexagonal grid pattern
    for row in range(rows):
        for col in range(rows):
            # Offset alternate rows for hexagonal pattern
            x_offset = col * spacing
            y_offset = row * spacing * math.sqrt(3) / 2
            
            if row % 2 == 1:
                x_offset += spacing / 2
            
            x = x_offset - (rows * spacing) / 2
            y = y_offset - (rows * spacing * math.sqrt(3) / 2) / 2
            
            draw_circle(x, y, radius)
    
    turtle.hideturtle()
    turtle.done()

# Run the flower of life pattern
if __name__ == "__main__":
    turtle.setup(800, 800)
    flower_of_life(radius=50, rows=4)
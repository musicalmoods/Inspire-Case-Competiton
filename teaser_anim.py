from manim import *
from PIL import Image

class SeedlingAnimation(Scene):
    def construct(self):
        bg = Rectangle(width=16, height=9).set_fill(BLACK, opacity=1)
        self.add(bg)
        seedling_img = Image.open("X:\\Musical_Moods\\Coding\\Inspire_Case_Competiton\\assets\\InspireSeedlingNegative.png")
        seedling_mobject = ImageMobject(seedling_img).scale(0.5).move_to(ORIGIN)
        self.play(FadeIn(seedling_mobject))
        seedling_path = Line(ORIGIN, 4*LEFT + 3*UP)
        self.play(MoveAlongPath(seedling_mobject, seedling_path), run_time=5, rate_func=smooth)
        inspire_text = Text("Inspire", font_size=72, color=WHITE, font="roboto").move_to(ORIGIN)
        self.play(Write(inspire_text))
        self.wait(2)

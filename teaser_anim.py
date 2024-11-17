from manim import *

class SeedlingAnimation(Scene):
    def construct(self):
        bg = Rectangle(width=16, height=9).set_fill(BLACK, opacity=1)
        self.add(bg)
        seedling_mobject = ImageMobject("X:\\Musical_Moods\\Coding\\Inspire_Case_Competiton\\assets\\InspireSeedlingNegative.png").scale(0.5).move_to(ORIGIN)
        seedling_path = Line(ORIGIN, 4*LEFT + 3*UP)
        inspire_text = Text("Inspire", font_size=72, color=WHITE, font="roboto").move_to(ORIGIN)
        self.play(Write(inspire_text), runtime=3)
        self.play(FadeOut(inspire_text))
        self.play(FadeIn(seedling_mobject))
        self.play(MoveAlongPath(seedling_mobject, seedling_path), run_time=5, rate_func=smooth)
        self.play(FadeOut(seedling_mobject))

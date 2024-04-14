import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StrokeCounterComponent } from "./stroke-counter/stroke-counter.component";
import { PlayerScoresComponent } from "./player-scores/player-scores.component";
import { ScoreBoardComponent } from "./score-board/score-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StrokeCounterComponent, PlayerScoresComponent, ScoreBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minigolf';
}

import { Component, Input } from '@angular/core';
import { NgForOf } from "@angular/common";
import { PlayerScoresComponent } from "../player-scores/player-scores.component";

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [
    NgForOf,
    PlayerScoresComponent
  ],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.css'
})
export class ScoreBoardComponent {
  @Input() players!: string[]
  @Input() pars!: number[]
}

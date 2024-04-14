import { Component, Input } from '@angular/core';
import { NgForOf } from "@angular/common";
import { StrokeCounterComponent } from "../stroke-counter/stroke-counter.component";

@Component({
  selector: 'app-player-scores',
  standalone: true,
  imports: [
    NgForOf,
    StrokeCounterComponent
  ],
  templateUrl: './player-scores.component.html',
  styleUrl: './player-scores.component.css'
})
export class PlayerScoresComponent {
  @Input() player!: string;
  @Input() pars!: number[];
  strokes: number = 0;

  stroked() {
    this.strokes++;
  }
}

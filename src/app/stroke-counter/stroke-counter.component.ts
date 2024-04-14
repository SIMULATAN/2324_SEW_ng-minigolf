import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-stroke-counter',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './stroke-counter.component.html',
  styleUrl: './stroke-counter.component.css'
})
export class StrokeCounterComponent {
  strokes: number = 0;
  @Input() par!: number;
  @Output() stroked = new EventEmitter<number>()

  stroke() {
    this.strokes++;
    this.stroked.emit(this.strokes);
  }

}

import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-premieres',
  templateUrl: './premieres.component.html',
  styleUrls: ['./premieres.component.css']
})
export class PremieresComponent implements OnInit {

  posters = [
    'avatar.jpg',
    'beetleJuice.jpg',
    'shang-chi.jpg',
    'venomCarnage.jpg',
    'wIf.jpg',
    'blackAdam.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.posters, event.previousIndex, event.currentIndex);
    console.log(event);
  }

}

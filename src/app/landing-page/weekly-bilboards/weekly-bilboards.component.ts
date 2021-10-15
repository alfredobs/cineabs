import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-weekly-bilboards',
  templateUrl: './weekly-bilboards.component.html',
  styleUrls: ['./weekly-bilboards.component.css']
})
export class WeeklyBilboardsComponent implements OnInit {

  posters = [
    'BatmanVSSuperman.jpg',
    'cowboys_aliens.jpg',
    'gernika.jpg',
    'guardians-galaxy.jpg',
    'mostruos_vs_alienigenas.jpg',
    'pacific-rim.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.posters, event.previousIndex, event.currentIndex);
    console.log(event);
  }

}

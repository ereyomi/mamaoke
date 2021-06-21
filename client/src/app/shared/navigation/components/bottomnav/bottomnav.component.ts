import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../../navigation.component';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrls: ['./bottomnav.component.scss']
})
export class BottomnavComponent implements OnInit {

  @Input() sideMenu!: Menu[];
  @Output() activateMenuEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  activateSideMenu(index: number) {
    this.activateMenuEmitter.emit(index);
  }

}

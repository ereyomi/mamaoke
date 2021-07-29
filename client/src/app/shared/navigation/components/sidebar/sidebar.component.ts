import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../../navigation.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sideMenu!: Menu[];
  @Output() activateMenuEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  activateSideMenu(index: number) {
    this.activateMenuEmitter.emit(index);
  }

}

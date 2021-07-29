import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggle = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(): void {
    this.toggle = !this.toggle;
  }

}

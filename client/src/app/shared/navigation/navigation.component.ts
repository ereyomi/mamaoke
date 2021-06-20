import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounce } from 'lodash';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() showGetHelpLinkOnly!: boolean;
  @HostListener('window:resize', ['$event']) appResizeOnResize = debounce(e => {
    this.screenWidth = e.target.innerWidth;
    this.screenChange();
  }, 200);
  targetedScreenWidth = 765;
  screenWidth: any;
  smallScreenStatus!: boolean;
  biggerScreenStatus!: boolean;
  homeLink = 'welcome';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth || document.body.clientWidth;
    this.screenChange();
  }

  screenChange(): void {
    this.smallScreenStatus = this.targetedScreenWidth >= this.screenWidth ? true : false;
    this.biggerScreenStatus = this.targetedScreenWidth < this.screenWidth ? true : false;
  }
  get isSmallScreen(): boolean {
    return this.smallScreenStatus;
  }
  get isBigScreen(): boolean {
    return this.biggerScreenStatus;
  }

  routeTo(link: string | undefined): void {
    this.router.navigate([link]);
  }

}

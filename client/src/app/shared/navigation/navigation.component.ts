import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounce } from 'lodash';
import {
  faUserAlt,
  faWallet,
  faShoppingBag,
  faFileInvoiceDollar,
  faUserFriends,
  faBell,
  faHouseUser,
  faHome,
  faBookOpen,
  faNewspaper,
  faUserCog
} from '@fortawesome/free-solid-svg-icons';

export interface Menu {
  menu: string;
  link: string;
  isActive: boolean;
  icon: any;
}

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
  sideMenu: Menu[] = [
    {
      menu: 'Home',
      link: '',
      isActive: true,
      icon: faHouseUser
    },
    {
      menu: 'Menu',
      link: '',
      isActive: false,
      icon: faBookOpen
    },
    {
      menu: 'Article',
      link: '',
      isActive: false,
      icon: faNewspaper
    },
    {
      menu: 'Settings',
      link: '',
      isActive: false,
      icon: faUserCog
    },
  ];
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
  activateSideMenu(index: number) {
    for (let singleMenu of this.sideMenu) {
      singleMenu.isActive = false;
    }
    this.sideMenu[index].isActive = false;
  }


}

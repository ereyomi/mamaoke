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
  faUserCog,
  faShoppingBasket,
  faStore
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
  _targetedScreenWidth =  1024;
  screenWidth: any;
  smallScreenStatus!: boolean;
  biggerScreenStatus!: boolean;
  homeLink = 'welcome';
  sideMenu: Menu[] = [
    {
      menu: 'Home',
      link: 'dashboard/home',
      isActive: true,
      icon: faHouseUser,
    },
    {
      menu: 'Menu',
      link: 'dashboard/menu',
      isActive: false,
      icon: faBookOpen
    },
    {
      menu: 'Article',
      link: 'dashboard/article',
      isActive: false,
      icon: faNewspaper
    },
    {
      menu: 'Settings',
      link: 'dashboard/settings',
      isActive: false,
      icon: faUserCog
    },
    {
      menu: 'Products',
      link: 'dashboard/products',
      isActive: false,
      icon: faStore
    },
    {
      menu: 'Orders',
      link: 'dashboard/orders',
      isActive: false,
      icon: faShoppingBasket
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
    if (index) {
      for (let singleMenu of this.sideMenu) {
        singleMenu.isActive = false;
      }
      this.sideMenu[index-1].isActive = true;
    }
  }


}

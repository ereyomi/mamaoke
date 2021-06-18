import { Component, OnInit } from '@angular/core';
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
/* import { faNewspaper } from '@fortawesome/free-regular-svg-icons'; */
export interface Menu {
  menu: string;
  link: string;
  isActive: boolean;
  icon: any;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  subMenu: any;
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
  constructor() { }

  ngOnInit(): void {
  }
  openPanel(event: any, index: any): void {
    // console.log(this.sideMenu[index]);
    this.activateSideMenu(index);
    if (!event.target.classList.contains('mainMenu')) {
      this.subMenu = event.target.parentElement.nextElementSibling;
    } else {
      this.subMenu = event.target.nextElementSibling;
    }

    if (this.subMenu !== null) {
      if (this.subMenu.style.maxHeight) {
        this.subMenu.style.padding = '0';
        this.subMenu.style.maxHeight = null;
      } else {
        this.subMenu.style.maxHeight = this.subMenu.scrollHeight + "px";
      }
    }
  }
  activateSideMenu(index: number) {
    for (let singleMenu of this.sideMenu) {
      singleMenu.isActive = false;
    }
    this.sideMenu[index].isActive = false;
  }

}

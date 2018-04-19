import { Component, OnInit, HostListener } from '@angular/core';
import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';
import { Globals } from '../../globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  innerWidth: any
  isVisible = false
  navbarLinkClass = 'navbar__link'
  navbarLinkBox = 'navbar__link-box'
  navbarHiddenButtonClass = 'hidden'
  navbarDropdown = 'navbar__dropdown'
  navbarClass = 'navbar__box_right_up'
  navbarButtonControlClass = 'navbar-controls__btn_right'
  navbarButtonControlLeftClass = 'navbar-controls__btn_left'
  navbarButtonControlRightClass = 'navbar-controls__btn_right'

  constructor(private globals: Globals) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth
    this.setPositionOnResize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isVisible = false
    this.innerWidth = window.innerWidth
    this.setPositionOnResize()
  }

  setPositionOnResize() {
    if (this.innerWidth < 768) {
      this.moveUpSmallScreen()
    } else {
      this.maximize()
      this.moveRightUp()
    }
  }

  showMenu() {
    this.isVisible = !this.isVisible
  }

  minimize() {
    this.navbarLinkClass = 'hidden'
    this.navbarLinkBox = 'navbar__link-box'
    this.navbarButtonControlLeftClass = 'hidden'
    this.navbarButtonControlRightClass = 'hidden'
    this.navbarHiddenButtonClass = 'navbar-controls_btn_hidden'
  }

  maximize() {
    this.isVisible = false
    this.navbarLinkClass = 'navbar__link'
    this.navbarHiddenButtonClass = 'hidden'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveUp() {
    this.isVisible = false
    this.navbarClass = 'navbar__box'
    this.navbarButtonControlClass = 'hidden'
    this.navbarLinkBox = 'navbar__link-box_right'
    this.navbarHiddenButtonClass = 'hidden'
    this.navbarLinkClass = 'navbar__link_horizontal'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveUpSmallScreen() {
    this.navbarLinkClass = 'hidden'
    this.navbarClass = 'navbar__box'
    this.navbarButtonControlClass = 'hidden'
    this.navbarButtonControlLeftClass = 'hidden'
    this.navbarButtonControlRightClass = 'hidden'
    this.navbarLinkBox = 'navbar__link-box_right'
    this.navbarHiddenButtonClass = 'navbar-controls_btn_hidden'
  }

  moveLeftDown() {
    this.navbarLinkClass = 'navbar__link'
    this.navbarLinkBox = 'navbar__link-box'
    this.navbarClass = 'navbar__box_left_down'
    this.navbarDropdown = 'navbar__dropdown_left_down'
    this.navbarButtonControlClass = 'navbar-controls__btn_right'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveLeftUp() {
    this.navbarLinkClass = 'navbar__link'
    this.navbarLinkBox = 'navbar__link-box'
    this.navbarClass = 'navbar__box_left_up'
    this.navbarDropdown = 'navbar__dropdown_left_up'
    this.navbarButtonControlClass = 'navbar-controls__btn_right'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveRightDown() {
    this.navbarLinkClass = 'navbar__link'
    this.navbarLinkBox = 'navbar__link-box'
    this.navbarClass = 'navbar__box_right_down'
    this.navbarDropdown = 'navbar__dropdown_right_down'
    this.navbarButtonControlClass = 'navbar-controls__btn_right'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveRightUp() {
    this.navbarLinkClass = 'navbar__link'
    this.navbarLinkBox = 'navbar__link-box'
    this.navbarClass = 'navbar__box_right_up'
    this.navbarDropdown = 'navbar__dropdown_right_up'
    this.navbarButtonControlClass = 'navbar-controls__btn_right'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }
}

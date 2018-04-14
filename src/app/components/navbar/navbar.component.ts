import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarLinkClass = 'navbar__link'
  navbarLinkBox = 'navbar__link-box'
  navbarClass = 'navbar__box_right_up'
  navbarHiddenButtonClass = 'hidden'
  navbarButtonControlClass = 'navbar-controls__btn_right'
  navbarButtonControlLeftClass = 'navbar-controls__btn_left'
  navbarButtonControlRightClass = 'navbar-controls__btn_right'
  
  constructor() { }

  ngOnInit() {

  }

  minimize() {
    this.navbarLinkClass = 'hidden'
    this.navbarLinkBox = 'navbar__link-box'
    this.navbarButtonControlLeftClass = 'hidden'
    this.navbarButtonControlRightClass = 'hidden'
    this.navbarHiddenButtonClass = 'navbar-controls_btn_hidden'
  }

  maximize() {
    this.navbarLinkClass = 'navbar__link'
    this.navbarHiddenButtonClass = 'hidden'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveUp() {
    this.navbarClass = 'navbar__box'
    this.navbarButtonControlClass = 'hidden'
    this.navbarLinkBox = 'navbar__link-box_right'
    this.navbarHiddenButtonClass = 'hidden'
    this.navbarLinkClass = 'navbar__link_horizontal'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveLeftDown() {
    this.navbarLinkClass = 'navbar__link'
    this.navbarClass = 'navbar__box_left_down'
    this.navbarButtonControlClass = 'navbar-controls__btn_right'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveLeftUp() {
    this.navbarLinkClass = 'navbar__link'
    this.navbarClass = 'navbar__box_left_up'
    this.navbarButtonControlClass = 'navbar-controls__btn_right'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveRightDown() {
    this.navbarLinkClass = 'navbar__link'
    this.navbarClass = 'navbar__box_right_down'
    this.navbarButtonControlClass = 'navbar-controls__btn_right'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }

  moveRightUp() {
    this.navbarLinkClass = 'navbar__link'
    this.navbarClass = 'navbar__box_right_up'
    this.navbarButtonControlClass = 'navbar-controls__btn_right'
    this.navbarButtonControlLeftClass = 'navbar-controls__btn_left'
    this.navbarButtonControlRightClass = 'navbar-controls__btn_right'
  }
}

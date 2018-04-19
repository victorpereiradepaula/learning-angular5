import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
  
  isVisibleModalContact = false

  setModalContactVisibility() {
    this.isVisibleModalContact = !this.isVisibleModalContact
  }
}
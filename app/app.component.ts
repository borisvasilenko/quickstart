import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
     
      <button (click)="show()" *ngIf="!visible">show</button>
      <button (click)="hide()" *ngIf="visible">hide</button>
      
      <div *ngIf="visible">calculatedBinding: {{calculatedBinding}}</div>
      `
})
export class AppComponent {
  visible = false;
  get calculatedBinding() {
    // Issue
    throw new Error("I will break the page")
  }
  show() {
    this.visible = true;
    throw new Error("I won't break the page")
  }
  hide() {
    this.visible = false;
  }
 }

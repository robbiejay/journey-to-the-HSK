import { Component, OnInit } from "@angular/core";
import { trigger, state, transition, animate, style } from "@angular/animations";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";
import { LevelSetupService } from "../_services/level-setup.service";


@Component({
  selector: 'ns-hsk-menu',
  templateUrl: './hsk-menu.component.html',
  styleUrls: ['./hsk-menu.component.css'],
  animations: [
    trigger('state', [
      state("inactive", style({ "color":"#f00"})),
      state("active", style({ "color":"#00f"})),
      transition("inactive => active", [animate("1000ms ease-out") ]),
      transition("active => inactive", [animate("1000ms ease-out") ]),

    ])
  ],
  moduleId: module.id
})

export class HSKMenuComponent implements OnInit {


  public menuItems = [];
  public characterSetNumber = [];
  public hskLevel: string;
  public characterSet: string;
  public menuPage = 0;

  public current: boolean;

  constructor(page: Page, private router: Router, public levelSetupService: LevelSetupService) {
    page.actionBarHidden = true;
    this.current = true;
  }

  next() {
    this.current = !this.current;
    this.menuPage = this.menuPage + 6;

    console.log('This is the menu page :' + this.menuPage);
    console.log('This is the menuItemsLength :' + this.menuItems[0].length);
  }

  prev() {
    this.current = !this.current;
    this.menuPage = this.menuPage - 6;
    console.log('This is the menu page :' + this.menuPage);
    console.log('This is the menuItemsLength :' + this.menuItems[0].length);
  }
  ngOnInit() {
    this.hskLevel = 'HSK ' + this.levelSetupService.hskLevel;
    this.menuItems.push(this.levelSetupService.hskMenuItems[this.levelSetupService.hskLevel - 1]);
    console.log(this.levelSetupService.hskLevel)
  }

  selectCharacterSet(charSet:number) {
    this.levelSetupService.characterSet = charSet;
  }
}

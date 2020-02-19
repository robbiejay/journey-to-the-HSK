import { Component, OnInit } from "@angular/core";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { LevelSetupService } from "../_services/level-setup.service";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";


@Component({
  selector: 'ns-mode-menu',
  templateUrl: './mode-menu.component.html',
  styleUrls: ['./mode-menu.component.css'],
  moduleId: module.id
})

export class ModeMenuComponent implements OnInit {
  public direction: number;
  constructor(page: Page, private router: Router, private levelSetupService: LevelSetupService) {
    page.actionBarHidden = true;
  }
  ngOnInit() {
    console.log('This is HSK Level : ' + this.levelSetupService.hskLevel);
    console.log('This is the Character Set : ' + this.levelSetupService.characterSet);
  }

  onSwipe(args: SwipeGestureEventData) {
if(args.direction == 1) {
    this.router.navigate(['/hsk-menu'])
}
}
}

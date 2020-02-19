import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { LevelSetupService } from "../_services/level-setup.service";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id
})

export class HomeComponent implements OnInit {
  constructor(page: Page, public levelSetupService: LevelSetupService) {
    page.actionBarHidden = true;
  }
  ngOnInit() {}

  selectHSKLevel(hskLevel: number) {
    this.levelSetupService.hskLevel = hskLevel;
  }

}

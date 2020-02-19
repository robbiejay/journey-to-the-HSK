import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-practice-start',
  templateUrl: './practice-start.component.html',
  styleUrls: ['./practice-start.component.css'],
  moduleId: module.id
})

export class PracticeStartComponent implements OnInit {
  constructor(page: Page) {
    page.actionBarHidden = true;
  }
  ngOnInit() {}

}

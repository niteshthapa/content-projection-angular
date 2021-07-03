import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() name: string = '';
  @Input() isHidden: boolean = true;
  toggleAccordion() {
    this.isHidden = !this.isHidden;
  }
  constructor() {}

  ngOnInit(): void {
    console.log(this.name);
  }
}

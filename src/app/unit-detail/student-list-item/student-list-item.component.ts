import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss'],
})
export class StudentListItemComponent implements OnInit {
  
  @Input() item: any[] | undefined;

  cheminImage:any = "assets/img/Pdp.png";

  constructor() {}

  ngOnInit(): void {}
}

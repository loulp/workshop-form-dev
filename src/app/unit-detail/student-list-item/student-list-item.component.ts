import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list-item',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss'],
})
export class StudentListItemComponent implements OnInit {
  studentList = [
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
    { firstname: 'Prénom', lastname: 'Nom', comment: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

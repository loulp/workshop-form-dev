import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {

  studentList = [
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
    { firstname: 'Prénom', lastname: 'Nom', imgPath: '/assets/img/Pdp.png' },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

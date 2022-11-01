import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent implements OnInit {
  person: any[] = [
    {
      name: 'Kratos',
      show: false,
    },
    {
      name: 'Cillian Murphy',
      show: true,
    },
    {
      name: 'Henry Cavil',
      show: true,
    },
    {
      name: 'Tom Hardy',
      show: true,
    },
    {
      name: 'Peter Parker',
      show: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

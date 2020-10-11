import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name: 'Blade', content: 'plaatjesserver'},
    {type:'blueprint',name:'Rudolf Hess Tekening', content: 'Berlijn stratenplan'}
  ];


}

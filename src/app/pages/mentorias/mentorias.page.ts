import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mentorias',
  templateUrl: './mentorias.page.html',
  styleUrls: ['./mentorias.page.scss'],
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class MentoriasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage implements OnInit {
  data: any[] = [];

  constructor(public http: HttpClient) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    let self = this;
    prefersDark.addEventListener('change', function(event) {
      console.log(event);
       self.toggleDarkTheme(event);
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe({
    next:data => {
      console.log(data);
      this.data = data;
    }, 
    error:e=> {
      console.log(e);
    }})
  }

  toggleDarkTheme(dark: any) {
    
  }


  toggle(event: any) {
    const check = event.detail.checked;
    document.body.classList.toggle('dark', check)    
  }
}

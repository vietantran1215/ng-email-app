import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users: string[] = [];
  currentUser = '';
  constructor(public messageService: MessageService) {
    this.messageService.getMessages().subscribe((data: any) => {
      data.map((message: any) => {
        if (this.users.indexOf(message.to) === -1) {
          this.users.push(message.to);
          this.currentUser = this.users[0];
          this.messageService.setUser(this.currentUser);
        }
        localStorage.setItem('user', this.users[0]);
      });
    });
  }

  ngOnInit(): void {
  }

  select(value: string): void {
    this.messageService.setUser(value);
    localStorage.setItem('user', value);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { Message } from '../../message';

@Component({
  selector: 'app-email-preview',
  templateUrl: './email-preview.component.html',
  styleUrls: ['./email-preview.component.css']
})
export class EmailPreviewComponent implements OnInit {
  folder = '';
  user = '';
  messages: Message[] = [];
  constructor(private route: ActivatedRoute, public messageService: MessageService) {
    // this.getMessage();
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.folder = param.folder;
      this.messageService.setFolder(this.folder);
      this.getMessage(this.folder);
    });
    this.messageService.user$.subscribe((user: string) => {
      this.user = user;
      this.getMessage(this.folder);
    });
  }

  getMessage(folder: string): void {
    if (this.user === '') {
      this.user = localStorage.getItem('user') + '';
    }
    this.messages = [];
    this.messageService.getMessages().subscribe((data: any) => {
      data.map((mess: any) => {
        const message: Message = {
          folder: mess.folder,
          body: mess.body,
          subject: mess.subject,
          from: mess.from,
          to: mess.to,
          date: mess.date,
          senderName: mess.senderName,
          corpus: mess.corpus,
          _id: mess._id
        };
        if (message.folder === folder && message.to === this.user) {
          this.messages.push(message);
        }
      });
    });
  }

  viewDetail(id: string): void {
    this.messageService.setId(id);
  }
}

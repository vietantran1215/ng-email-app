import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/message';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-email-content',
  templateUrl: './email-content.component.html',
  styleUrls: ['./email-content.component.css']
})
export class EmailContentComponent implements OnInit {
  message: Message;

  constructor(public messageService: MessageService) {
    this.message = {
      folder: '',
      body: '',
      subject: '',
      from: '',
      to: '',
      date: '',
      senderName: {first: '', last: ''},
      corpus: '',
      _id: ''
    };
    this.messageService.user$.subscribe((user: any) => {
      this.message = {
        folder: '',
        body: '',
        subject: '',
        from: '',
        to: '',
        date: '',
        senderName: {first: '', last: ''},
        corpus: '',
        _id: ''
      };
    });
    this.messageService.id$.subscribe((id: string) => {
      this.message._id = id;
      this.getContent();
    });
  }

  ngOnInit(): void {
  }

  getContent(): void {
    this.messageService.getMessages().subscribe(data => {
      data.map((mess: any) => {
        if (mess._id === this.message._id) {
          this.message.folder = mess.folder;
          this.message.body = mess.body;
          this.message.subject = mess.subject;
          this.message.from = mess.from;
          this.message.to = mess.to;
          this.message.date = mess.date;
          this.message.senderName = mess.senderName;
          this.message.corpus = mess.corpus;
          this.message._id = mess._id;
        }
      });
    });
  }
}

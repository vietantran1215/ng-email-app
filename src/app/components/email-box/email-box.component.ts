import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.css']
})
export class EmailBoxComponent implements OnInit {
  folders: string[] = [];
  currentfolder = '';
  activeLink = { 'background-color': '#007bff !important', color: '#fff !important' };
  constructor(private messageService: MessageService) {
    this.messageService.getMessages().subscribe((data: any) => {
      data.map((message: any) => {
        if (this.folders.indexOf(message.folder) === -1) {
          this.folders.push(message.folder);
        }
      });
    });
    this.messageService.folder$.subscribe(folder => {
      this.currentfolder = folder;
    });
  }

  ngOnInit(): void {

  }
}

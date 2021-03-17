import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private URL = '../../assets/messages.json';
  messages: Message[] = [];
  folders: string[] = [];
  users: string[] = [];
  currentUser !: string;
  folder$: Observable<string>;
  user$: Observable<string>;
  id$: Observable<string>;
  private folderSubject = new Subject<any>();
  private userSubject = new Subject<any>();
  private idSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.folder$ = this.folderSubject.asObservable();
    this.user$ = this.userSubject.asObservable();
    this.id$ = this.idSubject.asObservable();
  }

  getMessages(): Observable<any> {
    return this.http.get(this.URL);
  }

  getUser(): string {
    return this.currentUser;
  }

  setFolder(folder: string): void {
    this.folderSubject.next(folder);
  }

  setUser(user: string): void {
    this.userSubject.next(user);
    this.currentUser = user;
  }

  setId(id: string): void {
    this.idSubject.next(id);
  }
}

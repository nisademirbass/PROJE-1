import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../models/user';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  txtSearch:string='';
  totalPrice:number=0;
  @Input() title:string='';
  @Output() search:EventEmitter<string>= new EventEmitter<string>();

  user: User | null = null;

  constructor(private accountService: AccountService, private eventService:EventService){}

  // totalPrie'ı kalıcı olarak tutmak istersek total storage'da tutulmalı
  ngOnInit(): void {
    this.user = this.accountService.getActiveUser();
    this.eventService.onCartChange.subscribe(data=>{
      this.totalPrice += data.price!;
    });
  }

  logout(){
    this.accountService.logout();
    this.user = null;
  }

  searchInPage() {
    this.search.emit(this.txtSearch);
    }
  
}

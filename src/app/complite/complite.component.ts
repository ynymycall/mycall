import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ListService } from '../services/list.service'
@Component({
  selector: 'app-complite',
  templateUrl: './complite.component.html',
  styleUrls: ['./complite.component.css']
})
export class CompliteComponent implements OnInit {
  url: string;
  links = [];
  constructor(private route: ActivatedRoute, private listService: ListService) { }

  ngOnInit() {
    this.url = "D14dasAS24A";
    this.links = this.listService.list;
    console.log('this.listService.list', this.listService.list);
  }

}

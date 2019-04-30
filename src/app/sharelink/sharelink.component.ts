import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ListService } from '../services/list.service'
@Component({
  selector: 'app-sharelink',
  templateUrl: './sharelink.component.html',
  styleUrls: ['./sharelink.component.css']
})
export class SharelinkComponent implements OnInit {
  url: string;
  links = [];
  constructor(private listService: ListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.route.snapshot.paramMap.get("p");
    this.links = this.listService.list;
    console.log('links', this.links);
  }

}

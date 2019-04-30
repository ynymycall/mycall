import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-complite',
  templateUrl: './complite.component.html',
  styleUrls: ['./complite.component.css']
})
export class CompliteComponent implements OnInit {
  url: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.url = this.route.snapshot.paramMap.get("p");
    console.log(`this.url : ${this.url}`);
  }

}

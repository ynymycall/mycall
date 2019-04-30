import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../services/list.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  linkForm: FormGroup;
  links: any = [];
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router, private listService: ListService) { }

  ngOnInit() {
    this.linkForm = this.fb.group({
      link: ['', Validators.required],
      title: ['', Validators.required]
    });
  }

  get f() { return this.linkForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.linkForm.invalid) {
      return;
    }
    let obj = {
      title: this.linkForm.value.title,
      link: this.linkForm.value.link

    };
    this.listService.list.push(obj);
    this.links = this.listService.list;

    this.linkForm.get('link').setValue(null);
    this.linkForm.get('title').setValue(null);
  }

  complite() {
    this.router.navigate(['/complite']);
  }
}

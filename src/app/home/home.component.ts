import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  linkForm: FormGroup;
  links: any = [];
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.linkForm = this.fb.group({
      link: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.linkForm.invalid) {
      return;
    }
    let obj = {
      linkName: this.linkForm.value.link
    };
    this.links.push(obj);
  }

  complite() {
    this.router.navigate(['/complite/D14dasAS24A']);
  }
}

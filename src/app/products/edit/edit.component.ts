import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productCode : string;
  constructor(private _activatedRoute : ActivatedRoute, private _router : Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data) => {
      this.productCode = data['pId'];
    });
  }

  backtolist() {
    this._router.navigate(['/products']);
  }

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorysingle',
  templateUrl: './categorysingle.component.html',
  styleUrls: ['./categorysingle.component.css']
})
export class CategorysingleComponent implements OnInit {
  category: string = '';
  products: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category')?? "";
    });
  }
}
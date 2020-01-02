import { Component, OnInit } from '@angular/core';

import { YahooApiService } from '@shared/services/yahoo-api/yahoo-api.service';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.scss']
})
export class Content1Component implements OnInit {
  object = Object;
  items;

  constructor(private yahooApiService: YahooApiService) {}

  ngOnInit() {
    this.yahooApiService.getByCategoryId(12492).subscribe(result => {
      this.items = result.ResultSet[0].Result;
      console.log(result.ResultSet[0].Result);
    });
  }
}

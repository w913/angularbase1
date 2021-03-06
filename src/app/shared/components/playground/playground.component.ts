import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  @Input()
  titleImgUrl: string;
  @Input()
  titleText: string;

  constructor() {}

  ngOnInit() {}
}

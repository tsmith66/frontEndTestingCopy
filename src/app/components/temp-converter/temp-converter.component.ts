import { Component, OnInit } from '@angular/core';
import { TempConverterService } from 'src/app/services/temp-converter.service';

@Component({
  selector: 'app-temp-converter',
  //template: '<h1>Hello</h1>',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent {


  convertedTemp: number | undefined;

  constructor(private service: TempConverterService) {
  }


  convertToC(temp: number) {
    this.convertedTemp = this.service.convertToC(temp);
  }

}

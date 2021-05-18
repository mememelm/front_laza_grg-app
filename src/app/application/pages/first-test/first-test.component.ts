import { Component, OnInit } from '@angular/core';
import { BaseApiService } from 'src/app/services/base-api.service';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent implements OnInit {
  data: any;
  message: any;

  constructor(private api: BaseApiService) { }

  ngOnInit(): void {
    this.api.test()
      .subscribe((res: any) => {
        this.data = res.data
        this.message = res.message
        console.log('data', this.data)
      })
  }

}

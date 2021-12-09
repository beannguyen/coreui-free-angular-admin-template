import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrokerService } from '../../../_services/broker.service';

@Component({
  selector: 'app-bsc',
  templateUrl: './bsc.component.html',
  styleUrls: ['./bsc.component.scss']
})
export class BscComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private brokerService: BrokerService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      let code = params['code'];
      console.log(code);

      this.brokerService.connect(code)
        .subscribe(res => {

        }, err => {

        });
    });
  }

  ngOnInit(): void {
  }

}

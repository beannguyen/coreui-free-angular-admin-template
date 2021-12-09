import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { environment } from '../../../../../environments/environment';
import { BrokerAccount } from '../../../../models/broker';
import { BrokerService } from '../../../../_services/broker.service';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit {

  broker: BrokerAccount;
  modalRef?: BsModalRef;
  @ViewChild('template', { read: TemplateRef }) template:TemplateRef<any>;

  constructor(
    private brokerService: BrokerService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.brokerService.getBrokerInfo()
      .subscribe(res => {
        console.log(res);
        if (res) {
          this.broker = res;
        }

        if (!(this.broker && this.broker.is_connected)) {
          this.openModal();
        }
      }, err => {

      });
  }

  connectBroker() {
    let options = {
      client_id: environment.SSO_BSC_CLIENT_ID,
      response_type: "code",
      redirect_uri: environment.SSO_BSC_CALLBACK_URL,
      scope: 'account-read order-read order-write balance-read',
      ui_locales: 'vi'
    };
    
    let params = new URLSearchParams();
    for(let key in options){
        params.set(key, options[key]) 
    }
    
    const authUrl = `${environment.SSO_BSC_URL}?${params.toString()}`
    console.log(authUrl);
    window.location.href = authUrl;
  }

  openModal() {
    this.modalRef = this.modalService.show(this.template);
  }

}

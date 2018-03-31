import { Component, ViewChild  } from '@angular/core';
import { ClientService } from '../services/client.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector:'client-list',
    templateUrl: 'client-list.component.html',
    styleUrls:['client-list.component.css'],
    providers: [NgbDropdownConfig]
})


export class ClientListComponent  {

    clientData : any;
    clientList : any = [];
    public isCollapsed = true;
        
        
        constructor(private clientService : ClientService, private config: NgbDropdownConfig){   
        }
        
    
        ngOnInit(){
            this.clientService.getClient().subscribe(
                data => {
                    this.clientList = data;
                }
            );
        } 

        editClient(id) {

        //     this.clientService.update(id).subscribe(
        //         data =>{
        //             this.clientData=data;
        //             console.log(data);
        //         }
        //     );
         }   
        
    }





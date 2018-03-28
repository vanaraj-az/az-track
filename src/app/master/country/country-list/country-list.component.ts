  import { Component, OnInit, ViewChild } from '@angular/core';
  import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
  import { NgModel,FormGroup,FormBuilder,Validators } from '@angular/forms';
  import { CountryForm } from './../forms/country.form'
  import { CountryService } from './../services/country.service';
  
  @Component({
      selector:'country',
      templateUrl: 'country-list.component.html',
      styleUrls:['country-list.component.css']
  })
  
  
  export class CountryComponent implements OnInit {
  
      countryForm:FormGroup;
      countryList : any = [];
      countryAdd : any = [];
      index = 0;
      i : any;
      closeResult: string;
      errorMsg : any;
      countryName : any;
      country : any;
  
  
      constructor(private countryService : CountryService, private modalService: NgbModal){
  
          let country = new CountryForm();
          this.countryForm = country.getForm();
          this.countryName = this.countryForm.get('country').value
      }
  
      //open a country modal
      open(content) {
          this.index = 0;
          this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
          this.countryForm
        }
      
        private getDismissReason(reason: any): string {
          if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
          } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return  `with: ${reason}`;
          }
        }
      
  
      ngOnInit(){
  
          this.countryService.getCountry().subscribe(
              data =>{
                  this.countryList=data;
                   }
              );
           }
  
           
      //push clientForm value into countryAdd
      addCountry(){
  
          if(this.index==0){
              this.countryAdd.push(this.countryForm.get('country').value);
              console.log(this.countryAdd); 
              // alert(this.countryForm.get('country').value + "  added successfully");
              this.countryForm.controls.country.reset();
          }
          else{
              this.countryAdd[this.i] = this.countryForm.get('country').value;
              this.countryForm.controls.country.reset();
              console.log(this.countryAdd);
          }
      }
  
      //edit countryForm
      editCountry(i,content) {
          this.modalService.open(content).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
          this.index = 1;
          this.i = i;
          console.log(i);
          this.countryForm.controls.country.patchValue(this.countryAdd[i]);
        }
  
  
      //delete country from list
      deleteCountry(i: any){
          this.countryAdd.splice(i,1);
      }
  
  
      //insert countryForm into httService
      submit(){
  
           this.countryService.insert(this.countryAdd).subscribe(
               data => this.country = data,
               message => this.errorMsg = message
            );
            console.log(this.errorMsg);
            this.countryAdd = [];   
            window.location.reload(true);         
       }
  }
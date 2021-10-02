import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-demo',
  templateUrl: './ng-if-demo.component.html',
  styleUrls: ['./ng-if-demo.component.css']
})
export class NgIfDemoComponent implements OnInit 
{
  public flag = false;
  
  public selectedLink: string="";        
  
  setradio(e: string): void   
  {  
    this.selectedLink = e;   
  }  
  
  isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) 
        { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
        }  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  } 


// Vaccine

 covidsheild : string[] = ["Pune", "Mumbai", "Nashik", "Aurangabad"];

 cowaixn : string[] = ["Ahmednagar", "Solapur", "Nagpur", "Belapur"];

 public selectVaccine : string ="";

 getSelected(name :string) : void 
 {
   this.selectVaccine = name;
 }

 isCentre(centre :string) : boolean
 {
    if(!this.selectVaccine)
    {
      return false
    }
    return (this.selectVaccine === centre);
 }

  ngOnInit() {
  }

}

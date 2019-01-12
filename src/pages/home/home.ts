import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Morse } from '../../helpers/morse/morse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  InputText : String = '';
  IntermediateText : String = '';
  OutputText : String  = '' ;
  ShowIntermediate : Boolean = false;
  PassThorughChiper : any =0;

  constructor(public navCtrl: NavController) {
      Morse.test();
  }

  Inittranslate(){
    console.log(this.InputText);
    if(this.InputText.length !=0){
      if(this.InputText[0] == '-' || this.InputText[0] == '.' ){
          this.TranslateToEnglish();
      }else{
        this.TranslateToMorse();
      }
    }
  }

  TranslateToEnglish(){
    this.OutputText =  Morse.ToEnglish(this.InputText);
  }

  TranslateToMorse(){
    this.OutputText = Morse.ToMorse(this.InputText);
  }

}


import { Component } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { Store } from '@ngrx/store';
import { State } from "./state-management/state/main-state";
import {mainReducer} from "./state-management/reducers/main-reducer";
import { INCREMENT, DECREMENT } from "./state-management/actions/main-action-creator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  date: DateModel;
  options: DatePickerOptions;
  public data;

  constructor(private store:Store<State>){
  	/*store.select('mainReducer')
  	.subscribe( (data: State )=> {
        this.data = data.counter;
      });
        this.options = new DatePickerOptions();*/
  }

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales'];
  public doughnutChartData:number[] = [450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  increment(){
      this.store.dispatch({type: INCREMENT})
    }
    
    decrement(){
      this.store.dispatch({type: DECREMENT})
    }
}

import { Component, OnInit } from '@angular/core';
import { UnderscorePipe } from '../pipes/underscore.pipe';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
  array = [];
  data: number;
  componentPipe = "";
  constructor(private unders :UnderscorePipe ) { }


  ngOnInit(): void {

  }

  submit() {
     this.componentPipe = this.unders.transform(this.data)
    this.array = [];
    for (let i = 1; i <= this.data; i++) {
      this.array.push(i);
      console.log(i);
    }
  }


}

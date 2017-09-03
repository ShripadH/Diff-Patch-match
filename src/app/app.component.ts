import { ViewChild, Component, OnInit, ElementRef } from '@angular/core';
import { diff_match_patch } from 'diff-match-patch';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  temp: any;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  left ="this is orignal";
  right = "this is copied";
  ngOnInit() {
    
    this.temp = new diff_match_patch();
    var temp1 = this.temp.diff_main("this is orignal", "this is copied");
    var html = ""
    for (var x in temp1) {
      var tempText;
    
        switch(temp1[x][0]){
          
          case -1: tempText= "<del>" + temp1[x][1] + "<del/>" ; break;
          case 0: tempText = temp1[x][1]; break;
          case 1: tempText= "<ins>" + temp1[x][1] + "<ins/>"; break;
        }
      html = html + tempText;
    }    
    this.dataContainer.nativeElement.innerHTML = html;
    debugger;
    console.log(html);
  }

}

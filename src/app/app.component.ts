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

  ngOnInit() {
    debugger;
    this.temp = new diff_match_patch();
    var temp1 = this.temp.diff_main("this is origna", "this is copied");
    var html = "<ins>"
    for (var x in temp1) {
      html = html + temp1[x][1];
    }
    html = html + "</ins>";
    this.dataContainer.nativeElement.innerHTML = html;
    debugger;
    console.log(html);
  }

}

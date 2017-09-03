import { ViewChild, ElementRef, Component, OnInit, Input } from '@angular/core';
import { diff_match_patch } from 'diff-match-patch';

@Component({
  selector: 'app-compare-text',
  templateUrl: './compare-text.component.html',
  styleUrls: ['./compare-text.component.css']
})
export class CompareTextComponent implements OnInit {

  constructor() { }
  temp: any;
  @ViewChild('dataContainer') dataContainer: ElementRef;
  @Input() Left: string;
  @Input() Right: string;
  ngOnInit() {
    this.temp = new diff_match_patch();
    debugger;
    var temp1 = this.temp.diff_main(this.Left, this.Right);
    var html = ""
    for (var x in temp1) {
      var tempText;
      debugger;
      switch (temp1[x][0]) {

        case -1: tempText = "<del>" + temp1[x][1] + "<del/>"; break;
        case 0: tempText = temp1[x][1]; break;
        case 1: tempText = "<ins>" + temp1[x][1] + "<ins/>"; break;
      }
      html = html + tempText;
    }
    this.dataContainer.nativeElement.innerHTML = html;
  }

}

import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-sur-table',
  templateUrl: './sur-table.component.html',
  styles: [`
  .td-action .btn-info {
    margin-right: 10px;
  }`]
})
export class SurTableComponent implements OnInit {

  @Input() config = {
    columns: [],
    data: []
  };

  @Output() deleteRow = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  delete(id: string) {
    this.deleteRow.emit(id);
  }
}
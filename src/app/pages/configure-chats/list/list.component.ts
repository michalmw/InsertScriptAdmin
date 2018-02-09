import { Component, OnInit } from '@angular/core';
import { ConfigureChatsService } from '../configure-chats.service';
import { Gateway } from '../configure-chats.types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ConfigureChatsListComponent implements OnInit {

  tableConfig = {
    columns: [
      {
        column: 'Nazwa',
        name: 'name'
      }
    ],
    data: undefined
  };

  constructor(
    private configureChatsService: ConfigureChatsService
  ) { }

  ngOnInit() {
    this.configureChatsService.get().subscribe(
      (data: Gateway[]) => this.tableConfig.data = data
    );
  }

  delete(id: string) {
    const result = confirm('Czy napewno chcesz usunąć?');
    if (result) {
      this.configureChatsService.delete(id).subscribe(
        (res) => {
          this.tableConfig.data = this.tableConfig.data.filter(gateway => gateway._id !== id);
        }
      );
    }
  }

}

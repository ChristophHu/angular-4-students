import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  item_list: any = [
    { id: 1, name: 'Item 1', checked: false },
    { id: 2, name: 'Item 2', checked: false },
    { id: 3, name: 'Item 3', checked: false },
    { id: 4, name: 'Item 4', checked: false }
  ]

  delete(event: any) {
    console.log('delete(): ', event)
    this.item_list = this.item_list.filter((item: any) => item.id !== event)
  }
}

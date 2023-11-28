import { Component } from '@angular/core';

export const states = [
  'BACKLOG', 
  'IN_PROGRESS', 
  'TEST', 
  'COMPLETE'
];

export const stateGroups = [
  { label: 'Planung', states: ['BACKLOG'] },
  { label: 'Entwicklung', states: ['IN_PROGRESS', 'TEST'] },
  { label: 'In Produktion', states: ['COMPLETE'] }
];

export const stateTexts = {
  'BACKLOG': 'Backlog',
  'IN_PROGRESS': 'In Bearbeitung', 
  'TEST': 'Im Test', 
  'COMPLETE': 'Abgeschlossen'
};

@Component({
  selector: 'weitere',
  templateUrl: './weitere.component.html',
  styleUrls: ['./weitere.component.sass']
})

export class WeitereComponent {
  task: any | { state: string; }
  states = states
  stateGroups = stateGroups
  stateTexts = stateTexts
  
  constructor() {
    this.task = { 
      state: 'TEST'
    }
  }

  saveTask(value: any) {
    this.task = value;
  }
}

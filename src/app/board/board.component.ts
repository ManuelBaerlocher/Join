import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public todos = [{
    'id': 0,
    'title': 'Website redesign',
    'category': 'toDo',
    'tag': 'Design',
    'text': 'Modify the contents of the main website...',
    'stateNow': 1,
    'stateTotal': 4,
    'contacts': {
      'names': ['MB', 'MV', 'EF'],
      'colors': ['#fd2829', '#b88770', '#007bff']
    },
    'priority': 'low',


  },
  {
    'id': 1,
    'title': 'Call potential clients',
    'category': 'inProgress',
    'tag': 'Sales',
    'text': 'Make the product presen-tation to prospective buyers',
    'stateNow': 0,
    'stateTotal': 3,
    'contacts': {
      'names': ['MB', 'MV', 'EF', 'SO'],
      'colors': ['#fd2829', '#b88770', '#007bff', '#2dfcd7']
    },
    'priority': 'urgent',

  }
  ];

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.todos)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  public select = false

  public letters: string[] = []

  public contacts = [{
    'id': 0,
    'color': '#fd2829',
    'shortName': 'MB',
    'firstName': 'Manuel',
    'lastName': 'Bärlocher',
    'mail': 'manuell@bluewin.ch',
    'phone': '+41 79 836 03 16',
    'select': false
  },
  {
    'id': 1,
    'color': '#b88770',
    'shortName': 'OM',
    'firstName': 'Otto',
    'lastName': 'Meier',
    'mail': 'o.meier@bluewin.ch',
    'phone': '+41 79 836 12 12',
    'select': false
  },
  {
    'id': 2,
    'color': '#2d97eb',
    'shortName': 'EA',
    'firstName': 'Erich',
    'lastName': 'Anred',
    'mail': 'a.e@bluewin.ch',
    'phone': '+41 72 836 12 12',
    'select': false
  }]


  constructor() {

  }

  ngOnInit(): void {

    this.sortWithLastName()

  }

  sortWithLastName() {
    this.contacts = this.contacts.sort((a, b) => a.lastName > b.lastName ? 1 : -1)

    for (let i = 0; i < this.contacts.length; i++) {
      let initalLetter = this.contacts[i].lastName.charAt(0)

      this.letters.push(initalLetter);
    }
  }

  selectContact(id: number) {
    for (let i = 0; i < this.contacts.length; i++) {
      this.contacts[i].select = false
      if (this.contacts[i].id == id) {
        this.contacts[i].select = true
      }
    }
  }

}



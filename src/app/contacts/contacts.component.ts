import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  public select = false

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
    'color': '#f34d4e',
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
    console.log(this.contacts[0].shortName)
    let text = this.contacts[0].shortName;

    let test = this.contacts[0].shortName.charAt(1)
    console.log(test)
    // this.contacts = this.contacts.sort((a, b) => { } )

  // sortiertfunktion(a: any, b: any) {
  //   if (a.id < b.id) {
  //     return -1;
  //   }
}

  selectContact(id: number) {
    for (let i = 0; i < this.contacts.length; i++) {
      this.contacts[i].select = false
    }

    this.contacts[id].select = true
  }

}



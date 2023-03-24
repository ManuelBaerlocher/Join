import { Component, OnInit } from '@angular/core';
import { DialogAddContactComponent } from '../dialog-add-contact/dialog-add-contact.component';
import { Dialog } from '@angular/cdk/dialog';
import { Contact } from 'src/models/contact.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private _jsonURL = 'assets/allContacts.json';
  public select = false

  contact: Contact = new Contact();
  public contacts = [{
    'id': 0,
    'color': '#fd2829',
    'shortName': 'MB',
    'firstName': 'Manuel',
    'lastName': 'Bärlocher',
    'mail': 'manuell@bluewin.ch',
    'phone': '+41 79 836 03 16',
    'select': false
  }]


  public letters: string[] = []




  constructor(private dialog: Dialog, private http: HttpClient) {



    this.getJSON().subscribe((data: any) => {
      this.contacts = data
      this.sortWithLastName()
      console.log(this.contacts)
    })
  }


  ngOnInit(): void {




  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);

  }

  sortWithLastName() {
    this.contacts = this.contacts.sort((a, b) => a.lastName > b.lastName ? 1 : -1)

    for (let i = 0; i < this.contacts.length; i++) {
      let initalLetter = this.contacts[i].lastName.charAt(0)
      if (i >= 1) {
        if (initalLetter[i] == initalLetter[i - 1]) {
          this.letters.push(initalLetter);
        }
      } else {
        this.letters.push(initalLetter);
      }
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddContactComponent);

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }


  // openDialog(): void {

  //   const dialogRef = this.dialog.open(DialogAddContactComponent, {
  //     data: { }


  //   });

  //   // dialogRef.closed.subscribe(result => {
  //   //   console.log('The dialog was closed', this.contact);
  //   //   if (result) {
  //   //     console.log(this.contact)

  //   //   }
  //     // if (result) {
  //     //   this.contacts.push(result: {});
  //     // }
  //   // });


  // }

}

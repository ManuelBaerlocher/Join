import { Component, OnInit } from '@angular/core';
import { DialogAddContactComponent } from '../dialog-add-contact/dialog-add-contact.component';
import { Dialog } from '@angular/cdk/dialog';
import { Contact } from 'src/models/contact.class';
import { HttpClient } from '@angular/common/http';
import { first, Observable } from 'rxjs';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private _jsonURL = 'assets/allContacts.json';
  public select = false

  contact = new Contact();
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
    })
  }


  ngOnInit(): void {




  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);

  }

  sortWithLastName() {
    this.contacts = this.contacts.sort((a, b) => a.lastName > b.lastName ? 1 : -1)
    console.log(this.contacts.length);

    for (let i = 0; i < this.contacts.length; i++) {
      let initalLetter = this.contacts[i].lastName.charAt(0)

      if (!(initalLetter == this.letters.at(-1))) {
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
    const dialogRef = this.dialog.open(DialogAddContactComponent, {
      data: { Contact }
    })

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed', result);
      let testContact: any = result

      this.fillContact(testContact);

      this.contacts.push(this.contact)

      this.letters = [];
      this.sortWithLastName()

    });
  }

  fillContact(newContact: any) {
    this.contact = new Contact();
    let slice = newContact.firstName.indexOf(" ");
    let length = newContact.firstName.length;
    this.contact.lastName = newContact.firstName.slice(slice + 1, length);
    this.contact.firstName = newContact.firstName.slice(0, slice);
    this.contact.id = this.contacts.length;
    this.contact.shortName = this.setShortName()
    this.contact.color = this.setrandomColor();
    this.contact.mail = newContact.mail
    this.contact.phone = newContact.phone
  }

  setShortName() {
    let firstName = this.contact.firstName.charAt(0)
    let lastName = this.contact.lastName.charAt(0)
    return firstName.toUpperCase() + lastName.toUpperCase();
  }

  setrandomColor() {
    let randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
    return randomColor;
  }

}

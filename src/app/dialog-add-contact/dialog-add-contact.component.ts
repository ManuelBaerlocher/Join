
import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Contact } from 'src/models/contact.class';



@Component({
  selector: 'app-dialog-add-contact',
  templateUrl: './dialog-add-contact.component.html',
  styleUrls: ['./dialog-add-contact.component.scss']
})
export class DialogAddContactComponent {



  contact: Contact = new Contact();
  allContacts: any;
  contacts: any;



  constructor(public dialogRef: DialogRef<any>, @Inject(DIALOG_DATA) public data: Contact) {

  }

  onNoClick() {
    this.dialogRef.close();
    console.log('test')
  }

  saveContact(): void {
    // const contact = { name: 'Max', email: 'Mail' };
    console.log(this.contact.firstName)
    this.dialogRef.close(this.contact);
  }

  // saveContact(): void {
  //   // console.log('user', this.contact)
  //   // this.dialogRef.close(contact);
  //   // this.allContacts
  //   // console.log(this.allContacts)
  //     // .add(this.contact.toJSON())
  //     // .then((result: any) => {
  //     //   console.log('testManuel', result)
  //     // })
  // }


}



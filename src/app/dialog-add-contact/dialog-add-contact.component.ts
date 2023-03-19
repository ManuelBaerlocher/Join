
import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';


@Component({
  selector: 'app-dialog-add-contact',
  templateUrl: './dialog-add-contact.component.html',
  styleUrls: ['./dialog-add-contact.component.scss']
})
export class DialogAddContactComponent {
  public contact = {
    'name': '',
    'mail': '',
    'phone': '',
  }

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
    console.log('test')
  }

  onSaveClick(): void {
    // const contact = { name: 'Max', email: 'Mail' };
    // this.dialogRef.close(contact);
  }


}



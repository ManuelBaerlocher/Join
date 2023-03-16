
import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialog-add-contact',
  // templateUrl: './dialog-add-contact.component.html',
  styleUrls: ['./dialog-add-contact.component.scss'],
  template: `
  <h2 mat-dialog-title>Add Contact</h2>
  <div mat-dialog-content>
    <!-- Hier können Sie die Benutzeroberfläche für das Hinzufügen eines neuen Kontakts erstellen -->
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Cancel</button>
    <button mat-button (click)="onSaveClick()">Save</button>
  </div>
`
})
export class DialogAddContactComponent {

  name: string = '';
  email: string = '';

  constructor(
    public dialogRef: DialogRef<DialogAddContactComponent>,
    @Inject(DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    const contact = { name: this.name, email: this.email };
    // this.dialogRef.close(contact);
  }
}



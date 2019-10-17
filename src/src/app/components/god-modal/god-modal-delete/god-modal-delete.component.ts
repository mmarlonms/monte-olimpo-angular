import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { God } from '../../../models/god';

@Component({
    selector: 'god-modal-delete.component',
    templateUrl: 'god-modal-delete.component.html',
    styleUrls : ['god-modal-delete.component.css']
})
export class GodModalDelete {

    constructor(
        public dialogRef: MatDialogRef<GodModalDelete>,
        @Inject(MAT_DIALOG_DATA) public data: God) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
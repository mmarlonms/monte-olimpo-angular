import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { God } from '../../../models/god';

@Component({
    selector: 'god-modal-create-update.component',
    templateUrl: 'god-modal-create-update.component.html',
    styleUrls: ['god-modal-create-update.component.css']
})
export class GodModalCreateUpdate {

    constructor(
        public dialogRef: MatDialogRef<GodModalCreateUpdate>,
        @Inject(MAT_DIALOG_DATA) public data: God) {
            
    }

    onNoClick(): void {
        this.data;
        this.dialogRef.close();
    }
}
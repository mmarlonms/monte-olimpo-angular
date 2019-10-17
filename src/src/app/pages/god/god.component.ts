import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GodService } from '../../services/god-service.service';
import { God } from '../../models/god';
import { GodModalCreateUpdate } from 'src/app/components/god-modal/god-modal-create-update/god-modal-create-update.component';
import { GodModalDelete } from 'src/app/components/god-modal/god-modal-delete/god-modal-delete.component';

@Component({
    selector: 'app-god',
    templateUrl: './god.component.html',
    styleUrls: ['./god.component.css']
})
export class GodComponent implements OnInit {

    gods: God[];
    displayedColumns: string[] = ['id', 'nome', 'idade', 'acoes'];
    dataSource: MatTableDataSource<God>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private godService: GodService, public dialog: MatDialog) {
        this.getGods();
        this.dataSource = new MatTableDataSource(this.gods);

    }

    getGods(): void {
        this.godService.getAllGods()
            .subscribe(data => {
                this.gods = data;
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    openGodCrateUpdate(): void {
        const dialogRef = this.dialog.open(GodModalCreateUpdate, {
            width: '60%',
            data: { name: "TEste", animal: "TEste" }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    openGodDelete(id: number): void {
        const dialogRef = this.dialog.open(GodModalDelete, {
            width: '60%',
            data: this.gods.find( x => x.id == id)
        });

        dialogRef.afterClosed().subscribe(result => {
            debugger
            if (result != undefined && result) {
                console.log(`Dialog result: ${result}`);
        
                this.godService.deleteGod(id).subscribe(
                  p => {
                    this.getGods();
                  }
                );
              }
        });
    }
}


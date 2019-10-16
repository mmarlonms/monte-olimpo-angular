import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { GodService } from '../../services/god-service.service';
import { God } from '../../models/god';



@Component({
    selector: 'app-god',
    templateUrl: './god.component.html',
    styleUrls: ['./god.component.css']
})
export class GodComponent implements OnInit {

    gods: God[];
    displayedColumns: string[] = ['id', 'nome', 'idade','acoes'];
    dataSource: MatTableDataSource<God>;

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private godService: GodService) {
        this.getProdutos();
        this.dataSource = new MatTableDataSource(this.gods);
       
    }

    getProdutos(): void {
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
}


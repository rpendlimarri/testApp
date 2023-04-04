import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataDataSource, TableDataItem } from './table-data-datasource';

/**
 * This class is responsible for handling the table data
 */
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})

export class TableDataComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableDataItem>;
  dataSource: TableDataDataSource;

  // Columns displayed in the table. Columns IDs can be added, removed, or reordered.
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new TableDataDataSource();
  }
  /**
   * This method is responsible to update the table datasource values like sort, paginator, etc.
   */
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

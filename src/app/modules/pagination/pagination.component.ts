import { Component, Input, Output } from '@angular/core';
import { EventEmitter }  from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() pageSize: number = 1; // number of items per page
  @Input() totalItems: number = 1; // total number of items
  @Input() currentPage: number = 1; // current page number
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): number[] {
    const pages: number[] = [];
    const currentPage = this.currentPage;
    const totalPages = this.totalPages;

    let startPage: number, endPage: number;

    // display up to 10 pages at a time
    if (totalPages <= 10) {
      // less than 10 total pages, so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages, so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // create an array of pages to ngFor in the pager control
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
    this.currentPage = page;
  }

  next(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prev(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}

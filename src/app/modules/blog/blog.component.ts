import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

interface Post {
  id: number;
  topic: string;
  img: string;
  content: string;
  create_at: Date;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogPosts: Post[] = [];
  isStaff: boolean = false;
  currentPage = 1;
  itemsPerPage = 9;
  totalItems = 0;
  searchQuery: string = '';
  isLoading: boolean = false;
  isOpenModal: boolean = false;
  IdDelete?: number | null;
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) // private toastr: ToastrService
  {}

  ngOnInit() {
    const apiUrl = `${environment.apiUrl}/blog?page=${this.currentPage}&limit=${this.itemsPerPage}`;
    this.isLoading = true;
    this.http
      .get<{ data: Post[]; total: number }>(apiUrl)
      .subscribe(({ data, total }) => {
        this.blogPosts = data;
        this.totalItems = total;
        this.isLoading = false;
      });
    this.isStaff = this.authService.isStaff();
    console.log(this.isStaff);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    const apiUrl = `${environment.apiUrl}/blog?page=${this.currentPage}&limit=${this.itemsPerPage}`;
    this.isLoading = true;
    this.http
      .get<{ posts: Post[]; totalItems: number }>(apiUrl)
      .subscribe(({ posts, totalItems }) => {
        this.blogPosts = posts;
        this.totalItems = totalItems;
        this.isLoading = false;
      });
  }

  search() {
    const apiUrl = `${environment.apiUrl}/blog?page=${this.currentPage}&limit=${this.itemsPerPage}&search=${this.searchQuery}`;
    this.isLoading = true;
    this.http
      .get<{ posts: Post[]; totalItems: number }>(apiUrl)
      .subscribe(({ posts, totalItems }) => {
        this.blogPosts = posts;
        this.totalItems = totalItems;
        this.isLoading = false;
      });
  }

  deleteItem() {
    const apiUrl = `${environment.apiUrl}/blog/${this.IdDelete}`;
    this.http.delete(apiUrl).subscribe({
      next: (response) => {
        console.log('Item deleted successfully!');
        const apiUrl = `${environment.apiUrl}/blog?page=${this.currentPage}&limit=${this.itemsPerPage}`;
        this.isLoading = true;
        this.http
          .get<{ data: Post[]; total: number }>(apiUrl)
          .subscribe(({ data, total }) => {
            this.blogPosts = data;
            this.totalItems = total;
            this.isLoading = false;
          });
        // this.toastr.success('Item deleted successfully!', 'Success', {
        //   positionClass: 'toast-top-right',
        //   progressBar: true,
        //   closeButton: true,
        //   timeOut: 3000,
        //   extendedTimeOut: 1000,
        //   tapToDismiss: false,
        //   toastClass: 'bg-green-500 text-white',
        //   titleClass: 'font-bold',
        //   messageClass: 'font-medium'
        // });
        this.closeModal();
      },
      error: (err) => {
        // this.toastr.error('Error deleting item', 'Error', {
        //   positionClass: 'toast-top-right',
        //   progressBar: true,
        //   closeButton: true,
        //   timeOut: 3000,
        //   extendedTimeOut: 1000,
        //   tapToDismiss: false,
        //   toastClass: 'bg-red-500 text-white',
        //   titleClass: 'font-bold',
        //   messageClass: 'font-medium'
        // });
        console.error('Error deleting item:', err);
      },
      complete: () => {
        console.log('Delete request completed');
      },
    });
  }

  openModal(id: number) {
    this.isOpenModal = true;
    this.IdDelete = id;
  }

  closeModal() {
    this.isOpenModal = false;
    this.IdDelete = null;
  }
}

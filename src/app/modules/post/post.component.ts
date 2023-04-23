import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  id: number = 0;
  content?: any = '';
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
    }
    const apiUrl = `${environment.apiUrl}/blog/${this.id}`;
    this.http.get(apiUrl).subscribe({
      next: (response: any) => {
        this.content = response.content;
        this.isLoading = false;
        console.log(this.content);
      },
      error: (error: any) => {
        this.router.navigateByUrl('/404');
        console.error('error', error);
      },
    });
  }
}

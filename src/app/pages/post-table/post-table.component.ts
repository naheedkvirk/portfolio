import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { PostService, Post } from '../../services/post.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
 selector: 'app-post-table',
 standalone: true,
 imports: [
   CommonModule,
   MatTableModule,
   MatCardModule,
   MatPaginatorModule,
   MatSortModule,
   MatFormFieldModule,
   MatInputModule,
 ],
 templateUrl: './post-table.component.html',
 styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent implements AfterViewInit {
 displayedColumns: string[] = ['id', 'title', 'body'];
 dataSource = new MatTableDataSource<Post>();

 @ViewChild('paginatorTop') paginatorTop!: MatPaginator;
 @ViewChild('paginatorBottom') paginatorBottom!: MatPaginator;

 @ViewChild(MatSort) sort!: MatSort;

 constructor(private postService: PostService) {}

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginatorTop;
   this.dataSource.sort = this.sort;


   this.postService.getPosts().subscribe((data: Post[]) => {
     this.dataSource.data = data;
   });

   // Sync paginatorBottom → paginatorTop (only this direction controls data)
   this.paginatorBottom.page.subscribe(() => {
     this.paginatorTop.pageIndex = this.paginatorBottom.pageIndex;
     this.paginatorTop.pageSize = this.paginatorBottom.pageSize;
     this.paginatorTop._changePageSize(this.paginatorBottom.pageSize); // ⚠️ Trigger internal refresh
   });
    // Sync paginatorTop → paginatorBottom for visual consistency
   this.paginatorTop.page.subscribe(() => {
     this.paginatorBottom.pageIndex = this.paginatorTop.pageIndex;
     this.paginatorBottom.pageSize = this.paginatorTop.pageSize;
     this.paginatorBottom.length = this.paginatorTop.length;
   }); 

 }

}

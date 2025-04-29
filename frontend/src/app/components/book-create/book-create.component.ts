import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html'
})
export class BookCreateComponent {

  book: Book = {
    id: 0,
    title: '',
    author: '',
    genre: '',
    publishedYear: new Date().getFullYear()
  };

  constructor(private bookService: BookService, private router: Router) {}

  saveBook() {
    this.bookService.createBook(this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

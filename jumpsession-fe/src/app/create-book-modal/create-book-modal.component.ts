import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../Models/book';
import { BooksService } from '../Services/books.service';

@Component({
  selector: 'app-create-book-modal',
  templateUrl: './create-book-modal.component.html',
  styleUrls: ['./create-book-modal.component.css']
})
export class CreateBookModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() bookCreated = new EventEmitter<Book>();

 book: Book = {
    id: 0,
    book_name: '',
    isbn_number: '',
    author: ''
 }

  constructor(private bookService: BooksService) { }

  saveBook() {
    this.bookService.createBook(this.book).subscribe(
      (createdBook: Book) => {
        console.log('Book created successfully:', createdBook);
        this.bookCreated.emit(createdBook); // Emit the userCreated event
        this.closeModal();
      },
      error => {
        console.error('Error creating user:', error);
      }
    );
  }
  closeModal() {
    this.close.emit();
  }
}

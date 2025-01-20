package com.libraryapp.controller;

import com.libraryapp.model.Book;
import com.libraryapp.service.BookService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookService.getAllBooks();
    }
}

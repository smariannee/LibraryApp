package com.libraryapp.controller;

import com.libraryapp.kernel.CustomResponse;
import com.libraryapp.kernel.PaginatedResponse;
import com.libraryapp.kernel.PaginationDto;
import com.libraryapp.model.Book;
import com.libraryapp.model.dto.BookDetailsDto;
import com.libraryapp.service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {
    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping("/books/pagination")
    public ResponseEntity<CustomResponse<?>> getBooks(@RequestBody PaginationDto dto) {
        CustomResponse<PaginatedResponse<Book>> response = bookService.getAllBooks(dto);
        return new ResponseEntity<>(response, response.getStatus());
    }

    @PostMapping("/books/details")
    public ResponseEntity<CustomResponse<?>> getBookById(@RequestBody BookDetailsDto dto) {
        CustomResponse<Book> response = bookService.getBookById(dto.getId());
        return new ResponseEntity<>(response, response.getStatus());
    }

    @PostMapping("/books")
    public ResponseEntity<CustomResponse<?>> saveBook(@RequestBody Book book) {
        CustomResponse<?> response = bookService.saveBook(book);
        return new ResponseEntity<>(response, response.getStatus());
    }

    @PutMapping("/books")
    public ResponseEntity<CustomResponse<?>> updateBook(@RequestBody Book book) {
        CustomResponse<?> response = bookService.updateBook(book);
        return new ResponseEntity<>(response, response.getStatus());
    }
}

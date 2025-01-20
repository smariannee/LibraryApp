package com.libraryapp.service;

import com.libraryapp.kernel.CustomResponse;
import com.libraryapp.kernel.PaginatedResponse;
import com.libraryapp.kernel.PaginationDto;
import com.libraryapp.mapper.BookMapper;
import com.libraryapp.model.Book;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private final BookMapper bookMapper;

    public BookService(BookMapper bookMapper) {
        this.bookMapper = bookMapper;
    }

    public CustomResponse<PaginatedResponse<Book>> getAllBooks(PaginationDto dto) {
        List<Book> books = bookMapper.findAll(dto.getSearchValue(), dto.getOffset(), dto.getSize());
        int totalBooks = bookMapper.count();

        PaginatedResponse<Book> paginatedResponse = new PaginatedResponse<>(
                books, totalBooks, dto.getPage(), dto.getSize()
        );

        return new CustomResponse<>(paginatedResponse, HttpStatus.OK);
    }

    public CustomResponse<Book> getBookById(Long id) {
        Optional<Book> book = bookMapper.findById(id);
        if (book.isEmpty())
            return new CustomResponse<>(HttpStatus.NOT_FOUND, "Book not found");
        return new CustomResponse<>(book.get(), HttpStatus.OK);
    }

    public CustomResponse<?> saveBook(Book book) {
        try {
            if (bookMapper.existsByTitle(book.getTitle()))
                return new CustomResponse<>(HttpStatus.CONFLICT, "Book already exists");
            bookMapper.save(book);
            return new CustomResponse<>(HttpStatus.CREATED);
        } catch (Exception e) {
            return new CustomResponse<>(HttpStatus.INTERNAL_SERVER_ERROR, true, e.getMessage());
        }
    }

    public CustomResponse<?> updateBook(Book book) {
        try {
            Optional<Book> optionalBook = bookMapper.findById(book.getId());
            if (optionalBook.isEmpty())
                return new CustomResponse<>(HttpStatus.NOT_FOUND, "Book not found");
            if (bookMapper.existsByTitleAndDifferentId(book.getTitle(), book.getId()))
                return new CustomResponse<>(HttpStatus.CONFLICT, "Book already exists");
            bookMapper.update(book);
            return new CustomResponse<>(HttpStatus.OK);
        } catch (Exception e) {
            return new CustomResponse<>(HttpStatus.INTERNAL_SERVER_ERROR, true, e.getMessage());
        }
    }
}

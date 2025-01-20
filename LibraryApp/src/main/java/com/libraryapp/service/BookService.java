package com.libraryapp.service;

import com.libraryapp.mapper.BookMapper;
import com.libraryapp.model.Book;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookService {
    private final BookMapper bookMapper;

    public BookService(BookMapper bookMapper) {
        this.bookMapper = bookMapper;
    }

    public List<Book> getAllBooks() {
        return bookMapper.findAllDirect();
    }
}

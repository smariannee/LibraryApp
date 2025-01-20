package com.libraryapp.mapper;

import com.libraryapp.model.Book;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface BookMapper {
    List<Book> findAll();

    @Select("SELECT * FROM BOOKS")
    List<Book> findAllDirect();

}
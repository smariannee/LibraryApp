package com.libraryapp.mapper;

import com.libraryapp.model.Book;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Optional;

@Mapper
public interface BookMapper {
    @Select("SELECT COUNT(1) FROM BOOKS")
    int count();

    List<Book> findAll(@Param("title") String title, @Param("offset") int offset, @Param("limit") int limit);

    @Select("SELECT CASE WHEN EXISTS (SELECT 1 FROM BOOKS WHERE TITLE = #{title}) THEN 1 ELSE 0 END FROM DUAL")
    boolean existsByTitle(String title);

    @Select("SELECT CASE WHEN EXISTS (SELECT 1 FROM BOOKS WHERE TITLE = #{title} AND ID != #{id}) THEN 1 ELSE 0 END FROM DUAL")
    boolean existsByTitleAndDifferentId(String title, long id);

    @Select("SELECT * FROM BOOKS WHERE ID = #{id}")
    Optional<Book> findById(long id);

    @Insert("INSERT INTO BOOKS (TITLE, AUTHOR, YEAR, QUANTITY, AVAILABLE, IMAGE, DESCRIPTION, PAGES) " +
            "VALUES (#{title}, #{author}, #{year}, #{quantity}, #{available}, #{image}, #{description}, #{pages})")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "ID")
    void save(Book book);

    @Update("UPDATE BOOKS SET TITLE = #{title}, AUTHOR = #{author}, YEAR = #{year}, QUANTITY = #{quantity}, " +
            "IMAGE = #{image}, DESCRIPTION = #{description}, PAGES = #{pages} WHERE ID = #{id}")
    void update(Book book);
}
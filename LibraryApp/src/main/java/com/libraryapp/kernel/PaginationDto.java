package com.libraryapp.kernel;

public class PaginationDto {
    private String searchValue;
    private int page;
    private int size;

    public String getSearchValue() { return searchValue; }
    public void setSearchValue(String searchValue) { this.searchValue = searchValue; }

    public int getPage() { return page; }
    public void setPage(int page) { this.page = page; }

    public int getSize() { return size; }
    public void setSize(int size) { this.size = size; }

    public int getOffset() { return (page - 1) * size; }
}

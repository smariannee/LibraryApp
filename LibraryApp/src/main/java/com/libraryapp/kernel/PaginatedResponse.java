package com.libraryapp.kernel;

import java.util.List;

public class PaginatedResponse<T> {
    private List<T> items;
    private Pagination pagination;

    public PaginatedResponse(List<T> items, int totalItems, int currentPage, int pageSize) {
        this.items = items;
        this.pagination = new Pagination(totalItems, currentPage, pageSize);
    }

    public List<T> getItems() { return items; }

    public void setItems(List<T> items) { this.items = items; }

    public Pagination getPagination() { return pagination; }

    public void setPagination(Pagination pagination) { this.pagination = pagination; }

    public static class Pagination {
        private int totalItems;
        private int currentPage;
        private int totalPages;

        public Pagination(int totalItems, int currentPage, int pageSize) {
            this.totalItems = totalItems;
            this.currentPage = currentPage;
            this.totalPages = (int) Math.ceil((double) totalItems / pageSize);
        }

        public int getTotalItems() { return totalItems; }

        public int getCurrentPage() { return currentPage; }

        public int getTotalPages() { return totalPages; }
    }
}

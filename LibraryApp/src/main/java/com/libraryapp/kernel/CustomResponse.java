package com.libraryapp.kernel;

import org.springframework.http.HttpStatus;

public class CustomResponse<T> {
    private T data;
    private HttpStatus status;
    private boolean error;
    private String message;

    public CustomResponse(T data, HttpStatus status) {
        this.data = data;
        this.status = status;
        this.error = false;
    }

    public CustomResponse(HttpStatus status, boolean error, String message) {
        this.status = status;
        this.error = error;
        this.message = message;
    }

    public CustomResponse(HttpStatus status, String message) {
        this.status = status;
        this.error = true;
        this.message = message;
    }

    public CustomResponse(HttpStatus status) {
        this.status = status;
    }

    public T getData() { return data; }

    public void setData(T data) { this.data = data; }

    public HttpStatus getStatus() { return status; }

    public void setStatus(HttpStatus status) { this.status = status; }

    public boolean isError() { return error; }

    public void setError(boolean error) { this.error = error; }

    public String getMessage() { return message; }

    public void setMessage(String message) { this.message = message; }
}
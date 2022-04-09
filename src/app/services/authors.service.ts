import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get('http://localhost:3000/authors/all');
    }

    addAuthor(authorName: string) {
        return this.http.post('http://localhost:3000/authors/add', { name: authorName });
    }

    editAuthor(authorName: string, id: number) {
        return this.http.put(`http://localhost:3000/authors/${id}`, { name: authorName });
    }

    deleteAuthor(id: number) {
        return this.http.delete(`http://localhost:3000/authors/${id}`);
    }
}

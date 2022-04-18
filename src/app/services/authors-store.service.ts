import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Author } from '../models/author.model';
import { AuthorsService } from './authors.service';

@Injectable()
export class AuthorsStoreService {
    constructor(http: HttpClient, private authorsService: AuthorsService) {
        this.authorsService = new AuthorsService(http);
    }
    private authors$$ = new BehaviorSubject<Observable<Author[]>>(this.getAll());
    private loading$$ = new BehaviorSubject<boolean>(false);

    set authors$(value: Observable<Author[]>) {
        this.authors$$.next(value);
    }
    get authors$() {
        return this.authors$$.getValue();
    }

    get loading$() {
        return this.loading$$.asObservable();
    }

    getAll(): Observable<Author[]> {
        return this.authorsService.getAll().pipe(
            tap(() => {
                this.loading$$.next(true);
            }),
            map((data: any) => {
                return data.result.map(function (author: any): Author {
                    return new Author(author.name, author.id);
                });
            }),
        );
    }

    getAuthorsNameByIds(ids: string[], allAuths: Author[]): string[] {
        let auths: string[] = [];
        ids.forEach((id) => {
            let currentAuth = allAuths.find((a) => a.id == id);
            if (currentAuth) {
                auths.push(currentAuth.name);
            }
        });
        return auths;
    }
    getAuthorsByIds(ids: string[], allAuths: Author[]): Author[] {
        let auths: Author[] = [];
        ids.forEach((id) => {
            let currentAuth = allAuths.find((a) => a.id == id);
            if (currentAuth) {
                auths.push(currentAuth);
            }
        });
        return auths;
    }
    add(name: string) {
        this.authorsService
            .addAuthor(name)
            .pipe(
                tap(() => {
                    this.authors$ = this.getAll();
                }),
            )
            .subscribe();
    }
}

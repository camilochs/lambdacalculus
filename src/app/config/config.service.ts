import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

    configUrl = 'http://localhost:8081/api/v1/lc';

    getResults(q: string): Observable<Array<string>>  {
        return this.http.get<Array<string>>(this.configUrl, { params: { query : q} }).pipe(
            map((res: Array<string>) => res)
         );
    }
}
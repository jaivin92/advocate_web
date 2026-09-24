import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    protected readonly http = inject(HttpClient);
    protected apiBaseUrl: string;
    constructor() {
        this.apiBaseUrl = environment.apiBaseUrl;
    }
}

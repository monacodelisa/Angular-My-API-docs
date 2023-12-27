import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../models/user";
import { Observable, map } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	private apiUrl =
		"https://monacodelisa-node-express.onrender.com/api";

	constructor(private http: HttpClient) {}

	getUsers(): Observable<User[]> {
		return this.http
			.get<User[]>(`${this.apiUrl}/users`)
			.pipe(map((data) => data));
	}
}

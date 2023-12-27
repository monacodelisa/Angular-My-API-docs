import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { User } from "../models/user";
import { Job } from "../models/job";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	private apiUrl =
		"https://monacodelisa-node-express.onrender.com/api";

	constructor(private http: HttpClient) {}

	getUsers(): Observable<User[]> {
		return this.http
			.get<User[]>(`${this.apiUrl}/users`);
	}

	getJobs(): Observable<Job[]> {
		return this.http
			.get<Job[]>(`${this.apiUrl}/jobs`);
	}
}

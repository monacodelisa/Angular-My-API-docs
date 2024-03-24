import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../models/user";
import { Job } from "../models/job";
import { Dev } from "../models/dev";
import { Product } from "../models/product";
import { Location } from "../models/location";
import { Movie } from "../models/movie";

@Injectable({
	providedIn: "root",
})
export class ApiService {
	// private apiUrl =
	// 	"https://monacodelisa-node-express.onrender.com/api";
	private apiUrl =
		"https://monacodelisa-node-express.cyclic.app/api";

	constructor(private http: HttpClient) {}

	getUsers(): Observable<User[]> {
		return this.http
			.get<User[]>(`${this.apiUrl}/users`);
	}

	getJobs(): Observable<Job[]> {
		return this.http
			.get<Job[]>(`${this.apiUrl}/jobs`);
	}

	getDevs(): Observable<Dev[]> {
		return this.http
			.get<Dev[]>(`${this.apiUrl}/devs`);
	}

	getProducts(): Observable<Product[]> {
		return this.http
			.get<Product[]>(`${this.apiUrl}/products`);
	}

	getLocations(): Observable<Location[]> {
		return this.http
			.get<Location[]>(`${this.apiUrl}/locations`);
	}

	getMovies(): Observable<Movie[]> {
		return this.http
			.get<Movie[]>(`${this.apiUrl}/movies`);
	}
}

import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class CopyEndpointUrlService {
	copyText(): void {
		const urlElement = document.querySelector(".url") as HTMLParagraphElement;
		const copiedMessageElement = document.querySelector(
			".copied-message"
		) as HTMLParagraphElement;
		if (urlElement && copiedMessageElement) {
			const urlText = urlElement.innerText;
			navigator.clipboard
				.writeText(urlText)
				.then(() => {
					copiedMessageElement.classList.add("show");
					setTimeout(() => {
						copiedMessageElement.classList.remove("show");
					}, 1500);
				})
				.catch((err) => {
					console.error("Error copying text:", err);
				});
		}
	}
}

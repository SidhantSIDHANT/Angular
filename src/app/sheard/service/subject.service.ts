import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";



@Injectable({
    providedIn: "root",
})
export class SubjectService {
    isNavigate: Subject<boolean> = new Subject<boolean>();

    sendToSubscriber(value: boolean): void {
        return this.isNavigate.next(value);
    }

    getSubscriber(): Observable<boolean> {
        return this.isNavigate.asObservable();
    }
}
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, of } from "rxjs";
import { DateRange } from "../model/dateRange";
import { Objective } from "../model/objective";
import { Person } from "../model/person";
import { Privacy } from "../model/privacy";

var persons: Person[] =
    [
        new Person('Madison Stonebridge', 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200', 'Department', 'position'),
        new Person('Ava Rosewood', 'https://www.shutterstock.com/image-photo/portrait-young-smiling-woman-looking-260nw-1865153395.jpg', 'Department', 'position'),
        new Person('Ethan Wilder', 'https://www.shutterstock.com/image-photo/image-young-beautiful-joyful-woman-260nw-1786572482.jpg', 'Department', 'position'),
        new Person('Owen Riverstone', 'https://thumbs.dreamstime.com/b/young-woman-work-office-using-computer-graphic-tablet-photo-concentrated-looking-aside-94685208.jpg', 'Department', 'position'),
        new Person('Isabella Forest', 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', 'Department', 'position'),
        new Person('Lucas Greenfield', 'https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg', 'Department', 'position')
    ];
var objectives: Objective[] = [
    new Objective('ghytuy', new DateRange(new Date(2022, 11, 31), new Date(2022, 11, 31)), persons[0], Privacy.Personal)
];

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === "GET" && request.url === 'https://localhost:7071/api/person')
            return of(new HttpResponse({ status: 200, body: persons }));
        if (request.method === "GET" && request.url === 'https://localhost:7071/api/objective')
            return of(new HttpResponse({ status: 200, body: objectives }));
        if (request.method === "POST" && request.url === 'https://localhost:7071/api/objective') {
            var objective: Objective = JSON.parse(request.body);
            objectives.push(objective);
            return of(new HttpResponse({ status: 200, body: objectives }));
        }
        return of(new HttpResponse({ status: 200, body: [] }));
        //next.handle(request)
    }
}
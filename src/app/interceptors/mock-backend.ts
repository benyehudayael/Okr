import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, of } from "rxjs";
import { DateRange } from "../model/dateRange";
import { Department } from "../model/department";
import { Objective } from "../model/objective";
import { Person } from "../model/person";
import { Privacy } from "../model/privacy";

var departments: Department[] = [
    { id: 0, title: 'Finance' },
    { id: 1, title: 'Security' },
    { id: 2, title: 'HR' },
    { id: 3, title: 'IT' },
    { id: 4, title: 'R&D' }
]
var persons: Person[] =
    [
        new Person('Madison Stonebridge', 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200', departments[0].id, 'position'),
        new Person('Ava Rosewood', 'https://www.shutterstock.com/image-photo/portrait-young-smiling-woman-looking-260nw-1865153395.jpg', departments[1].id, 'position'),
        new Person('Ethan Wilder', 'https://www.shutterstock.com/image-photo/image-young-beautiful-joyful-woman-260nw-1786572482.jpg', departments[2].id, 'position'),
        new Person('Owen Riverstone', 'https://thumbs.dreamstime.com/b/young-woman-work-office-using-computer-graphic-tablet-photo-concentrated-looking-aside-94685208.jpg', departments[0].id, 'position'),
        new Person('Isabella Forest', 'https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg', departments[3].id, 'position'),
        new Person('Lucas Greenfield', 'https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg', departments[4].id, 'position')
    ];
var objectives: Objective[] = [
    new Objective('objective 1', new DateRange(new Date(2000, 11, 31), new Date(2024, 11, 31)), persons[0], Privacy.Personal),
    new Objective('objective 2', new DateRange(new Date(2022, 11, 31), new Date(2023, 11, 31)), persons[0], Privacy.Personal),
    new Objective('objective 3', new DateRange(new Date(2015, 11, 31), new Date(2024, 11, 31)), persons[0], Privacy.Personal),
    new Objective('objective 4', new DateRange(new Date(2008, 11, 31), new Date(2024, 11, 31)), persons[0], Privacy.Personal)
];

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === "GET" && request.url === 'https://localhost:7071/api/person')
            return of(new HttpResponse({ status: 200, body: persons }));
        if (request.method === "GET" && request.url === 'https://localhost:7071/api/department')
            return of(new HttpResponse({ status: 200, body: departments }));
        if (request.method === "GET" && request.url === 'https://localhost:7071/api/objective') {
            var depId = Number(request.params.get('departmentId'));
            var date = new Date(request.params.get('date'));
            var data = objectives.filter(x => x.assignee.departmentId == depId && x.dateRange.endDate >= date && x.dateRange.startDate <= date)
            return of(new HttpResponse({ status: 200, body: data }));
        }
        if (request.method === "POST" && request.url === 'https://localhost:7071/api/objective') {
            var objective: Objective = request.body;
            objectives.push(objective);
            return of(new HttpResponse({ status: 200, body: {} }));
        }
        return of(new HttpResponse({ status: 200, body: [] }));
        //next.handle(request)
    }
}
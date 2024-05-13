import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }

  nextStep:Subject<any> = new Subject<any>();
  public recieveNextStep():Observable<any> {
    return this.nextStep.asObservable();
  }

  public goToNextStep(nextStep:any) {
    this.nextStep.next(nextStep);
  }

}

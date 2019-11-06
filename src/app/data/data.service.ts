import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private htpp:HttpClient) { }
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
  postUserSettingsForm(UserSettings: UserSettings) :Observable<any>{
    return this.htpp.post('https://putsreq.com/0kaHDWoUVMtbDLdEqoEc', UserSettings) 
    // return of(UserSettings);
  }
}

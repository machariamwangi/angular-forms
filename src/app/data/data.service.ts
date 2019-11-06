import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private htpp:HttpClient) { }
  postUserSettingsForm(UserSettings: UserSettings) :Observable<any>{
    return this.htpp.post('url', UserSettings) 
    // return of(UserSettings);
  }
}

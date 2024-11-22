import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environement';
import { weatherData } from '../models/weathermodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getweatherData(cityName:string):Observable<weatherData>{
   return this.http.get<weatherData>(environment.weatherapiBaseUrl,{
      headers:new HttpHeaders()
      .set(environment.xrapidapihostHeaderName,environment.xrapidapihostHeaderValue)
      .set(environment.xrapidapikeyHostName,environment.xrapidapikeyHostValue),
      params:new HttpParams()
      .set('city',cityName)

    })

  }
}

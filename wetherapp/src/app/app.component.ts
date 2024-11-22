import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weathermodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'wetherapp';
  weatherData!:weatherData
  cityName:string='wellington'
constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName='';
   
    
  }
  onSubmit(){
    this.getWeatherData(this.cityName)
    this.cityName='';

  }

  private getWeatherData(cityName:string){
    this.weatherService.getweatherData(cityName)
    .subscribe({
      next:(response)=>{
        console.log('response',response)
        this.weatherData=response
      },
      error:(Error)=>{
        console.log('Error',Error)
      }
    })

  }
}

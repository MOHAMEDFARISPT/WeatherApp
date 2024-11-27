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
  convertedTemp!: number;
  convertedTempMin!: number;
  convertedTempMax!: number;
  isLoading:boolean=false;
constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName='';
   
    
  }
  onSubmit(){
    this.isLoading=true
    this.getWeatherData(this.cityName)
    this.cityName='';

  }

  private getWeatherData(cityName:string){
    this.weatherService.getweatherData(cityName)
    .subscribe({
      next:(response)=>{
        this.isLoading=false
        console.log('response',response)
        this.weatherData=response
        this.convertedTemp = this.weatherData.main.temp - 273.15;
        this.convertedTempMin = this.weatherData.main.temp_min - 273.15;
        this.convertedTempMax = this.weatherData.main.temp_max - 273.15;
      },
      error:(Error)=>{
        this.isLoading=false
        console.log('Error',Error)
      }
    })

  }
}

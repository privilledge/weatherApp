let weather={
    apiKey:"ead8e52b705a073313b2889ef6859fbf",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +"&units=metric&appid="+this.apiKey
            ).then((response)=>response.json())
            .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
const {name}=data;
const{description}=data.weather[0];
const{temp,humidity}=data.main;
const{speed}=data.wind;

document.querySelector(".city").innerHTML="Weather in "+name;
document.querySelector(".temp").innerHTML=temp+"°C";
document.querySelector(".description").innerHTML=description;
document.querySelector(".humidity").innerHTML="Humidity is "+humidity+"%";
document.querySelector(".wind").innerHTML="Windspeed is "+speed+"km/h";
document.querySelector(".weather").classList.remove("loading");
    },
    search:function(){

this.fetchWeather(document.querySelector(".search-bar").value);
    }
}; 
document.querySelector(".button").addEventListener("click",function(){
    weather.search();
}
   
)
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
 
}
)
weather.fetchWeather("Harare");
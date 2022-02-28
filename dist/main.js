(()=>{"use strict";function e(e,t){const n=Math.round(10*e)/10;p.textContent=`${n}F`,s.textContent=t}function t(e,t){const n=Math.round(10*e)/10;p.textContent=`${n}C`,s.textContent=t}const n=document.getElementById("display-current-conditions");function a(e,t,a,o,i,c,d){n.textContent="";const m=document.createElement("div");m.textContent="Feels like: "+Math.round(10*e)/10,n.appendChild(m);const p=document.createElement("div");p.textContent=`Humidity: ${t}%`,n.appendChild(p);const r=document.createElement("div"),s=new Date(1e3*a);r.textContent=s.getHours()+":"+s.getMinutes(),n.appendChild(r);const l=document.createElement("div"),u=new Date(1e3*o);l.textContent=u.getHours()+":"+u.getMinutes(),n.appendChild(l);const h=document.createElement("div");h.textContent=i,n.appendChild(h);const f=document.createElement("img");f.src=c,n.appendChild(f);const y=document.createElement("div");y.textContent=d,n.appendChild(y)}const o=document.getElementById("display-forecast");function i(e,t,n,a){const i=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),m=document.createElement("img");i.textContent=e,d.textContent=t,c.textContent=n,m.src=a,c.className="forecast-card",c.appendChild(i),c.appendChild(d),c.appendChild(m),o.appendChild(c)}const c=document.getElementById("display-forecast"),d=document.getElementById("week-header");function m(e){d.textContent="The Week Ahead",fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${r.value},us&units=${e}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${t.city.coord.lat}&lon=${t.city.coord.lon}&units=${e}&exclude=hourly,minutely&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){let n=[],a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];for(let e=0;e<t.daily.length-1;e++)n.push(t.daily[e]);const o=n.map((t=>"imperial"==e?Math.round(10*t.temp.max)/10+"F":Math.round(10*t.temp.max)/10+"C")),c=n.map((t=>"imperial"==e?Math.round(10*t.temp.min)/10+"F":Math.round(10*t.temp.min)/10+"C")),d=n.map((e=>{let t=new Date(1e3*e.dt);return a[t.getDay()]})),m=n.map((e=>`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`));for(let e=0;e<o.length;e++)i(o[e],c[e],d[e],m[e])}))}))}const p=document.getElementById("display-temp"),r=(document.getElementById("submit-btn"),document.getElementById("city-input")),s=document.getElementById("display-city-name"),l=document.getElementById("display-hourly");async function u(n){const o=r.value;isNaN(o)?(c.textContent="",l.textContent="",async function(n){const o=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${r.value}&units=${n}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).catch((function(e){console.log(e)})),i=await o.json();"imperial"==n?(e(i.main.temp,i.name),a(i.main.feels_like,i.main.humidity,i.sys.sunrise,i.sys.sunset,i.weather[0].description,`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`,i.wind.speed)):(t(i.main.temp,i.name),a(i.main.feels_like,i.main.humidity,i.sys.sunrise,i.sys.sunset,i.weather[0].description,`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`,i.wind.speed))}(n)):isNaN(o)||(c.textContent="",l.textContent="",async function(n){const o=await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${r.value},us&units=${n}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).catch((function(e){console.log(e)})),i=await o.json();"imperial"==n?(e(i.main.temp,i.name),a(i.main.feels_like,i.main.humidity,i.sys.sunrise,i.sys.sunset,i.weather[0].description,`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`,i.wind.speed),console.log(i)):(t(i.main.temp,i.name),a(i.main.feels_like,i.main.humidity,i.sys.sunrise,i.sys.sunset,i.weather[0].description,`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`,i.wind.speed))}(n))}const h=document.getElementById("display-hourly");function f(e,t,n){const a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("img");a.textContent=e,o.textContent=t,i.src=n,a.appendChild(o),h.appendChild(a),a.appendChild(i),h.className="hourly-card"}function y(e){fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${r.value},us&units=${e}&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${t.city.coord.lat}&lon=${t.city.coord.lon}&units=${e}&exclude=daily,minutely&appid=f4c2e88d89f530a5c961cffa302dc0b9`,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){let n=[];for(let e=0;e<t.hourly.length-36;e++)n.push(t.hourly[e]);const a=n.map((t=>"imperial"==e?Math.round(10*t.temp)/10+"F":Math.round(10*t.temp)/10+"C")),o=n.map((e=>{let t=new Date(1e3*e.dt),n=t.getHours(),a=t.getMinutes();return`${n}:${a}${a}`})),i=n.map((e=>`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`));for(let e=0;e<a.length;e++)f(o[e],a[e],i[e])}))}))}document.getElementById("display-hourly");const g=document.getElementById("submit-btn"),w=document.getElementById("city-input"),C=document.getElementById("change-to-C"),E=document.getElementById("change-to-F");C.addEventListener("click",(()=>{u("metric"),m("metric"),y("metric")})),E.addEventListener("click",(()=>{u("imperial"),m("imperial"),y("imperial"),console.log("hi")})),g.addEventListener("click",(()=>{u("imperial"),m("imperial"),y("imperial")})),w.addEventListener("keypress",(e=>{"Enter"===e.key&&(u("imperial"),m("imperial"),y("imperial"))}))})();
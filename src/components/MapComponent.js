import React, { Component } from 'react';
import L from 'leaflet';
import Img from '../img/cricket_2.jpg';

export default class MapComponent extends Component {

    componentDidMount(){

        let mymap = this.map = L.map('mapid').setView([51.505, -0.09], 2.4);

        mymap.options.minZoom = 2.5;

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 10,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoibGFrc2h5YWppdDE2NSIsImEiOiJjanI3cHB0NWUwM2lhNDNueXN4Z2ZmbGVuIn0.J0XAVKBI7sNHBlmP51oZkA'
        }).addTo(mymap);

        let markers = {
           1: { 
               coords: [51.5,-0.09],
               hosts: "England",
	       event: "Prudential Cup '75",	
               year: "<h6>1975</h6>",
               winner: "West Indies(291-8)",
               rup: "Australia(274)",
	       result: "West Indies Won by 17 runs (Lord's)",
	       most_runs: "Glenn Turner(333, NZ)",
	       most_wickets: "Gary Gilmour(11, AUS)",
           det: "https://en.wikipedia.org/wiki/1975_Cricket_World_Cup"		
	       		
           },

           2: { 
               coords: [52.9369,1.1321],
               hosts: "England",
	       event: "Prudential Cup '79",	
               year: "<h6>1979</h6>",
               winner: "West Indies(286-9)",
               rup: "England(194)",
	       result: "West Indies Won by 92 runs (Lord's)",
	       most_runs: "Gordon Greenidge (253, WI)",
	       most_wickets: "Mike Hendrick (10, ENG)",
           det:"https://en.wikipedia.org/wiki/1979_Cricket_World_Cup"
           },

           3: { 
               coords: [52.4534865194, -1.90148972736],
               hosts: "England, Wales",
	       event: "Prudential Cup '83",	
               year: "<h6>1983</h6>",
               winner: "India(183)",
               rup: "West Indies(140)",
	       result: "India Won by 43 runs (Lord's)",
	       most_runs: " David Gower (384, ENG)",
	       most_wickets: " Roger Binny (18, IND)",
           det:"https://en.wikipedia.org/wiki/1983_Cricket_World_Cup"
           },   
           
	   4: { 
               coords: [22.5646,88.3433],
               hosts: "India, Pakistan",
	       event: "Prudential Cup '87",	
               year: "<h6>1987</h6>",
               winner: "Australia(253-5)",
               rup: "England(246-8)",
	       result: "Australia won by 7 runs (Eden Gardens)",
	       most_runs: "Graham Gooch (471, ENG)",
	       most_wickets: "Craig McDermott(18, AUS)",
           det:"https://en.wikipedia.org/wiki/1987_Cricket_World_Cup" 
           },

       5: { 
               coords: [-37.8200,144.9834],
               hosts: "Australia, New Zealand",
	       event: "Prudential Cup '92",	
               year: "<h6>1992</h6>",
               winner: "Pakistan(249-6)",
               rup: "England(227)",
	       result: "Pakistan won by 22 runs (Melbourne Cricket Ground)",
	       most_runs: "Martin Crowe (456, NZ)",
	       most_wickets: "Wasim Akram (18, PAK)",
           det:"https://en.wikipedia.org/wiki/1992_Cricket_World_Cup"

           },   

       6: { 
               coords: [31.507997968, 74.333332],
               hosts: "India, Pakistan, Sri Lanka",
	       event: "Wills World Cup 1996",	
               year: "<h6>1996</h6>",
               winner: "Sri Lanka(245-3)",
               rup: "Australia(241)",
	       result: "Sri Lanka Won by 7 wickets (Gaddafi Cricket Ground, Punjab)",
	       most_runs: "Sachin Tendulkar (583, IND)",
	       most_wickets: "Anil Kumble (15, IND)",
           det:"https://en.wikipedia.org/wiki/1996_Cricket_World_Cup"

           },

       7: { 
               coords: [51.0192, -3.1045],
               hosts: "England, Ireland, Scotland, Netherlands, Wales",
	       event: "ICC Cricket World Cup, 1999",	
               year: "<h6>1999</h6>",
               winner: "Australia(133-2)",
               rup: "Pakistan(132)",
	       result: "Australia won by 8 wickets (Lord's)",
	       most_runs: "Rahul Dravid (461, IND)",
	       most_wickets: " Geoff Allott(15, NZ), Shane Warne(20, AUS)",
           det:"https://en.wikipedia.org/wiki/1999_Cricket_World_Cup"

           },   

       8: { 
               coords: [-26.1312, 28.0574],
               hosts: "South Africa, Zimbawe, Kenya",
	       event: "ICC Cricket World Cup, 2003",	
               year: "<h6>2003</h6>",
               winner: "Australia(359-2)",
               rup: "India(234)",
	       result: "Australia won by 125 runs (Wanderers Stadium, Johannesburg)",
	       most_runs: "Sachin Tendulkar (673, IND)",
	       most_wickets: "Chaminda Vaas(23)",
           det:"https://en.wikipedia.org/wiki/2003_Cricket_World_Cup"

           }, 

       9: { 
               coords: [13.1030295879, -59.6202125191],
               hosts: "South Africa, Zimbawe, Kenya",
	       event: "ICC Cricket World Cup, 2007",	
               year: "<h6>2007</h6>",
               winner: "Australia(281-4)",
               rup: "Sri Lanka(215-8)",
	       result: "Australia won by 53 runs (Kensington Oval, Barbados)",
	       most_runs: "Mathew Hayden (659, AUS)",
	       most_wickets: "Glenn McGrath(26)",
           det:"https://en.wikipedia.org/wiki/2007_Cricket_World_Cup"

           },

        10: { 
               coords: [18.9388, 72.8258],
               hosts: "India, Sri Lanka, Bangladesh",
	       event: "ICC Cricket World Cup, 2011",	
               year: "<h6>2011</h6>",
               winner: "India(277-4)",
               rup: "Sri Lanka(274-6)",
	       result: "India won by 6 wickets (Wankhede Stadium, Mumbai)",
	       most_runs: "Tilakaratne Dilshan (500, SL)",
	       most_wickets: "Zaheer Khan(21, IND), Shahid Afridi(21, PAK)",
           det:"https://en.wikipedia.org/wiki/2011_Cricket_World_Cup"

           },  
        11: { 
               coords: [-37.8200,145.9834],
               hosts: "Australia, New Zealand",
	        event: "ICC Cricket World Cup, 2015",	
               year: "<h6>2015</h6>",
               winner: "Australia(186-3)",
               rup: "New Zealand(183)",
	       result: "Australia won by 7 wickets (Melbourne, Cricket Ground)",
	       most_runs: " Martin Guptill(547, NZ)",
	       most_wickets: " Trent Boult(22, NZ)",
           det:"https://en.wikipedia.org/wiki/2015_Cricket_World_Cup"

           }                        
           	
       }
        // let coords = [51.5, -0.09];

        // let marker = L.marker(coords).addTo(mymap);

        // let loc = 'London';

        let redIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        for (let [key, value] of Object.entries(markers)) {
            let pointer = L.marker(value.coords, {icon: redIcon}).addTo(mymap);

            if(value.year === "<h6>2011</h6>" || value.year === "<h6>1992</h6>"){
                pointer.bindTooltip(value.year, {
                permanent: true,
                direction: 'left'
                }
                );
            }else{
                pointer.bindTooltip(value.year, {
                permanent: true,
                direction: 'right'
                }
                );
            }
           
            pointer.bindPopup(`<b><h5><i class='fas fa-trophy mr-1'></i> ${value.event} </b></h5><br><hr>`+ 
                                  `<b>Hosts: ${value.hosts}</b><br>`+
                                  `<b>Champions: ${value.winner}</b><br>`+
                                  `<b>Runners-up: ${value.rup}</b><br>`+
                                  `<b>Result: ${value.result}</b><br>`+
                                  `<b>Most Runs: ${value.most_runs}</b><br>`+
                                  `<b>Most Wickets: ${value.most_wickets}</b><br>`+
                                  `<b><a class='text-dark' href=${value.det} target='_blank'>View Details <i class='fas fa-sign-in-alt'></i></a></b>`);
           
        }

    }

    render() {
        return (
            <div>
            
                <div className="container text-center p-5">
                    <h1 style={{ fontSize: '40px' }} className="animated bounceInUp"><b><img src={Img} alt="cricket" style={{ margin: '-20px 10px 0 10px', overflow: 'auto' }} /></b>World Cup Map View</h1>
                    <hr />
                    <p className="lead animated fadeInDown">Checkout the different countries which hosted the Cricket world cups till date and get to know some interesting facts too!</p>

                </div>
                <div style={{ padding: '0 30px 0 30px' }} className="mx-auto">
                    <div id="mapid" style={{height: '600px', width: '100%'}}></div>
                </div>
            </div>
        )
    }
}



var country = {
  name:"კინოთეატრი",
  languages: ["ქართული","რუსული", "ინგლისური", " მეგრული"],
  addres: "ჭავჭავაძის 11",
  movie: {
    name: "მატრიცა",
    imdb:9.9
  },
  other:[
 {name: "matrix", year :"1999", imdb:9.9},
 {name: "matrix reloaded", year:"2001", imdb:9.8},
 {name: "matrix revolutions", year:"2003", imdb:9.7},
 {name: "revolver", year :"2000",imdb:9.6},
  ]

}

document.write("<h5>ენები</h5>")
for (var i=0; i < country.languages.length; i++){
document.write(country.languages [i] + "<br>")
}

document.write("<h5>ფილმები</h5>")
for (var i=0; i < country.other.length; i++){
  
  document.write(country.other[i].name + "<br>")
  document.write(country.other[i].imdb + "<br>")
}


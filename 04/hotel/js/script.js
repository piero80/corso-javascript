function Hotel(name, rooms, booked, parking, gym) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.parking = parking;
  this.gym = gym;
}

Hotel.prototype = {
  getAvailability: function() {
    return this.rooms - this.booked;
  },
  getName: function() {
    return this.name;
  },
  getParking: function(parking) {
    return this.parking;
  },
  getGym: function(gym) {
    return this.gym;
  }
};
var hotelHilton = new Hotel("Hilton", 45, 23, true, true);
var elName = document.getElementById("hotel1");
var details =
  hotelHilton.getName() + " " + hotelHilton.getAvailability() + " rooms";
elName.textContent = details;
var elParking = document.getElementById("parking");
elParking.className = hotelHilton.getParking();
var elGym = document.getElementById("gym"); // Get element
elGym.className = hotelHilton.getGym();

var CasaVacanze = function(name, address, rooms, booked, parking, gym) {
  //subClass

  Hotel.call(this);
  this.name = name;
  this.address = address;
  this.rooms = rooms;
  this.booked = booked;
  this.parking = parking;
  this.gym = gym;
};

CasaVacanze.prototype = Object.create(Hotel.prototype);
CasaVacanze.prototype.constructor = CasaVacanze;

var myCasaVacanze = new CasaVacanze(
  "Maitress Hotel",
  "Via Ferrarelle, 23",
  12,
  4,
  true,
  false
);
var elCasaVacanze = document.getElementById("casavacanze1");

var details2 =
  myCasaVacanze.getName() + " " + myCasaVacanze.getAvailability() + " rooms";
elCasaVacanze.textContent = details2;

var elParkingCasa = document.getElementById("parkingCasa");
elParkingCasa.className = myCasaVacanze.getParking();

var elGymCasa = document.getElementById("gymCasa");
elGymCasa.className = myCasaVacanze.getGym();

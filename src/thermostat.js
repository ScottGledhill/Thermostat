function Thermostat() {
  this.temperature = 20;
  MIN_TEMP = 10;
}

Thermostat.prototype.upButton = function() {
  this.temperature += 1;
};

Thermostat.prototype.downButton = function() {
  if (this.temperature <= MIN_TEMP) throw ('Min Temp reached');
  this.temperature -= 1;
};

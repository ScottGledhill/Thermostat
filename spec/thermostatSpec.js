describe('Thermostat', function() {

  var thermostat = new Thermostat();

  describe('temperature', function() {

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('Can increase temperature with upbutton', function() {
      thermostat.upButton();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can be decreased with down button', function() {
      thermostat.temperature = 20;
      thermostat.downButton();
      expect(thermostat.temperature).toEqual(19);
    });

    it('can\'t go below minimum temp', function() {
      thermostat.temperature = MIN_TEMP;
      expect(function() {thermostat.downButton();}).toThrow('Min Temp reached');
    });
  });

  describe('power', function() {

    it("has #POWER_SAVING set to 'true' by default", function() {
      expect(thermostat.POWER_SAVING).toEqual(true);
    });
  });
});

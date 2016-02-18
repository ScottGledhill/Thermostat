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
  });
});

const Character = require("../src/character");

describe('Character test', () => {
    it('has 1000 health', () => {
        const character = new Character();
        expect(character.health).toBe(1000);
    });

    it('is level 1', () => {
        const character = new Character();
        expect(character.level).toBe(1);
    });

    it('is alive', () => {
        const character = new Character();
        expect(character.alive).toBe(true);
    });
  });
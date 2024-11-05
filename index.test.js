const { trafficLights } = require('.');

test('trafficLights correctly simulates traffic light changes and car movements', () => {
  const road = "CCC.G...R...";
  const timeUnits = 16;
  const expectedOutput = [
    'CCC.G...R...', '.CCCG...R...',
    '..CCC...R...', '..CCGC..R...',
    '...CC.C.R...', '...COC.CG...',
    '...CR.C.C...', '...CR..CGC..',
    '...CR...C.C.', '...CR...GC.C',
    '...CR...O.C.', '....C...R..C',
    '....GC..R...', '....G.C.R...',
    '....G..CR...', '....G..CR...',
    '....O...C...'
  ];
  
  const result = trafficLights(road, timeUnits);
  expect(result).toEqual(expectedOutput);
});
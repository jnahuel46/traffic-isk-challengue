const trafficLights = (road, timeUnits) => {
  const roadStates = [road];
  const roadLength = road.length;

  const signalPositions = [];
  for (let i = 0; i < road.length; i++) {
    if (["G", "O", "R"].includes(road[i])) {
      signalPositions.push({ position: i, timer: 1, currentSignal: road[i] });
    }
  }

  for (let time = 0; time < timeUnits; time++) {
    let currentState = [...roadStates[roadStates.length - 1]];

    let j = 0;
    while (j < signalPositions.length) {
      const signal = signalPositions[j];
      if (signal.timer === { G: 5, O: 1, R: 5 }[signal.currentSignal]) {
        if (signal.currentSignal === "G") {
          signal.currentSignal = "O";
        } else if (signal.currentSignal === "O") {
          signal.currentSignal = "R";
        } else {
          signal.currentSignal = "G";
        }
        signal.timer = 1;
      } else {
        signal.timer++;
      }
      if (currentState[signal.position] !== "C") {
        currentState[signal.position] = signal.currentSignal;
      }
      j++;
    }

    let i = currentState.length - 1;
    while (i >= 0) {
      if (currentState[i] === "C") {
        const nextPosition = i + 1;
        if (nextPosition < roadLength) {
          if (
            (["G", "O", "R"].includes(currentState[nextPosition]) &&
              currentState[nextPosition + 1] === "C") ||
            currentState[nextPosition] === "R" ||
            currentState[nextPosition] === "O" ||
            currentState[nextPosition] === "C"
          ) {
            i--;
            continue;
          } else {
            currentState[nextPosition] = "C";
          }
        }
        currentState[i] = ".";

        signalPositions.forEach((signal) => {
          if (currentState[signal.position] !== "C") {
            currentState[signal.position] = signal.currentSignal;
          }
        });
      }
      i--;
    }

    roadStates.push(currentState.join(""));
  }
  console.log(roadStates);
  return roadStates;
};

const road = "CCC.G...R...";
const n = 16;
trafficLights(road, n);
module.exports = { trafficLights };

let lastTwoPoints = [];
const WIDTH = 400;
const HEIGHT = 400;
const MIN_ANGLE = 60;
const MIN_DISTANCE = Math.min(WIDTH, HEIGHT) / 20;
const MAX_DISTANCE = Math.min(WIDTH, HEIGHT) / 4;

function getPoint() {
  let point = [
    Math.floor(Math.random() * WIDTH * 0.6) + WIDTH * 0.2,
    Math.floor(Math.random() * HEIGHT * 0.6) + HEIGHT * 0.2,
  ];
  if (lastTwoPoints.length < 2) {
    lastTwoPoints.push(point);
  } else {
    if (
      getAngle(...lastTwoPoints, point) < MIN_ANGLE ||
      getDistance(lastTwoPoints[1], point) < MIN_DISTANCE ||
      getDistance(lastTwoPoints[1], point) > MAX_DISTANCE
    ) {
      point = getPoint();
    } else {
      lastTwoPoints.shift();
      lastTwoPoints.push(point);
    }
  }
  return point;
}
function pointString() {
  let point = getPoint();
  return `${point[0]} ${point[1]} `;
}
function getDistance(pointA, pointB) {
  return Math.sqrt((pointA[0] - pointB[0]) ** 2 + (pointA[1] - pointB[1]) ** 2);
}
function getAngle(pointA, pointB, pointC) {
  let a = getDistance(pointA, pointB);
  let b = getDistance(pointB, pointC);
  let c = getDistance(pointC, pointA);
  return Math.acos((a * a + b * b - c * c) / (2 * a * b)) * (180 / Math.PI);
}
export const generatePath = () => {
  lastTwoPoints = [];
  let pathString = `M ${pointString()} C ${pointString()} ${pointString()} ${pointString()}`;
  for (let i = 0; i < 5; i++) {
    pathString += `S ${pointString()} ${pointString()} `;
  }
  return pathString;
};

export const generateNumber = () => {
  return Math.floor(Math.random() * 10000);
};

export const generateString = () => {
  return [
    ...[...Array(26).keys()].map((i) => String.fromCharCode(i + 65)),
    ...[...Array(26).keys()].map((i) => String.fromCharCode(i + 65)),
    ...[...Array(10).keys()].map((i) => i),
    ...[...Array(10).keys()].map((i) => i),
    ...[...Array(10).keys()].map((i) => i),
    ...[...Array(10).keys()].map((i) => i),
  ]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .join('');
};

export const generateLicensePlate = () => {
  return `${[
    ...[...Array(26).keys()].map((i) => String.fromCharCode(i + 65)),
    ...[...Array(26).keys()].map((i) => String.fromCharCode(i + 65)),
  ]
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)
    .join('')}-${Math.floor(Math.random() * 1000)}`;
};

export const generateEquation = () => {
  return `${Math.floor(Math.random() * 100)} ${
    '+-*/%'[Math.floor(Math.random() * 5)]
  } ${Math.floor(Math.random() * 100)}`;
};

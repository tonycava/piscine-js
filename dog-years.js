const obj = {
  earth : 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}
const dogYears = (planet, age) => {
  age = age / 60 / 60 / 24 / 365.25 * 7
  switch (planet) {
    case 'earth ':
      return age * obj.earth
    case 'mercury':
      return age * obj.mercury
    case 'venus':
      return age * obj.venus
    case 'mars':
      return age * obj.mars
    case 'jupiter':
      return age * obj.jupiter
    case 'saturn':
      return age * obj.saturn
    case 'uranus':
      return age * obj.uranus
    case 'neptune':
      return age * obj.neptune
  }
}
// Завдання 1

const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    averageSpeed: 80,
  };
  

  function displayCarInfo(car) {
    console.log(
      `Виробник: ${car.manufacturer}, Модель: ${car.model}, Рік випуску: ${car.year}, Середня швидкість: ${car.averageSpeed} км/год`
    );
  }
  

  function calculateTravelTime(distance, car) {
    const drivingTime = distance / car.averageSpeed;
    const restTime = Math.floor(drivingTime / 4);
    const totalTime = drivingTime + restTime;
    console.log(`Необхідний час для подолання ${distance} км: ${totalTime.toFixed(2)} год.`);
  }
  









  // Завдання 2

  const fraction1 = { numerator: 3, denominator: 4 };
  const fraction2 = { numerator: 2, denominator: 5 };
  
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  


  function simplifyFraction(fraction) {
    const divisor = gcd(fraction.numerator, fraction.denominator);
    return {
      numerator: fraction.numerator / divisor,
      denominator: fraction.denominator / divisor,
    };
  }
  


  function addFractions(f1, f2) {
    const numerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
    const denominator = f1.denominator * f2.denominator;
    return simplifyFraction({ numerator, denominator });
  }
  


  function subtractFractions(f1, f2) {
    const numerator = f1.numerator * f2.denominator - f2.numerator * f1.denominator;
    const denominator = f1.denominator * f2.denominator;
    return simplifyFraction({ numerator, denominator });
  }
  


  function multiplyFractions(f1, f2) {
    const numerator = f1.numerator * f2.numerator;
    const denominator = f1.denominator * f2.denominator;
    return simplifyFraction({ numerator, denominator });
  }
  


  function divideFractions(f1, f2) {
    const numerator = f1.numerator * f2.denominator;
    const denominator = f1.denominator * f2.numerator;
    return simplifyFraction({ numerator, denominator });
  }
  










  // Завдання 3


  const time = { hours: 20, minutes: 30, seconds: 45 };
  




  function displayTime(time) {
    console.log(
      `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`
    );
  }
  





  function addSeconds(time, secondsToAdd) {
    const totalSeconds =
      time.hours * 3600 + time.minutes * 60 + time.seconds + secondsToAdd;
    updateTimeFromTotalSeconds(time, totalSeconds);
  }
  




  function addMinutes(time, minutesToAdd) {
    const totalSeconds =
      time.hours * 3600 + (time.minutes + minutesToAdd) * 60 + time.seconds;
    updateTimeFromTotalSeconds(time, totalSeconds);
  }
  




  function addHours(time, hoursToAdd) {
    const totalSeconds =
      (time.hours + hoursToAdd) * 3600 + time.minutes * 60 + time.seconds;
    updateTimeFromTotalSeconds(time, totalSeconds);
  }
  



  function updateTimeFromTotalSeconds(time, totalSeconds) {
    const secondsInADay = 24 * 3600;
    totalSeconds = ((totalSeconds % secondsInADay) + secondsInADay) % secondsInADay;
    time.hours = Math.floor(totalSeconds / 3600);
    time.minutes = Math.floor((totalSeconds % 3600) / 60);
    time.seconds = totalSeconds % 60;
  }
  
 



  displayCarInfo(car);
  calculateTravelTime(640, car);
  
  console.log("Сума дробів:", addFractions(fraction1, fraction2));
  console.log("Різниця дробів:", subtractFractions(fraction1, fraction2));
  console.log("Добуток дробів:", multiplyFractions(fraction1, fraction2));
  console.log("Частка дробів:", divideFractions(fraction1, fraction2));
  
  displayTime(time);
  addSeconds(time, 30);
  displayTime(time);
  addMinutes(time, 60);
  displayTime(time);
  addHours(time, 5);
  displayTime(time);
  
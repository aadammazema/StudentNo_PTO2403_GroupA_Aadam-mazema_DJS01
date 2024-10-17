/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given parameters
const parameters = {
  velocity: 10000, // velocity (km/h)
  acceleration: 3, // acceleration (m/s^2)
  timeSec: 3600, // time in seconds (1 hour)
  initialDistance: 0, // initial distance in km
  remainingFuel: 5000, // remaining fuel in kg
  fuelBurnRate: 0.5 // fuel burn rate in kg/s
};

// Function to convert seconds to hours
const secondsToHours = (seconds) => {
  return seconds / 3600; // Convert seconds to hours
};

// Function to calculate new velocity with error handling
const calcNewVelocity = ({ velocity, acceleration, timeSec }) => {
  // Check for parameter validity
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof timeSec !== 'number') {
    throw new Error('Velocity, acceleration, and time must be numbers.');
  }
  
  if (timeSec < 0) {
    throw new Error('Time cannot be negative.');
  }
  
  // Convert acceleration from m/s² to km/h²
  const accelerationKmh2 = acceleration * 3600 * 3600 / 1000; // 1 m/s² = 12960 km/h²
  
  // Calculate new velocity
  return velocity + (accelerationKmh2 * secondsToHours(timeSec));
};

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);







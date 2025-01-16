// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string | undefined;
  model: string | undefined;
  year: number | undefined;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(); // Call the constructor of the parent class, Vehicle
    this.vin = vin;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }

  // Implementation of the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    let vehicleDetails: string;
    if (vehicle instanceof Truck || vehicle instanceof Car) {
      vehicleDetails = `${vehicle.make} ${vehicle.model}`;
    } else {
      vehicleDetails = `${vehicle.make}`;
    }
    if ((vehicle instanceof Truck || vehicle instanceof Car) && vehicle.weight <= this.towingCapacity) {
      console.log(`The ${vehicleDetails} is being towed by the truck.`);
    } else {
      console.log(`The ${vehicleDetails} is too heavy to be towed by the truck.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the parent class's printDetails method
    console.log(`Truck Details:
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight} kg
      Top Speed: ${this.topSpeed} km/h
      Color: ${this.color}
      Towing Capacity: ${this.towingCapacity} kg
      Wheels: ${this.wheels.length} wheels
    `);
  }
}

// Export the Truck class as the default export
export default Truck;

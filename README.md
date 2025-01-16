# AutoQuest (Vehicle Management CLI Application)
### Description
This is a command-line interface (CLI) application that allows users to manage a collection of vehicles. Users can create new vehicles (Car, Truck, or Motorbike) or select existing ones. Once a vehicle is selected, users can perform various actions such as printing details, starting the vehicle, accelerating, and more. The application provides an interactive experience through the terminal, returning users to the actions menu after each action until they choose to exit.

### Features
Create a New Vehicle: Users can create a Car, Truck, or Motorbike by entering specific details.
Select an Existing Vehicle: Choose from a list of previously created vehicles.
Perform Actions on Vehicles:
Print details of the vehicle.
Start the vehicle.
Accelerate or decelerate the vehicle.
Perform unique actions, such as towing (for trucks) and wheelies (for motorbikes).
Interactive Menu: Return to the actions menu after each action until the user exits.

### Installation
Clone the repository to your local machine:
git clone https://github.com/your-username/vehicle-management-cli.git

Navigate to the project directory:
cd vehicle-management-cli

Install the required dependencies:
npm install

### Usage
Start the CLI application:
node index.js
Follow the prompts:
Choose to create a new vehicle or select an existing one.
If creating a vehicle, choose its type (Car, Truck, or Motorbike) and provide the required details.
Perform various actions on the selected vehicle.
Exit the application when done.

### File Structure
.
├── src/
│   ├── classes/
│   │   ├── Vehicle.js       # Base class for all vehicles
│   │   ├── Car.js           # Class for cars
│   │   ├── Truck.js         # Class for trucks
│   │   ├── Motorbike.js     # Class for motorbikes
│   │   ├── Wheel.js         # Class for wheels
│   └── Cli.js               # Main CLI application logic
├── index.js                 # Entry point of the application
├── package.json             # Project configuration and dependencies
├── README.md                # Project documentation

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgements
Developed with Node.js and Inquirer.js for a seamless CLI experience.

### Future Enhancements
Add persistent storage for vehicles to save and load data across sessions.
Include additional vehicle types (e.g., Buses, Boats).
Implement more advanced actions like GPS navigation simulation or maintenance tracking.

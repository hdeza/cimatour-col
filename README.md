# ClimaTour

## Project Overview

**ClimaTour** is a web application built with Vite and React, designed to provide users with accurate weather forecasts and help them plan their activities accordingly. This project leverages **Framer Motion** for smooth animations and a selection of React components that enhance the user interface (UI).

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [UI Interfaces](#ui-interfaces)
- [Folder Descriptions](#folder-descriptions)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Vite**: A fast build tool that provides a smooth development experience.
- **React**: A JavaScript library for building user interfaces.
- **Framer Motion**: A library for creating animations in React applications.
- **Custom React Components**: Components designed for a rich user experience.

## Project Structure

The project is organized into several directories to enhance maintainability and readability. Below is a detailed description of each folder.

## UI Interfaces

The **ClimaTour** application features a clean and user-friendly interface designed to enhance user experience. Below are some of the key UI components:

- **Home Page**: Displays the current weather conditions and a brief introduction to the app.
  ![Home Page Screenshot](https://github.com/user-attachments/assets/2d1d274f-0860-44d5-9c91-c37b42145f5f)

- **Weather Forecast & Itinerary Page**: Presents detailed weather forecasts including temperature graphs and hourly predictions.
  ![Weather Forecast & Itinerary Page Screenshot](https://github.com/user-attachments/assets/053dba79-bfa1-4ec2-98a4-8ce5523e9c5c)


- **Responsive Design Home Page**: The application is fully responsive, providing a seamless experience on both desktop and mobile devices.
  
  ![Responsive Design Screenshot](https://github.com/user-attachments/assets/d6d0713d-575b-4547-8064-7bad74ca0765)
  
- **Responsive Design Weather Forecast & Itinerary Page**: 
  ![Responsive Design Screenshot](https://github.com/user-attachments/assets/38c7bbe4-0412-4453-a08a-c9ccee94a963)


## Folder Descriptions

- **`/assets`**: Contains all static files such as images, icons, and fonts used throughout the application.

- **`/components`**: Contains reusable React components used across the application.
  - **`/common`**: Reusable components that can be shared across different parts of the application (e.g., buttons, modals).
  - **`/weather`**: Components specifically for displaying weather forecasts, temperature graphs, etc.
  - **`/itinerary`**: Components related to itineraries, such as activity cards and schedules.

- **`/hooks`**: Contains all custom hooks that manage shared logic such as API calls and local state management.

- **`/layouts`**: Global layout structures, including headers, footers, and sidebars. This allows for defining templates that can be reused across multiple pages.

- **`/pages`**: Different pages of the application. Each page can have its own logic and design, broken down into smaller components.

- **`/services`**: Contains functions for interacting with external APIs, such as fetching weather data from a service.

- **`/store`**: If using a global state management library like Redux or Zustand, this folder contains slices or configurations. Each slice manages a set of states and actions specific to a domain.

- **`/utils`**: Utility functions that may be needed across various parts of the project, such as date formatting or itinerary calculations.


## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hdeza/cimatour-col.git
   cd climaTour
2. Install dependencies:
 ```bash
   npm install
  ```
3. Start the development server
  ```bash
  npm run dev
  ```
### Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository and create a pull request with your proposed changes.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

Feel free to modify any section to better fit your project or add any additional information as needed!

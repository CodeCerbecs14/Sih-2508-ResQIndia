# Disaster Management System

A comprehensive React web application for disaster management training and simulation. This system provides role-based access for students and administrators to manage and access disaster preparedness training modules.

## Features

### Authentication System
- **Login/Signup Pages**: Separate authentication for Students and Admins
- **Role-based Access Control**: Secure routing based on user roles
- **Session Management**: Persistent login state using React Context

### Student Dashboard
- **Module Access**: View assigned training modules
- **Progress Tracking**: Monitor training completion status
- **Interactive Modules**: Access to disaster simulation training

### Admin Dashboard
- **Module Management**: Toggle modules ON/OFF for student access
- **User Management**: Control which modules are available to students
- **System Analytics**: Monitor system usage and user activity

### Training Modules
- **Earthquake Simulation**: Earthquake safety and evacuation procedures
- **Flood Simulation**: Flood safety protocols and rescue techniques
- **Fire Drill**: Fire safety training and emergency response
- **Rescue Coordination**: Team coordination and emergency management

## Technology Stack

- **Frontend**: React 18
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Build Tool**: Create React App

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd disaster-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## Usage

### For Students
1. **Sign Up/Login**: Create an account or login as a student
2. **Access Dashboard**: View available training modules
3. **Start Training**: Click on any enabled module to begin training
4. **Track Progress**: Monitor your training completion status

### For Administrators
1. **Admin Login**: Login with admin credentials
2. **Module Management**: Toggle modules ON/OFF for student access
3. **User Management**: Control which modules are available
4. **System Monitoring**: View system analytics and user activity

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   └── ProtectedRoute.js
│   ├── dashboard/
│   │   ├── StudentDashboard.js
│   │   └── AdminDashboard.js
│   └── modules/
│       ├── EarthquakeSimulation.js
│       ├── FloodSimulation.js
│       ├── FireDrill.js
│       ├── RescueCoordination.js
│       └── ModuleRouter.js
├── context/
│   └── AppContext.js
├── App.js
├── index.js
└── index.css
```

## Key Features Implementation

### State Management
- **React Context**: Centralized state management for authentication and module configuration
- **Reducer Pattern**: Predictable state updates using useReducer
- **Persistent State**: Login state persists across page refreshes

### Routing & Navigation
- **Protected Routes**: Role-based access control
- **Dynamic Routing**: Module-specific routes for training content
- **Navigation Guards**: Automatic redirects based on user roles

### Module System
- **Dynamic Module Loading**: Modules are loaded based on admin configuration
- **Placeholder Components**: Ready for Phaser.js integration
- **Responsive Design**: Mobile-friendly module interfaces

## Future Enhancements

### Planned Features
- **Phaser.js Integration**: Interactive 2D simulations for each module
- **Progress Tracking**: Detailed progress monitoring and analytics
- **User Management**: Full CRUD operations for user accounts
- **Assessment System**: Quizzes and evaluations for each module
- **Certificate Generation**: Completion certificates for students
- **Real-time Notifications**: System alerts and updates

### Technical Improvements
- **Backend Integration**: Connect to a real API/database
- **Authentication**: JWT tokens and secure authentication
- **File Upload**: Support for custom training materials
- **Offline Support**: Progressive Web App capabilities
- **Testing**: Comprehensive unit and integration tests

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Note**: This is a demonstration application. In a production environment, implement proper security measures, database integration, and user authentication systems.

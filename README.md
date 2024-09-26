# URL Shortener Implementation

## Overview

This project is a URL Shortener web application built using React (with TypeScript), Node.js, Express, MongoDB, and Docker. It allows users to shorten long URLs, view analytics for their shortened URLs, and manage them effectively.

## Technologies Used

![Vite](https://vitejs.dev/logo.svg)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Material-UI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3B5998?style=for-the-badge&logo=plotly&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-8C3D99?style=for-the-badge&logo=typescript&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC3A42?style=for-the-badge&logo=react&logoColor=white)

## Features

- **URL Shortening**: Users can enter a long URL and generate a short URL.
- **Expiration**: Short URLs can be set to expire after a specified period.
- **Error Handling**: Alerts are shown when a short URL already exists.
- **URL Analytics**: View statistics including the number of visits and analytics charts.
- **Delete URLs**: Option to delete shortened URLs.
- **Redirects**: Redirects users to the original URL when the short URL is accessed.
- **Responsive Design**: Built with Material-UI for a modern UI experience.

## Setup Instructions

### Prerequisites

- Node.js
- Docker
- MongoDB

### how to run
- docker - docker-compose up --build
- front - npm run dev
- back - npm start

# Architecture and Design Choices

## Frontend Architecture
#### React with TypeScript:

- React: Provides a component-based architecture for building reusable UI components.
- TypeScript: Enhances code quality and maintainability through static typing.
#### State Management:

- React Query: Efficiently handles server state, data fetching, and caching.

#### Styling:
- MUI: Ensures a responsive and modern design with pre-designed components.

#### Form Handling:
- React Hook Form: Simplifies form validation and submission.

#### Validation:
- Zod: Used for schema validation to ensure data integrity.
### Backend Architecture
- Node.js and Express:

- Node.js: Allows for asynchronous request handling.
- Express: Simplifies routing and middleware management.
- MongoDB:
A flexible schema for storing URL mappings and analytics data.
- RESTful API:
Exposes endpoints for URL shortening, analytics retrieval, and deletion.
### Analytics:
Tracks and stores usage statistics for insights into visit patterns.
### Docker Containerization:
 Both frontend and backend services are containerized for consistent environments.
### Docker Compose:
Manages multi-container applications, including MongoDB.
Design Choices
Modularity: Structured to separate concerns, enhancing code readability and testability.

### Responsive Design:
 Ensures accessibility across devices using responsive design principles.

### Error Handling:
 Comprehensive strategies for providing meaningful feedback during interactions.

### User Experience:
Focused on usability with clear navigation and feedback mechanisms.

### Conclusion
The architecture and design choices made in this URL Shortener application prioritize performance, maintainability, and user experience. By leveraging modern technologies and best practices, the application provides a reliable and efficient solution for URL shortening and management.

### Clone the Repository

```bash
git clone https://github.com/Amitai36/URL-Shortener-Implementation.git
cd URL-Shortener-Implementation


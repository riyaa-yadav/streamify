# Streamify

Streamify is a web application built using modern frontend technologies to display and analyze music streaming data. The application provides a user-friendly interface with search, sorting, and visualization features.

## Tech Stack

- **React**: Used as the frontend framework for building reusable components.
- **Tailwind CSS**: Utilized for styling, providing a utility-first approach to design.
- **Mirage JS**: Used to mock API responses, enabling development without relying on a backend.
- **Recharts**: A library for creating interactive and visually appealing charts.

---

## Project Structure

```
streamify/
│── src/
│   ├── components/    # Common UI components
│   ├── hooks/         # Custom hooks (e.g., useDebounce)
│   ├── services/      # MirageJS API setup
│   │   ├── server/    # MirageJS server instance
│   │   ├── overview/  # API logic for overview page
│   │   └── streams/   # Mock data for streaming
│   ├── pages/         # Application pages
│   │   ├── overview/  # Overview page with dashboard
│   │   └── stream/    # Stream page for song list
│   ┌─ App.js         # Main application file
│   ┌─ index.js       # Entry point of the React application
│─ public/            # Static assets
│─ package.json       # Dependencies and scripts
│─ README.md          # Project documentation
```

---

## Approach

### 1. Overview Page

The **Overview** page provides a summary of streaming data, including:

- **Total Users**: Number of registered users.
- **Active Users**: Users who streamed at least once in the last 30 days.
- **Total Streams**: Total number of song streams.
- **Revenue**: Revenue from subscriptions and advertisements.
- **Top Artist**: Most streamed artist in the last 30 days.

Additionally, it features charts for:

- **User Growth Chart**: Line chart showing user growth over the last 12 months.
- **Revenue Distribution**: Pie chart displaying revenue breakdown.
- **Top 5 Streamed Songs**: Bar chart highlighting the most-streamed songs.

### 2. Stream Page

The **Stream** page displays a list of recently streamed songs with the following functionalities:

- **Pagination** for better data handling.
- **Search** functionality to filter songs by name or artist.
- **Sorting** to organize streams by date or count.

---

## Thought Process

### UI/UX Considerations

- Designed a **responsive UI** where tables scroll horizontally when needed.
- Used **Tailwind CSS** for modular styling and faster development.
- Implemented **search, sorting, and pagination** to improve usability.
- Integrated **Recharts** for meaningful data visualization.

### State Management

- Utilized React's `useState` and `useEffect` for component state.
- Applied **debounced search** via a custom `useDebounce` hook to optimize performance.

### API Mocking

- **MirageJS** was used to create a mock API, allowing development without a backend.
- The API structure was organized into services for better maintainability.

---

## How to Run the Application

### Prerequisites

Ensure you have **Node.js** installed on your machine.

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/riyaa-yadav/streamify.git
   cd streamify
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open the application in your browser at `http://localhost:3000/`

---

## Trade-offs

- **MirageJS vs. Real API**: MirageJS is useful for development, but a real backend is needed for production.
- **Table Performance**: Fetching all data at once may impact scalability; server-side filtering could improve this.
- **Tailwind CSS vs. Styled Components**: Tailwind provides fast styling, but Styled Components offer better dynamic styling capabilities.

---

## Future Improvements

- Implement backend API integration.
- Add authentication and user-specific dashboards.
- Optimize performance with **virtualized lists**.
- Enhance UI with better design, dark mode, animations, and improved interactivity.

---

# React Counter & Form App
A React application demonstrating state management and form handling using React Hooks. This app combines a functional counter with a contact form to showcase React's core concepts.

## Features

### 1. Counter Component
- Increment counter (+ button)
- Decrement counter (- button)  
- Reset counter (Reset button)
- Real-time display of current count

### 2. Contact Form Component
- Name input field
- Email input field
- Message textarea
- Form validation
- Success alert on submission
- Form reset after submission

## Technologies Used

- **React** (Frontend library)
- **React Hooks** (useState for state management)
- **JavaScript ES6+**
- **CSS3** (Modern styling with gradients and animations)

## Installation

1. **Clone the repository:**
git clone https://github.com/beingtaha/react-counter-form-app.git
cd react-counter-form-app

2.Install dependencies:
npm install

3.Start the development server:
npm start

4.Open in browser:
Visit http://localhost:3000 to view the application.

Project Structure
src/
├── App.js              # Main application component
├── App.css             # Global styles
├── Counter.js          # Counter component
├── ContactForm.js      # Form component
└── index.js            # Application entry point

Key Concepts Demonstrated
useState Hook

1.Managing counter state
2.Form input state management
3.State updates triggering re-renders

Event Handling

1.Button click events (onClick)
2.Form input change events (onChange)
3.Form submission events (onSubmit)

Component Architecture

1.Parent-child component communication
2.Reusable components
3.Separation of concerns

Form Handling

1.Controlled components
2.Form validation
3.Form state management

Usage

1.Using the Counter:
Click "+ Increment" to increase the counter
Click "- Decrement" to decrease the counter
Click "Reset" to set counter back to zero

2.Using the Contact Form:
Enter your name in the name field
Enter a valid email address
Type your message in the textarea
Click "Send Message" to submit
A success alert will appear and form will reset

Code Examples

Counter State Management:

const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
const reset = () => setCount(0);

Form State Management

const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

Learning Outcomes

1.Understanding React useState hook
2.Managing component state
3.Handling form inputs in React
4.Creating interactive UI components
5.Event handling in React
6.Component composition and reusability

Author
Taha Ahmed
Internship ID: JAN26-FE14-14

License
This project is created for educational purposes as part of Appverse Technologies internship

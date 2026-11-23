# Sum of Squares Series — React App

## Aim
To develop a React web application that generates and displays the sum of squares series
(1^2 + 2^2 + ... + n^2) for a given number n, entered by the user, using a parent-child
component structure where App.js passes n as a prop to a child component Series.jsx.

## Procedure
1. Create a new React app: `npx create-react-app squares-series-app`
2. In App.js, create a state variable n using useState and an input field to accept it.
3. Pass n as a prop to the child component Series.
4. In Series.jsx, receive the prop n, compute the sum of squares from 1 to n, and display
   the series and total.
5. Import and render Series inside App.js.
6. Run the app with `npm start` and verify output for different values of n.

## How to run
1. Extract this folder.
2. Open a terminal inside it.
3. Run: `npm install`
4. Run: `npm start`
5. The app opens at http://localhost:3000

## Result
Entering n = 5 displays:
Series: 1^2 + 2^2 + 3^2 + 4^2 + 5^2
Sum of squares up to 5 = 55

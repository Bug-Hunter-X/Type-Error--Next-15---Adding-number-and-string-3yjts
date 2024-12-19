```javascript
// pages/about.js

export default function About() {
  const a = 1;
  const b = '2';
  const c = a + parseInt(b, 10); // Solution: Convert b to a number using parseInt()
  return (
    <div>
      <h1>About Page</h1>
      <p>The value of c is: {c}</p>
    </div>
  );
}
```
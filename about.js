```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15
  const a = 1;
  const b = '2';
  const c = a + b; 
  return (
    <div>
      <h1>About Page</h1>
      <p>The value of c is: {c}</p> 
    </div>
  );
}
```
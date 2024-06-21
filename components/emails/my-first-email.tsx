import * as React from "react";

interface MyFirstEmailProps {}

export const MyFirstEmail: React.FC<Readonly<MyFirstEmailProps>> = () => (
  <div>
    <h1>Hey there!</h1>
    <p>
      Thank you so much for being a part of the Thinking Volleyball community.
    </p>
    <p>Enjoy your FREE Volleyball Stats PDF.</p>
  </div>
);

import React from 'react';

function Series({ value }) {
  if (!value || value <= 0) {
    return <p>Please enter a positive number.</p>;
  }

  let terms = [];
  let sum = 0;

  for (let i = 1; i <= value; i++) {
    terms.push(`${i}\u00B2`);
    sum += i * i;
  }

  return (
    <div>
      <p>Series: {terms.join(' + ')}</p>
      <p>
        Sum of squares up to {value} = <b>{sum}</b>
      </p>
    </div>
  );
}

export default Series;

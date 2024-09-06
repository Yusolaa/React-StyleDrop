import React from 'react';

const Student = () => {
  const data = [
    { name: 'Ade', sch: 'OIC', age: 21 },
    { name: 'Dammy', sch: 'OIC', age: 12 },
    { name: 'Grace', sch: 'OIC', age: 21 },
  ];
  return (
    <div>
      {data.map((student, index) => (
        <div key={index}>
          <p>{student.name}</p>
          <p>{student.sch}</p>
          <p>{student.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Student;

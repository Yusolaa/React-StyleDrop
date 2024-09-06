import React from 'react';
import Button from './Button';

const Location = () => {
  return (
    <div className=" flex justify-center">
      <iframe
        className="rounded-3xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.2750579591616!2d4.542902973660097!3d7.770653507418238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037895c78efeac5%3A0xac5ed308fc48ad34!2sOIC%20Hub!5e1!3m2!1sen!2sng!4v1725451547006!5m2!1sen!2sng"
        width="600"
        height="450"
        title="map"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Button title="Click" />
    </div>
  );
};

export default Location;

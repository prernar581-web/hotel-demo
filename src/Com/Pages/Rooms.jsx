import React from 'react'

const Rooms = () => {
  return (
    <div className="rooms-page">
      <h1>Our Rooms</h1>

      <p>
        Choose from our comfortable and beautifully designed rooms.
      </p>

      <div className="room">
        <h2>Deluxe Room</h2>
        <p>
          A spacious room with a comfortable bed, modern bathroom
          and all essential facilities.
        </p>
      </div>

      <div className="room">
        <h2>Luxury Room</h2>
        <p>
          Enjoy a premium stay with beautiful interiors and
          additional luxury facilities.
        </p>
      </div>

      <div className="room">
        <h2>Family Room</h2>
        <p>
          A large and comfortable room perfect for families.
        </p>
      </div>
    </div>
  );
};

export default Rooms;



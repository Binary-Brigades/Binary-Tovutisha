import React from "react";
import "slick-carousel/slick/slick.css";

function Map() {
  return (
    <div>
      <div className="h-[60vh] relative w-screen">
        <img
          src="map.png"
          className="w-full h-full object-cover"
          alt="Map"
        />
      </div>
    </div>
  );
}

export default Map;

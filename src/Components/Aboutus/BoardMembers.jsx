import React from "react";
import Card from "./TeamCard";
import BomMembers from "../../assets/Data/BomMembers";
function BoardMembers() {
  
  return (
    <div className="p-8 w-full mt-5 md:mt-8">
      <h1 className="p-12 font-semibold text-xl">The Team</h1>
      <div className="w-full grid grid-cols-1 py-4 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
        {BomMembers.map((member) => (
          <Card
            title={member.title}
            key={member.name}
            name={member.name}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardMembers;

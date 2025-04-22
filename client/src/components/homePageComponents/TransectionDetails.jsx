import React from "react";
import { assets } from "../../assets/assets";
const TransactionReceiver = [
  { id: "1", name: "Joel Kenley", amount: "6.4" },
  { id: "2", name: "Andrew Tate", amount: "8.2" },
  { id: "3", name: "Joel Garner", amount: "10.3" },
];

const TransectionDetails = () => {
  return (
    <div>
      {TransactionReceiver.map((receiver) => (
        <div key={receiver.id}>
          <img src={assets.subContainer} alt="subContainer" />
          <h2>Transaction</h2>
          <h3>{receiver.name}</h3>
          <p>{`-$${receiver.amount}`}</p>
        </div>
      ))}
    </div>
  );
};

export default TransectionDetails;

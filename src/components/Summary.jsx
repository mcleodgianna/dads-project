
import { useState, useEffect } from "react";

export default function Summary({ responses }){

    
    return <div className="mt-6 p-4 bg-gray-100 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Your Answers:</h2>
      <ul className="list-disc pl-5">
        {responses.map((item, index) => (
          <li key={index}>
            {console.log(item)}
            <strong>{item.question}:</strong> {item.answer}
          </li>
        ))}
      </ul>
    </div>
  }
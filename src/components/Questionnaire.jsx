
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Summary from "./Summary";

export default function Questionnaire() {
    const [step, setStep] = useState(1);
    const [responses, setResponses] = useState([]);

    const [inputValue, setInputValue] = useState("");
    const [today, setToday] = useState("");

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        setToday(currentDate);
        // Automatically record the date as the first response
        setResponses([{ question: "Date", answer: currentDate }]);
      }, []);

    const handleAnswer = (question, answer) => {
        const newResponses = [...responses, { question, answer }];
        setInputValue("");
        setResponses(newResponses);
        setStep(step => step + 1);
        
      };

    const currentQuestion = () => {
        switch(step) {
            case 1: return {
                question: "When was Participant/Employee's day of birth?",
                type: "date"
            };
            case 2: return {
                question: "When was Participant/Employee's day of death?",
                type: "date"
            };
            case 3: return {
              question: "Does Participant/Employee have an IRA",
              options: ["Yes", "No"],
            };
            case 4: return {
              question: "Does Participant/Employee own 5% or more of the Company?",
              options: ["Yes", "No"],
            };
            case 5: return {
              question: "Is the Participant/Employee retired?",
              options: ["Yes", "No"],
            };
            case 6: 
            console.log(responses[5].answer === "Yes");
            if (responses[4].answer === "Yes") {
              return {
                question: "What was their date of retirement?",
                type: "date"
              } 
            } else {
              setStep(step => step + 2);
              return null;
            }
        }
    }

    const questionData = currentQuestion();

    return <div>
        <h1>Questionnaire</h1>

        {questionData ? (
        <div className="mb-4">
          <p className="text-lg mb-2">{questionData.question}</p>

          {/* Text or Date input */}
          {questionData.type && (
            <div className="space-y-2">
              <input
                type={questionData.type}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
              />
              <Button
                onClick={() => handleAnswer(questionData.question, inputValue)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={!inputValue}
              >
                Submit
              </Button>
            </div>
          )}

          {/* Multiple choice */}
          {questionData.options && (
            <div className="space-x-2">
              {questionData.options.map((opt) => (
                <Button
                  key={opt}
                  onClick={() => handleAnswer(questionData.question, opt)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {opt}
                </Button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Summary responses={responses} />
      )}
    </div>
}
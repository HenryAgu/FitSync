import {useState} from 'react'

// stylesheet
import "../style/Slider.scss";

// React icons
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";

// images
import Quote from "../images/Quote.svg";
import Image1 from "../images/image1.svg";
import Image2 from "../images/image2.svg";
import Image3 from "../images/image3.svg";
import Image4 from "../images/image4.svg";
import Image5 from "../images/image5.svg";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [counter, setCounter] = useState(1)

  const testimonials = [
    {
      id: 1,
      FirstQuote:
        "I LOVE THIS FITNESS PLATFORM! THE CONVENIENCE OF ACCESSING WORKOUTS FROM ANWHEREIS UNBEATABLE. THE TRAINERS ARE MOTIVATING, AND THE COMMUNITY SUPPORT IS INCREDIBLE. IT’S LIKE HAVING A PERSONAL TRAINER.",
      FirstImage: Image1,
      FirstName: "Frank Nicholas",
      FirstOccupation: "Software Programmer",

      // Right Side
      SecondQuote:
        "I LOVE THIS FITNESS PLATFORM! THE CONVENIENCE OF ACCESSING WORKOUTS FROM ANWHEREIS UNBEATABLE. THE TRAINERS ARE MOTIVATING, AND THE COMMUNITY SUPPORT IS INCREDIBLE. IT’S LIKE HAVING A PERSONAL TRAINER.",
      SecondImage: Image2,
      SecondName: "Frank Nicholas",
      SecondOccupation: "Software Programmer",
    },
    {
      id: 2,
      FirstQuote:
        "JOINING THIS FITNESS PLATFORM WAS THE BEST DECISION I MADE FOR MY HEALTH. THE WORKOUT PROGRAMS ARE WELL-STRUCTURED, CHALLENGING YET ADAPTABLE TO MY FITNESS LEVEL. THE RERSULTS HAVE BEEN AMAZING.",
      FirstImage: Image2,
      FirstName: "Deborah Susan",
      FirstOccupation: "Gym Instructor",

      // Right Side
      SecondQuote:
        "I LOVE THIS FITNESS PLATFORM! THE CONVENIENCE OF ACCESSING WORKOUTS FROM ANWHEREIS UNBEATABLE. THE TRAINERS ARE MOTIVATING, AND THE COMMUNITY SUPPORT IS INCREDIBLE. IT’S LIKE HAVING A PERSONAL TRAINER.",
      SecondImage: Image3,
      SecondName: "Angela Christiana",
      SecondOccupation: "Human Resource Manager",
    },
    {
      id: 3,
      FirstQuote:
        "JOINING THIS FITNESS PLATFORM WAS THE BEST DECISION I MADE FOR MY HEALTH. THE WORKOUT PROGRAMS ARE WELL-STRUCTURED, CHALLENGING YET ADAPTABLE TO MY FITNESS LEVEL. THE RERSULTS HAVE BEEN AMAZING.",
      FirstImage: Image3,
      FirstName: "Angela Christiana",
      FirstOccupation: "Human Resource Manager",

      // Right Side
      SecondQuote:
        "I’VE TRIED MANY FITNESS PLATFORM, BUT THIS ONE STANDS OUT. THE QUALITY OF THE WORKOUTS AND THE ATTENTION TO DETAILS IS IMPRESSIVE. THE TRAINERS CARE ABOUT MY PROGRESS, AND THE PLATFORM’S HAS A GOOD INTERFACE",
      SecondImage: Image4,
      SecondName: "Michael Davidson",
      SecondOccupation: "Mechanical Engineer",
    },
    {
      id: 4,
      FirstQuote:
        "I’VE TRIED MANY FITNESS PLATFORM, BUT THIS ONE STANDS OUT. THE QUALITY OF THE WORKOUTS AND THE ATTENTION TO DETAILS IS IMPRESSIVE. THE TRAINERS CARE ABOUT MY PROGRESS, AND THE PLATFORM’S HAS A GOOD INTERFACE",
      FirstImage: Image4,
      FirstName: "Michael Davidson",
      FirstOccupation: "Mechanical Engineer",

      // Right side
      SecondQuote:
        "THE VARIETY OF CLASSES AND PROGRAMS KEEPS ME MOTIVATED, AND THE COMMUNITY SUPPORT KEEPS ME ACCOUNTABLE. I’VE MADE INCREDIBLE STRIDES IN MY FITNESS GOALS, AND I’M SO GRATEFUL FOR THIS PLATFORM.",
      SecondImage: Image5,
      SecondName: "Theresa Hilda",
      SecondOccupation: "Chef",
    },
    {
      id: 5,
      FirstQuote:
        "THE VARIETY OF CLASSES AND PROGRAMS KEEPS ME MOTIVATED, AND THE COMMUNITY SUPPORT KEEPS ME ACCOUNTABLE. I’VE MADE INCREDIBLE STRIDES IN MY FITNESS GOALS, AND I’M SO GRATEFUL FOR THIS PLATFORM.",
      FirstImage: Image5,
      FirstName: "Theresa Hilda",
      FirstOccupation: "Chef",

      // Right side
      SecondQuote:
        "I LOVE THIS FITNESS PLATFORM! THE CONVENIENCE OF ACCESSING WORKOUTS FROM ANWHEREIS UNBEATABLE. THE TRAINERS ARE MOTIVATING, AND THE COMMUNITY SUPPORT IS INCREDIBLE. IT’S LIKE HAVING A PERSONAL TRAINER.",
      SecondImage: Image1,
      SecondName: "Frank Nicholas",
      SecondOccupation: "Software Engineer",
    },
  ];

  const updateIndex = (newIndex) =>{
    if(newIndex < 0){
      newIndex = 0;
    }else if(newIndex >= testimonials.length){
      newIndex = testimonials.length - 1;
    }

    setActiveIndex(newIndex);
  }
  return (
    <main className="quotes">
      <div className="quote_icon">
        <img src={Quote} alt="Quote" />
      </div>
      <section className="quote_card" style={{transform: `translate(-${activeIndex * 20}%)`}}>
        {testimonials.map((test) => {
          return (
            <>
              <div className="inner_quotes">
                <div className="left_quote">
                  <div className="head_quote">
                    <p>{test.FirstQuote}</p>
                  </div>
                  <div className="quote_writer">
                    <div className="left_quote_writer">
                      <img src={test.FirstImage} alt="Image1" />
                    </div>
                    <div className="right_quote_writer">
                      <h4>{test.FirstName}</h4>
                      <p>{test.FirstOccupation}</p>
                    </div>
                  </div>
                </div>
                <div className="right_quote">
                  <div className="head_quote">
                    <p>{test.SecondQuote}</p>
                  </div>
                  <div className="quote_writer">
                    <div className="left_quote_writer">
                      <img src={test.SecondImage} alt="Image2" />
                    </div>
                    <div className="right_quote_writer">
                      <h4>{test.SecondName}</h4>
                      <p>{test.SecondOccupation}</p>
                    </div>
                  </div>
                </div>
              </div>
              ;
            </>
          );
        })}
      </section>
      <div className="slide_nav">
        <div className="left_nav">
          <h1>{counter}</h1>
          <h4>/</h4>
          <h4>5</h4>
        </div>
        <div className="right_nav">
          <TfiAngleLeft className="left_arrow" onClick={()=> {
            updateIndex(activeIndex - 1);
            if(counter > 1){
              setCounter(counter - 1);
            }
          }}/>
          <TfiAngleRight className="right_arrow" onClick={()=>{
            updateIndex(activeIndex + 1);
            if(counter < 5){
              setCounter(counter + 1);
            }
          }}/>
        </div>
      </div>
    </main>
  );
};

export default Slider;

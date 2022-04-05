import { useState } from 'react';
import star from './images/icon-star.svg';
import thankyou from './images/illustration-thank-you.svg';


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState("");



  const Button = ({number}) => {
    return <button onClick={() => setRating(number)} className= "btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-200">{number}</button>
  }

  return (
    <>
      {!isSubmitted && 
      <div className = "wrapper">
      <img src = {star} alt = "" className="bg-gray-700 p-2 rounded-full mb-5" />
      <h2 className = "text-gray-400 text-3xl my=6 mb-5">How did we do?</h2>
      <p className = "text-gray-400 mb-10">Please let us know how we did with your support request. All feedback is appreciated to help us improve!</p>
      <ul className= "grid grid-cols-5 gap-5 mb-10">
        <li><Button number = {1} /></li>
        <li><Button number = {2} /></li>
        <li><Button number = {3} /></li>
        <li><Button number = {4} /></li>
        <li><Button number = {5} /></li>
      </ul>
      <div className = "text-center">
        <button className = "btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full" onClick={() => setIsSubmitted(true)}>Submit</button>
      </div>
    </div>
      }
      {isSubmitted && <ThankYou rating = {rating} setIsSubmitted={setIsSubmitted} />} 
    </>
  );
}

const ThankYou = ({rating, setIsSubmitted}) => {

  return (
      <div className= "wrapper" alt = ''>
        <img src = {thankyou} alt = "" className = "block mx-auto mb-5"/>
        <div className = "flex items-center justify-center">
          <p className = "p-rating bg-gray-700 rounded-full text-center text-sm px-3 pt-1">You selected {rating} out of 5</p>
        </div>
        <h2 className = "text-gray-100 text-3xl my=6 text-center">Thank You!</h2>
        <p className = "text-gray-400 text-center mb-10">We appreciate you taking the time to leave a rating. 
        If you ever need more support, don't hesitate to get in touch.</p>
        <div className = "text-center">
          <button className = "btn-rating w-full text-white uppercase tracking-wide pt-4 pb-2 rounded-full" onClick={() => setIsSubmitted(false)}>Rate Again</button>
        </div>
      </div>
  ) 
}


export default App;

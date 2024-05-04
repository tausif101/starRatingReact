import './App.css';
import StarRating from "./components/StarRating/StarRating";


function App() {

  return (
    <div>
      {/* here nstars mention the number of stars */}
      <StarRating nStars={5} /> 
    </div>
  )
}

export default App

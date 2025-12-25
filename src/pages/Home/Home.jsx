import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import Header from '../../components/Header/Header.jsx';
import FoodDisplay from '../FoodDisplay/FoodDisplay.jsx';


import './Home.css';

const Home = () => {
  const[category, setCategory] = useState("All");
  return (
    <div >
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}  />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
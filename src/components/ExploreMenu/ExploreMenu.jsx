/*
import 'bootstrap/dist/css/bootstrap.min.css';
import { menu_list } from '../../assets/assets';
import './Explore.css';

const ExploreMenu = () => {
  return (
    <div className="explore-menu container my-5">
      <h1 className="text-center explore-menu-heading">Explore Menu</h1>

      <p className="explore-menu-text text-center mx-auto">
        Choose from diverse dishes featuring on our website.
      </p>
<div className="row justify-content-center g-4">
  {menu_list.map((item, index) => (
    <div 
      key={index} 
      className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center"
    >
      <img 
        src={item.menu_image} 
        alt={item.menu_name} 
        className="explore-menu-img mb-2"
      />
      <p className="text-center explore-menu-list-item">{item.menu_name}</p>
    </div>
  ))}
</div>

      
    </div>
  );
}

export default ExploreMenu;*/


import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { menu_list } from '../../assets/assets';
import './Explore.css';

const ExploreMenu = ({category, setCategory}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  

  return (
    <div className="explore-menu container my-5">
      <h1 className="text-center explore-menu-heading">Explore Menu</h1>

      <p className="explore-menu-text text-center mx-auto">
        Choose from diverse dishes featuring on our website.
      </p>

      <div className="row justify-content-center g-4">
        {menu_list.map((item, index) => (
          <div
          onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-column align-items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transition: 'transform 0.3s ease',
              transform: hoveredIndex === index ? 'scale(1.08)' : 'scale(1)'
            }}
          >
            <img
            
              src={item.menu_image}
              alt={item.menu_name}
              className="explore-menu-img mb-2 img-fluid"
            />

            <p className="text-center explore-menu-list-item">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
     <hr/>

    </div>
  );
};

export default ExploreMenu;

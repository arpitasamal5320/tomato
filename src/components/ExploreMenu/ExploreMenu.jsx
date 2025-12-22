/*
import { menu_list } from '../../assets/assets'
import './Explore.css'

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Menu</h1>

      <p className="explore-menu-text">
        Choose from diverse dishes featuring on our website.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div key={index} className="explore-menu-item">
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMenu
*/
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
      <p className="text-center">{item.menu_name}</p>
    </div>
  ))}
</div>

      
    </div>
  );
}

export default ExploreMenu;

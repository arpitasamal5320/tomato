/*
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
          <h1>Order your favourite food now !</h1>
         <p>
Choose from a diverse menu featuring freshly prepared dishes made with quality ingredients. From comfort food to chef-inspired favorites, we bring you delicious flavors, quick service, and satisfying meals designed to make every order memorable.
</p>

          <button>view menu</button>

        </div>
    </div>
  )
}

export default Header */

import './Header.css'

const Header = () => {
  return (
    <div className="header container-fluid d-flex align-items-end">
      <div className="
        header-contents
        d-flex
        flex-column
        align-items-start
        justify-content-end
        text-start
        w-100
        p-3 p-md-4 p-lg-5
      ">

        <h1 className="fw-bold fs-4 fs-sm-3 fs-md-2 fs-lg-1">
          Order your favourite food now!
        </h1>

        <p className="fs-6 fs-md-5 col-12 col-md-10 col-lg-8">
          Choose from a diverse menu featuring freshly prepared dishes made with quality ingredients. From comfort food to chef-inspired favorites, we bring you delicious flavors, quick service, and satisfying meals designed to make every order memorable.
        </p>

        <button className="btn btn-danger mt-2 mt-md-3 align-self-start">
          View Menu
        </button>

      </div>
    </div>
  )
}

export default Header

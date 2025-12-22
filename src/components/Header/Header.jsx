import './Header.css'

const Header = () => {
  return (
    <div className="header container-fluid">
      <div className="row min-vh-100 align-items-center">
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center header-contents">

          <h1 className="fw-bold">
            Order your favourite food now!
          </h1>

          <p className="mt-3">
            Choose from a diverse menu featuring freshly prepared dishes made with
            quality ingredients. From comfort food to chef-inspired favorites, we
            bring you delicious flavors, quick service, and satisfying meals.
          </p>

          <button className="btn btn-warning btn-lg mt-4">
            View Menu
          </button>

        </div>
      </div>
    </div>
  )
}

export default Header



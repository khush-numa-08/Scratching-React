import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  const handlefatch = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      console.log(data);
      setList(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlefatch();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-5"><span className="text-danger display-3 fw-medium">P</span>ro<span style={{borderBottom: "red solid"}} >duct <span className="display-3 text-secondary fw-medium">S</span>tore</span></h2>

        <div className="row">
          {list.map((products) => {
            return (
              <div className="col-md-3 mb-5">
                <div className="card" style={{boxShadow: "rgba(0, 0, 0, 0.16) 1px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", height: "100%", borderTopRightRadius: "35px"}}>
                  <img src={products.thumbnail} className="card-img-top" style={{boxShadow: " rgba(0, 0, 0, 0.05) 0px 0px 0px 1px", borderTopRightRadius: "100px"}} alt="" />
                  <div className="card-body">
                    <p><span className="fw-medium fs-6">Title: </span>{products.title} </p>
                    <p><span className="fw-medium fs-6">Brand: </span>{products.brand} </p>
                    <p><span className="fw-medium fs-6">Category: </span>{products.category} </p>
                    
                    <p><span className="fw-medium fs-6">Rating: </span>{products.rating} </p>
                    <p><span className="fw-medium fs-6">Stock: </span>{products.stock} </p>
                    <p><span className="fw-medium fs-6">Availability Status: </span>{products.availabilityStatus} </p>
                    <p><span className="fw-medium fs-6">Price: </span><span className="text-danger">{products.price}</span> </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;

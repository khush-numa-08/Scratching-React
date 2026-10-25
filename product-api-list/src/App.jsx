import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  const handleFatch = async () => {
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
    handleFatch();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="mt-3"><span className="text-danger display-3 fw-medium">P</span>ro<span style={{borderBottom: "red solid"}} >duct <span className="display-3 text-secondary fw-medium">S</span>tore</span></h2>

        <div className="row">
          <div className="col-12">
            <div className="">
              <table className="table table-bordered w-100 mt-5">
                <thead className="text-center">
                  <tr>
                    <th>Sr. No</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {list.map((products, index) => {
                    return (
                      <tr key={products.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={products.thumbnail}
                            style={{ height: "140px"}}
                            alt=""
                          />
                        </td>
                        <td className="text-start ps-3" style={{width: "20%"}}>{products.title}</td>
                        <td className="text-start ps-3" style={{width: "45%"}}>{products.description}</td>
                        <td><span className="text-danger" >${products.price}</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
  
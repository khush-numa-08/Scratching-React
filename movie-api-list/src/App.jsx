import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  const handleFatch = async () => {
    try {
      const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWNhMjYxMzZhZDViNDE1NGQ1ZDMzYjdkMDZkY2QyYSIsIm5iZiI6MTc5MDg1NjY4OC45OTUwMDAxLCJzdWIiOiI2YWJlNGRmMDk0M2QzYmE3NDhlOWFmYmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Hz1OQgDhdmLmY__W_BcZnsnaje2kh7YUIhknMvPCOGo'
          }
        } 
      );

      const data = await res.json();

      console.log(data);
      setList(data.results);
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
        <h2 className="mt-3"><span className="text-danger display-3 fw-medium">M</span>ov<span style={{ borderBottom: "red solid" }}>ies<span className="display-3 text-secondary fw-medium"> C</span>orner</span></h2>

        <div className="row">
          <div className="col-12">
            <table className="table table-bordered w-100 mt-5">
              <thead className="text-center">
                <tr>
                  <th>Sr. No</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Overview</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {list.map((movies, index) => {
                  return (
                    <tr key={movies.id}>
                      <td>{index + 1}</td>

                      <td>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                          style={{ height: "160px"}} alt={movies.title} />
                      </td>

                      <td className="text-start ps-3">{movies.title}</td>
                      <td className="text-start ps-3" style={{width: "48%"}}>{movies.overview}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
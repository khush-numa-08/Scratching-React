import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  const handlefatch = async () => {
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
    handlefatch();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-5"><span className="text-danger display-3 fw-medium">M</span>ov<span style={{ borderBottom: "red solid" }}>ies<span className="display-3 text-secondary fw-medium"> C</span>orner</span></h2>

        <div className="row gy-4">
          {list.map((movies) => {
            return (
              <div className="col-md-3">
                <div className="card mt-5" style={{height: "90%", borderTopLeftRadius: "45px", borderEndEndRadius: "25px",}}>
                  <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} style={{ height: "", borderTopLeftRadius: "45px"}} alt={movies.title} />
                  <div className="card-body">
                    <p><span className="fw-medium fs-6">Title: </span>{movies.title} </p>
                    <p><span className="fw-medium fs-6">Language: </span>{movies.original_language} </p>
                    <p><span className="fw-medium fs-6">Release Date: </span>{movies.release_date} </p>
                    <p><span className="fw-medium fs-6">Vote Average: </span>{movies.vote_average} </p>
                    <p><span className="fw-medium fs-6">Vote Count: </span>{movies.vote_count} </p>
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

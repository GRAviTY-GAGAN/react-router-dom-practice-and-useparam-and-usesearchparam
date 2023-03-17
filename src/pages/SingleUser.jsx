import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function SingleUser({ id }) {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // console.log(location);

  useEffect(() => {
    getData(location.pathname);
  }, [location]);

  let param = useParams();
  console.log(param);

  function getData(path) {
    setLoading(true);
    // fetch(`https://reqres.in/api/users/${param.id}`)
    fetch(`https://reqres.in/api${path}`)
      .then((req) => req.json())
      .then((res) => {
        // console.log(res);
        setUserData(res.data);
        console.log(userData, "data");
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  //   id: 7
  // email: "michael.lawson@reqres.in"
  // first_name: "Michael"
  // last_name: "Lawson"
  // avatar: "https://reqres.in/img/faces/7-image.jpg"
  // support: Object

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Something went wrong</h1>
  ) : !userData?.first_name ? (
    <h1>User Not Found</h1>
  ) : (
    <div>
      <div key={userData?.id}>
        <h1>
          {userData?.first_name} {userData?.last_name}
        </h1>
        <img src={userData?.avatar} alt="" />
        <p>
          UserID : <strong>{userData?.id}</strong>
        </p>
        <p>
          User Name :{" "}
          <strong>
            {userData?.first_name} {userData?.last_name}
          </strong>
        </p>
        <p>
          Email : <strong>{userData?.email}</strong>
        </p>
        <p>
          ParamID: <strong>{param.id}</strong>
        </p>
      </div>
    </div>
  );
}

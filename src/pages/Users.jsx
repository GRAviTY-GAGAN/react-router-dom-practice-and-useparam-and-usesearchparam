import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";

export default function User(params) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  let initial = searchParams.get("page");
  // console.log(searchParams.get('page'), 'PAGA');

  const [page, setPage] = useState(getParam(initial));
  // const login = useRef(false);

  useEffect(() => {
    setSearchParams({ page: page, search: search });
    getData(page);
  }, [page]);

  useEffect(() => {
    setSearchParams({ page: page, search: search });
  }, [page, search]);

  function getParam(initial) {
    if (!Number(initial) || Number(initial) <= 0) {
      return 1;
    }
    return Number(initial);
  }

  function getData(page = 1) {
    setLoading(true);
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((req) => req.json())
      .then((res) => {
        setUsers(res);
        // console.log(res);
      })
      .catch((err) => {
        setError(true);
        // console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handlePageChange(num) {
    setPage(page + num);
    getData(page);
  }

  //   id: 7
  // email: "michael.lawson@reqres.in"
  // first_name: "Michael"
  // last_name: "Lawson"
  // avatar: "https://reqres.in/img/faces/7-image.jpg"

  // if (!login.current) {
  //   return <Navigate to="/login" />;
  // }

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Something went wrong...</h1>
  ) : (
    <div>
      <h1>USERS</h1>
      <input
        value={search}
        placeholder="Search Something..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {users?.data?.map((item) => {
        return (
          <div
            style={{
              border: "1px solid black",
              margin: "1rem",
              padding: "1rem"
            }}
            key={item.id}
          >
            <img src={item.avatar} alt="" />
            <h4>{item.first_name}</h4>
            <Link to={`/users/${item.id}`}>More Info</Link>
          </div>
        );
      })}
      <button
        onClick={() => {
          handlePageChange(-1);
        }}
      >
        Prev
      </button>
      <button disabled>{page}</button>
      <button
        onClick={() => {
          handlePageChange(1);
        }}
      >
        Next
      </button>
    </div>
  );
}

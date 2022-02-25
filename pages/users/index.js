import React from "react";
import useSWR from "swr";

  const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data, error } = useSWR(
    "https://users-5otjipfax-tptusers.vercel.app/api/v1/students?email=artur.kaasik@tptlive.ee",
    fetcher,
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h3>Id : {data.id}</h3>
      <p>Firstname : {data.firstname}</p>
      <p>Lastname : {data.lastname}</p>
    </div>
  );
}

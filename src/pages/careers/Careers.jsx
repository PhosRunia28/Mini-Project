import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  return (
    <div>
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p className="">{career.title}</p>
          <p className="">Based In {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export const CareersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  if (!res.ok) {
    throw {
      message: "failed to fetch",
      statusText: res.statusText,
      status: res.status,
    };
  }
  return res.json();
};

import { useLoaderData } from "react-router-dom";

export default function CareerDetail() {
  const career = useLoaderData();
  return (
    <div>
      <h2 className="">career detail for {career.title}</h2>
      <p className="">Starting salary : {career.salary}</p>
      <p className="">Location : {career.location}</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt nobis
        earum voluptatem molestiae nihil alias! Recusandae fugiat dicta velit
        sint accusamus delectus. Eaque molestiae dolor minus ipsum animi nobis
        quisquam?
      </p>
    </div>
  );
}

export const CareerDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw {
      message: "failed to fetch",
      statusText: res.statusText,
      status: res.status,
    };
  }
  return res.json();
};

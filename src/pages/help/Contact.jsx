import { Form, Link, redirect, useActionData } from "react-router-dom";
export default function Contact() {
  const data = useActionData();
  return (
    <div className="mx-auto flex max-w-fit flex-col items-center justify-center rounded-md border border-black px-6 py-6">
      <h2 className="">Contact</h2>
      <Form method="post" action="/help/contact">
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-black p-2"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            id="comment"
            className="border border-black"
          />
        </div>
        <button
          type="submit"
          className="mt-8 max-w-fit border border-black px-6 py-2"
        >
          Submit
        </button>
        <Link
          to=".."
          className="mt-8 max-w-fit border border-black px-6 py-2"
        >
          coba
        </Link>
      </Form>
      {data && data.error && <div>{data.error}</div>}
    </div>
  );
}

export const actionContact = async ({ request }) => {
  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    comment: data.get("comment"),
  };
  if (submission.comment.length < 10) {
    return { error: "Comment must be over 10 character" };
  }
  return redirect("/");
};

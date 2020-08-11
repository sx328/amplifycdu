import Link from "next/link";

export default function () {
  return (
    <div className="container-fluid m-auto">
      <h2>We couldn't find what you were looking for</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link href="/">
        <button className="d-block m-auto btn btn-light">
          <h4>Go back to the main page</h4>
        </button>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

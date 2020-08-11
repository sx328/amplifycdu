import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Code The Universe is a non profit that wants you to become a great programmer by learning from its great courses"
        />
      </Head>
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container">
            <h1 className="masthead-heading mb-0">
              &nbsp;
              <img
                alt="logo"
                className="img-fluid"
                src="assets/img/BasicLogoDark.png"
              />
            </h1>
            <div id="typewriter">
              <h2 className="masthead-subheading mb-0">
                Dream it. Think it. Code it.
              </h2>
            </div>
            <a
              className="px-4 btn btn-primary pulse animated infinite btn-lg rounded-pill mt-5"
              role="button"
              href="https://discord.gg/5gt8QVG"
            >
              <h3>Join here</h3>
            </a>

            <br />
            <br />

            <div className="btn-group-toggle">
              <Link href="/cpp">
                <a className="m-4 btn rounded-pill infinite btn-lg mt-5 btn-light">
                  Learn C++
                </a>
              </Link>
              <Link href="/java">
                <a className="m-4 btn rounded-pill infinite btn-lg mt-5 btn-light">
                  Learn Java
                </a>
              </Link>
              <Link href="/matlab">
                <a className="m-4 btn rounded-pill infinite btn-lg mt-5 btn-light">
                  Learn Matlab
                </a>
              </Link>
              <Link href="/python">
                <a className="m-4 btn rounded-pill infinite btn-lg mt-5 btn-light">
                  Learn Python
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .masthead {
            background-image: url("assets/img/background.gif");
            background-size: cover;
            background-position: center center;
          }
        `}
      </style>
    </>
  );
}

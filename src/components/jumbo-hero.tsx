import Link from "next/link";

function JumboHero() {
  return (
    <div className="max-w-screen-md mx-auto text-center py-28">
      <h1 className="font-semibold leading-tight text-black text-8xl">
        As Easy As Analytics Gets.
      </h1>
      <p className="text-2xl leading-normal mt-9 text-pir-gray-500">
        Pirsch is a simple, privacy-friendly, open-source alternative to Google
        Analytics — lightweight, cookie-free and easily integrated into any
        website or directly into your backend.
      </p>

      <div className="mt-12">
        <Link href="/#get-started">
          <a className="px-5 py-3 ml-6 text-lg font-medium text-black duration-200 rounded-lg bg-pir-green hover:bg-pir-green-hover transitions-colors">
            Try it for Free
          </a>
        </Link>

        <Link href="/#live-demo">
          <a className="px-5 py-4 ml-6 text-lg font-medium text-black duration-200 bg-white rounded-lg hover:bg-pir-gray-200 transitions-colors">
            Live Demo
          </a>
        </Link>
      </div>
      <p className="mt-5 text-pir-gray-500">No credit card required.</p>
    </div>
  );
}

export default JumboHero;

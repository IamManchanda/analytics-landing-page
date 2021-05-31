import Link from "next/link";
import PrimaryButton from "./primary-button";
import SecondaryButton from "./secondary-button";

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
        <PrimaryButton href="/#get-started" text="Try it for Free" />
        <SecondaryButton href="/#live-demo" text="Live Demo" />
      </div>
      <p className="mt-5 text-pir-gray-500">No credit card required.</p>
    </div>
  );
}

export default JumboHero;

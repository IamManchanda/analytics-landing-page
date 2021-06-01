import PrimaryButton from "./primary-button";
function CallToAction() {
  return (
    <div className="mt-24 text-center bg-black lg:mt-48 py-28 rounded-xl">
      <h2 className="text-3xl font-medium text-white sm:text-5xl lg:text-6xl">
        Ready to get Started?
      </h2>
      <p className="mt-6 text-lg lg:text-[1.375rem] text-pir-gray-500">
        Setting up your website only takes a few minutes.
      </p>
      <div className="mt-10">
        <PrimaryButton href="/#get-started" text="Start 30-day Free Trial" />
      </div>
      <p className="mt-5 text-pir-gray-500">No credit card required.</p>
    </div>
  );
}

export default CallToAction;

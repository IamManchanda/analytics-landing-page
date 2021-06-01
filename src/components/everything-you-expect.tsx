import Image from "next/image";
import PrimaryButton from "./primary-button";

function EverythingYouExpect() {
  return (
    <>
      <div className="mx-auto mt-10 lg:mt-0 max-w-35r lg:max-w-none">
        <h3 className="max-w-screen-md mx-auto text-3xl font-semibold leading-tight lg:text-center sm:text-5xl lg:text-6xl">
          Everything You Expect, and More...
        </h3>
        <ul className="grid grid-cols-1 mt-4 lg:mt-20 lg:grid-cols-2 gap-y-12 lg:gap-y-32 gap-x-24">
          <li className="flex flex-col justify-center order-1">
            <h4 className="text-2xl font-medium lg:text-3xl">
              Powerful Dashboard for Your Personal or Business Needs
            </h4>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              Receive detailed insights on all your website metrics, including
              page views, bounce rate, time on page, and many more.
            </p>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              Answer questions like "How many users clicked on my paid marketing
              campaign from the United States?" powered by UTM parameters and
              stackable filters.
            </p>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              Stay up-to-date on all your devices, whether you are on a desktop,
              tablet, or smartphone — presented in light or dark mode.
            </p>
            <div className="mt-10">
              <PrimaryButton href="/#live-demo" text="See Live Demo" />
            </div>
          </li>
          <li className="order-2">
            <Image
              src="https://pirsch.io/static/img/tables-dark.svg"
              width={568}
              height={663}
            />
          </li>
          <li className="order-4 -mt-4 lg:mt-0 lg:order-3">
            <Image
              src="https://pirsch.io/static/img/access-dark.svg"
              width={568}
              height={663}
            />
          </li>
          <li className="flex flex-col justify-center order-3 mt-6 lg:mt-0 lg:order-4">
            <h4 className="text-2xl font-medium lg:text-3xl">
              Fine-grained Access Management Means Full Control
            </h4>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              Give your team members access to the dashboard by assigning each
              one their own role, enabling them to see important data at a
              glance. If you want, you can share your dashboard with the world
              using your personal subdomain.
            </p>
            <p className="mt-5 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
              Generate unique access links for external partners, customers, or
              clients. Created or deleted in seconds, so you are always on top.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default EverythingYouExpect;

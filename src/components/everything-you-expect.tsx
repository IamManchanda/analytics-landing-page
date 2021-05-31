import Image from "next/image";
import PrimaryButton from "./primary-button";

function EverythingYouExpect() {
  return (
    <>
      <h3 className="max-w-screen-md mx-auto text-6xl font-semibold leading-tight text-center">
        Everything You Expect, and More...
      </h3>
      <ul className="grid grid-cols-2 mt-20 gap-y-32 gap-x-24">
        <li className="flex flex-col justify-center">
          <h4 className="text-3xl font-medium">
            Powerful Dashboard for Your Personal or Business Needs
          </h4>
          <p className="mt-5 text-[1.375rem] leading-normal text-pir-gray-500">
            Receive detailed insights on all your website metrics, including
            page views, bounce rate, time on page, and many more.
          </p>
          <p className="mt-5 text-[1.375rem] leading-normal text-pir-gray-500">
            Answer questions like "How many users clicked on my paid marketing
            campaign from the United States?" powered by UTM parameters and
            stackable filters.
          </p>
          <p className="mt-5 text-[1.375rem] leading-normal text-pir-gray-500">
            Stay up-to-date on all your devices, whether you are on a desktop,
            tablet, or smartphone — presented in light or dark mode.
          </p>
          <div className="mt-10">
            <PrimaryButton href="/#live-demo" text="See Live Demo" />
          </div>
        </li>
        <li>
          <Image
            src="https://pirsch.io/static/img/tables-dark.svg"
            width={568}
            height={663}
          />
        </li>
        <li>
          <Image
            src="https://pirsch.io/static/img/access-dark.svg"
            width={568}
            height={663}
          />
        </li>
        <li className="flex flex-col justify-center">
          <h4 className="text-3xl font-medium">
            Fine-grained Access Management Means Full Control
          </h4>
          <p className="mt-5 text-[1.375rem] leading-normal text-pir-gray-500">
            Give your team members access to the dashboard by assigning each one
            their own role, enabling them to see important data at a glance. If
            you want, you can share your dashboard with the world using your
            personal subdomain.
          </p>
          <p className="mt-5 text-[1.375rem] leading-normal text-pir-gray-500">
            Generate unique access links for external partners, customers, or
            clients. Created or deleted in seconds, so you are always on top.
          </p>
        </li>
      </ul>
    </>
  );
}

export default EverythingYouExpect;

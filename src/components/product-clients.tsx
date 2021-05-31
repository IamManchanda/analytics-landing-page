import Image from "next/image";
import PrimaryButton from "./primary-button";

function ProductClients() {
  return (
    <div className="grid grid-cols-3 mb-20 gap-x-16 gap-y-32">
      <div className="flex flex-col justify-center col-span-1">
        <h5 className="text-3xl font-medium">Fit for WordPress</h5>
        <p className="mt-5 text-[1.375rem] leading-normal text-pir-gray-500">
          Add powerful analytics to your WordPress site with a few clicks. Our
          plugin runs in the backend — no coding, no hassle.
        </p>
        <div className="mt-10">
          <PrimaryButton href="/#wordpress" text="Add to Wordpress" />
        </div>
      </div>
      <div className="flex items-center justify-center col-span-2 py-24 bg-black rounded-lg">
        <Image
          src="https://pirsch.io/static/img/wordpress.svg"
          width={384}
          height={87}
        />
      </div>
      <div className="flex items-center justify-center col-span-2 py-24 bg-black rounded-lg">
        <Image
          src="https://pirsch.io/static/img/googlesearchconsole.svg"
          width={384}
          height={41}
        />
      </div>
      <div className="flex flex-col justify-center col-span-1">
        <h5 className="text-3xl font-medium">
          Works with Google Search Console
        </h5>
        <p className="mt-5 text-[1.375rem] leading-normal text-pir-gray-500">
          See what Google searches led people to your website right within the
          dashboard.
        </p>
      </div>
    </div>
  );
}

export default ProductClients;

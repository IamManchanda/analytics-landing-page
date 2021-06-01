import Link from "next/link";
import classNames from "classnames";

function PrimaryButton({ href, text, isFull = false }) {
  return (
    <Link href={href}>
      <a
        className={classNames(
          "px-5 py-2 md:py-4 text-lg font-medium text-black duration-200 rounded-lg bg-pir-green hover:bg-pir-green-hover transitions-colors",
          {
            "block w-full text-center": isFull,
          },
        )}
      >
        {text}
      </a>
    </Link>
  );
}

export default PrimaryButton;

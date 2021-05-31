import Link from "next/link";

function PrimaryButton({ href, text }) {
  return (
    <Link href={href}>
      <a className="px-5 py-3 text-lg font-medium text-black duration-200 rounded-lg bg-pir-green hover:bg-pir-green-hover transitions-colors">
        {text}
      </a>
    </Link>
  );
}

export default PrimaryButton;

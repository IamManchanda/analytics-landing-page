function ProductFeatureItem({ title, text }) {
  return (
    <li>
      <h5 className="text-2xl font-medium lg:text-3xl">{title}</h5>
      <p className="my-3 lg:mt-6 lg:mb-0 text-lg lg:text-[1.375rem] leading-normal text-pir-gray-500">
        {text}
      </p>
    </li>
  );
}

export default ProductFeatureItem;

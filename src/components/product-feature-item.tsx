function ProductFeatureItem({ title, text }) {
  return (
    <div>
      <h5 className="text-3xl font-medium">{title}</h5>
      <p className="mt-5 text-[1.375rem] leading-normal text-pir-gray-500">
        {text}
      </p>
    </div>
  );
}

export default ProductFeatureItem;

import ProductFeatureItem from "./product-feature-item";

function ProductFeaturesList() {
  return (
    <ul className="grid grid-cols-1 mx-auto mb-40 max-w-35r lg:max-w-none lg:grid-cols-3 mt-28 gap-x-7 gap-y-7 lg:gap-y-14">
      <ProductFeatureItem
        title="No Cookie Banner"
        text="Get rid of those annoying cookie banners. Pirsch does not track users
          across websites and devices like traditional web analytics."
      />
      <ProductFeatureItem
        title="Own Your Data"
        text="Anything we collect belongs to you, it will never be shared or sold.
          Export your data to CSV or make use of our API to work with it in your
          tools."
      />
      <ProductFeatureItem
        title="We Are Independent"
        text="Pirsch is completely self-funded, based and hosted in Germany under
          strict privacy laws of the European Union."
      />
      <ProductFeatureItem
        title="Unlimited Websites"
        text="Add as many websites as you like. Our pricing model is based on the
          total number of page views, check our pricing to learn more."
      />
      <ProductFeatureItem
        title="Regular Email Reports"
        text="Receive the most important numbers in your inbox or send them to
          multiple recipients automatically."
      />
    </ul>
  );
}

export default ProductFeaturesList;

const products = [
  {
    title: "line icons",
    src: "product-1.svg",
  },
  {
    title: "tail admin",
    src: "product-2.svg",
  },
  {
    title: "next js templates",
    src: "product-3.svg",
  },
  {
    title: "form bold",
    src: "product-4.svg",
  },
  {
    title: "gray grids",
    src: "product-5.svg",
  },
  {
    title: "ui deck",
    src: "product-6.svg",
  },
];

export default function Products() {
  return (
    <div className="mt-22">
      <p className="ml-10 text-base leading-6 font-medium text-text">
        Explore our others products
      </p>

      <div className="mt-5 flex items-center justify-between divide-x border-y">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex h-20 grow items-center justify-center text-gray-400 hover:text-black"
          >
            <div
              className="h-[22px] w-[100px] bg-gray-400 transition-colors hover:bg-black"
              style={{
                WebkitMaskImage: `url(/products/${product.src})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",
                maskImage: `url(/products/${product.src})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
              }}
              aria-label={product.title}
              role="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

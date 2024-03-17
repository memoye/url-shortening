type ProductOfferingCardProps = {
  icon: string;
  description: string;
  title: string;
};

const ProductOfferingCard: React.FC<ProductOfferingCardProps> = ({
  icon,
  description,
  title,
}) => {
  return (
    <div className="bg-white p-4 px-6 pb-6 group rounded-md z-10 cursor-default text-center lg:text-left">
      <figure className="flex relative place-items-center aspect-square -translate-y-8 -mt-5 mb-0 mx-auto lg:mx-0 rounded-full w-fit bg-accent p-4">
        <img className="z-10" src={icon} alt={title} />
        <div className="rounded-full absolute inset-2 bg-accent z-0 group-hover:animate-ping " />
      </figure>
      <div className="-mt-3 ">
        <h3 className="text-lg text-neutral-300 font-bold leading-tight mb-3">
          {title}
        </h3>
        <p className="text-[14px] leading-loose max-w-[95%]">{description}</p>
      </div>
    </div>
  );
};
export default ProductOfferingCard;

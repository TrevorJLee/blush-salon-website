interface ServiceCardProps {
  name: string;
  price: string;
  description?: string;
  duration?: string;
}

const ServiceCard = ({ name, price, description, duration }: ServiceCardProps) => {
  return (
    <div className="flex justify-between items-start py-4 border-b border-blush-grey/20 last:border-b-0">
      <div className="flex-1">
        <h4 className="text-lg font-medium text-blush-dark">{name}</h4>
        {description && (
          <p className="text-sm text-blush-grey mt-1">{description}</p>
        )}
        {duration && (
          <p className="text-xs text-blush-grey mt-1">{duration}</p>
        )}
      </div>
      <span className="text-lg font-medium text-blush-pink ml-4">{price}</span>
    </div>
  );
};

export default ServiceCard;

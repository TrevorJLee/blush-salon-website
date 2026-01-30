interface StylistCardProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
  specialties?: string[];
}

const StylistCard = ({ name, title, bio, image, specialties }: StylistCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-[3/4] bg-blush-peach relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-24 h-24 text-blush-pink/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-script text-2xl text-blush-pink">{name}</h3>
        <p className="text-sm text-blush-gold uppercase tracking-wider mt-1">{title}</p>
        <p className="text-sm text-blush-dark mt-4 leading-relaxed">{bio}</p>

        {specialties && specialties.length > 0 && (
          <div className="mt-4">
            <p className="text-xs text-blush-grey uppercase tracking-wider mb-2">Specialties</p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-blush-peach text-blush-dark rounded-full"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StylistCard;

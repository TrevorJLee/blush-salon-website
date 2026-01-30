import ServiceCard from '../components/ServiceCard';
import flowerWallImg from '../assets/flower_wall_cabinent.jpeg';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Haircuts',
      services: [
        { name: "Women's", price: '$45+', duration: '1 hour' },
        { name: 'Bang Trim', price: '$15', duration: '15 minutes' },
        { name: 'Kids (12 and under)', price: '$20+', duration: '30 minutes' },
        { name: "Men's", price: '$25+', duration: '30 minutes' },
        { name: 'Beard/Mustache Trim', price: '$10', duration: '15 minutes' },
      ],
    },
    {
      title: 'Coloring',
      services: [
        { name: 'Balayage', price: '$150+', duration: '3 hours', description: 'Hair coloring method where the stylist paints color onto the hair to create natural-looking highlights' },
        { name: 'Full High/Low Light', price: '$140+', duration: '3 hours', description: 'Combines lighter and darker strands throughout entire head' },
        { name: 'Partial High/Low Light', price: '$120+', duration: '2.5 hours', description: 'Applied to specific sections for subtle dimension' },
        { name: 'Color Touch Up', price: '$90+', duration: '2 hours', description: 'Refreshes roots of previously colored hair' },
        { name: 'Corrective Color', price: '$140+', duration: '3 hours', description: 'Fixes color mistakes and uneven tones' },
        { name: 'Double Process', price: '$140', duration: '3 hours', description: 'Two-step lightening then color application' },
        { name: 'All Over', price: '$100+', duration: '2.5 hours', description: 'Single uniform color applied to entire head' },
        { name: 'Toner', price: '$20+', duration: '1 hour', description: 'Semi-permanent product neutralizing unwanted tones' },
      ],
    },
    {
      title: 'Styling',
      services: [
        { name: 'Blowout', price: '$30', duration: '45 minutes' },
        { name: 'Curls', price: '$20+', duration: '30 minutes' },
        { name: 'Flat Iron', price: '$20+', duration: '30 minutes' },
      ],
    },
    {
      title: 'Hair Treatments',
      services: [
        { name: 'Deep Conditioning', price: '$40+', duration: '1 hour', description: 'Moisturizing procedure improving hair health' },
        { name: 'Body Wave', price: '$75', duration: '2 hours', description: 'Loose, natural-looking waves adding volume' },
      ],
    },
    {
      title: 'Waxing',
      services: [
        { name: 'Face Wax', price: '$30', duration: '30 minutes' },
        { name: 'Lip Wax', price: '$15', duration: '15 minutes' },
        { name: 'Eyebrows Wax', price: '$20', duration: '15 minutes' },
      ],
    },
    {
      title: 'Bridal Hair',
      services: [
        { name: 'Day Of', price: '$75', duration: '1.5 hours' },
        { name: 'Bridal Party', price: '$75', duration: '1 hour' },
        { name: 'Trial', price: '$60', duration: '1 hour' },
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${flowerWallImg})`, backgroundPosition: 'center 30%' }}
        ></div>
        <div className="absolute inset-0 bg-white/75"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-script text-5xl sm:text-6xl text-blush-dark mb-6">Our Services</h1>
          <p className="text-xl text-blush-dark leading-relaxed max-w-3xl mx-auto">
            From cuts and color to highlights and extensions, our talented stylists are dedicated to helping you look and feel your best.
          </p>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-blush-pink py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-white">
            <strong>Note:</strong> Prices may vary based on hair length, thickness, and complexity. Consultation recommended for accurate pricing.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <h2 className="font-script text-3xl sm:text-4xl text-blush-pink mb-8 pb-4 border-b border-blush-pink/30 text-center md:text-left">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 px-4 sm:px-0">
                  {category.services.map((service, serviceIndex) => (
                    <ServiceCard
                      key={serviceIndex}
                      name={service.name}
                      price={service.price}
                      description={'description' in service ? service.description : undefined}
                      duration={'duration' in service ? service.duration : undefined}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blush-peach/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-script text-3xl sm:text-4xl text-blush-pink mb-4">Ready to Book?</h2>
          <p className="text-lg text-blush-dark mb-8 max-w-2xl mx-auto">
            Schedule your appointment online or give us a call. We can't wait to see you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://na2.meevo.com/CustomerPortal/onlinebooking/booking/guestinfo?tenantId=501213&locationId=501583"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blush-pink text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-blush-gold transition-colors duration-200"
            >
              Book Online
            </a>
            <a
              href="tel:+12515011996"
              className="inline-block border-2 border-blush-dark text-blush-dark px-8 py-4 text-sm tracking-wider uppercase hover:bg-blush-dark hover:text-white transition-colors duration-200"
            >
              Call (251) 501-1996
            </a>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-blush-dark mb-2">Cancellation Policy</h3>
              <p className="text-sm text-blush-grey">
                Please provide 24-hour notice for cancellations. Late cancellations incur 50% charges; no-shows face full booking fees.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blush-dark mb-2">Gratuity</h3>
              <p className="text-sm text-blush-grey">
                Gratuity is not included in service prices. Tips are greatly appreciated.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blush-dark mb-2">Gift Cards</h3>
              <p className="text-sm text-blush-grey">
                Gift cards are available in any amount. The perfect gift for any occasion!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

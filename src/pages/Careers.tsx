import ContactForm from '../components/ContactForm';
import flowerWall2Img from '../assets/flower_wall2.jpeg';

const Careers = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${flowerWall2Img})`, backgroundPosition: 'center 30%' }}
        ></div>
        <div className="absolute inset-0 bg-white/75"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-script text-5xl sm:text-6xl text-blush-dark mb-4">Join Our Team</h1>
          <p className="text-xl text-blush-dark/80 max-w-2xl mx-auto">
            Interested in joining the Blush family? Fill out the form below and we'll be in touch!
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blush-peach/30 p-8 rounded-lg">
            <ContactForm formType="career" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;

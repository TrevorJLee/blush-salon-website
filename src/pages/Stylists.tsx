import { Link } from 'react-router-dom';
import jenniferImg from '../assets/stylists/Jennifer.jpg';
import myahImg from '../assets/stylists/Myah.jpeg';
import barbaraImg from '../assets/stylists/Barbara.jpeg';
import mitraImg from '../assets/stylists/Mitra.jpeg';
import chandelierImg from '../assets/chandelier.jpg';

const Stylists = () => {
  const stylists = [
    {
      name: 'Jennifer',
      title: 'Manager / Stylist',
      bio: 'Jennifer is a cosmetologist with over 20 years of experience. She specializes in cutting, coloring, and styling all hair types and aims to help clients relax and feel better about themselves. Her professional mission centers on making every client feel beautiful through exceptional service. Beyond the salon, Jennifer is a devoted family woman who is married and has four children—two sons and two daughters.',
      specialties: ['Cutting', 'Coloring', 'All Hair Types'],
      image: jenniferImg,
    },
    {
      name: 'Mitra',
      title: 'Stylist',
      bio: 'Mitra is an innovative hairstylist with over 12 years of experience. She is dedicated to empowering individuals by enhancing their confidence and natural beauty through creative, personalized styling. Mitra is passionate about her craft and committed to delivering an elevated, welcoming salon experience for every guest. She looks forward to welcoming you to her chair.',
      specialties: ['Creative Styling', 'Personalized Color', 'Hair Transformations'],
      image: mitraImg,
    },
    {
      name: 'Barbara',
      title: 'Stylist',
      bio: 'Barbara Jeanne is a licensed cosmetologist who truly loves being behind the chair. From a young age, she knew this is exactly where she was meant to be. Barbara strives to create a comfortable, welcoming environment while enhancing each client\'s natural beauty - helping people feel happier, one hair appointment at a time. She would love to welcome you into her chair and be a part of your hair journey.',
      specialties: ['Natural Beauty Enhancement', 'Personalized Styling'],
      image: barbaraImg,
    },
    {
      name: 'Myah',
      title: 'Stylist',
      bio: 'Myah Grace Riggs is a recent graduate of Baystyle Academy of Cosmetology. She currently resides in Foley, Alabama, and has a year of experience doing hair under her belt. She also has experience in event hair and makeup, such as weddings and dance recitals. Myah currently specializes in blonding and gray coverage. She is passionate about making people feel confident in themselves and their hair. As a baby stylist, she is devoted to learning new styles and techniques every day.',
      specialties: ['Blonding', 'Gray Coverage', 'Event Hair & Makeup'],
      image: myahImg,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${chandelierImg})`, backgroundPosition: 'center 65%' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/35"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-script text-5xl sm:text-6xl text-white mb-4">Meet Our Team</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our talented stylists are dedicated to helping you look and feel your best. Get to know the people behind the magic.
          </p>
        </div>
      </section>

      {/* Stylists - Alternating Layout */}
      {stylists.map((stylist, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? 'bg-white' : 'bg-blush-peach/30';

        return (
          <section key={index} className={`${bgColor} py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Column */}
                <div className={`${!isEven ? 'md:order-2' : 'md:order-1'} flex justify-center`}>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg max-w-sm w-full">
                    <img
                      src={stylist.image}
                      alt={stylist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Bio Column */}
                <div className={`${!isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <h2 className="font-script text-5xl sm:text-6xl text-blush-pink mb-2 text-center">{stylist.name}</h2>
                  <p className="text-sm text-blush-gold uppercase tracking-wider mb-6 text-center">{stylist.title}</p>
                  <p className="text-blush-dark leading-relaxed">{stylist.bio}</p>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Join Our Team CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-script text-3xl sm:text-4xl text-blush-pink mb-4">Want to Join Our Team?</h2>
          <p className="text-lg text-blush-dark mb-8 max-w-2xl mx-auto">
            We are always looking for talented, passionate individuals to join the Blush family. If you love making people feel beautiful, we would love to hear from you.
          </p>
          <Link
            to="/careers"
            className="inline-block bg-blush-pink text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-blush-gold transition-colors duration-200"
          >
            View Career Opportunities
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Stylists;

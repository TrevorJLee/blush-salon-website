import { useState, useEffect, useRef } from 'react';
import ContactForm from '../components/ContactForm';
import chandelierImg from '../assets/chandelier.jpg';
import flowerWallImg from '../assets/flower_wall_cabinent_cropped.jpg';
import logoImg from '../assets/white_logo_transparent.png';

const Home = () => {
  const allReviews = [
    {
      quote: "Super happy with my hair and the experience that I had with Jennifer. She listens to what you want and is very professional with her suggestions. The salon is so pretty with all the chandeliers, pink, and open concept. Can't wait for my next appointment!",
      author: 'Tracy M.',
    },
    {
      quote: "Had a wonderful experience today! I needed a change and I'm growing out my grays. Jennifer was AWESOME! She gave me a great cut and blended my grays so I don't feel so frumpy anymore! Sassy is back! Thanks for everything!!!",
      author: 'Christy G.',
    },
    {
      quote: "Awesome stylists that can take care of everything from your holiday styles to making your men and children look dapper!!!",
      author: 'Alex O.',
    },
    {
      quote: "Great energy and experienced employees. I'll be going back there again soon.",
      author: 'Michael B.',
    },
    {
      quote: "Best balayage I've ever had! The color is exactly what I wanted. The team here really knows what they're doing.",
      author: 'Sarah L.',
    },
    {
      quote: "Love this place! Clean, beautiful salon with talented stylists. Jennifer did my hair for my wedding and it was perfect!",
      author: 'Emily R.',
    },
    {
      quote: "I've been to many salons in the area and Blush is by far the best. Professional, friendly, and the results are always amazing.",
      author: 'Jessica T.',
    },
    {
      quote: "My daughter and I both get our hair done here. The stylists are so patient and creative. We always leave happy!",
      author: 'Lisa M.',
    },
    {
      quote: "Finally found a salon that understands curly hair! The cut and styling were perfect. Highly recommend!",
      author: 'Rachel P.',
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Number of reviews to show at once
  const reviewsToShow = isMobile ? 1 : 3;

  useEffect(() => {
    if (isDragging) return; // Don't auto-rotate while dragging

    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= allReviews.length) {
          // Seamlessly loop back
          setIsResetting(true);
          setTimeout(() => {
            setCurrentReviewIndex(0);
            setIsResetting(false);
          }, 1000);
          return prevIndex;
        }
        return nextIndex;
      });
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, [allReviews.length, isDragging]);

  // Touch and drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50; // Minimum drag distance to trigger slide
    if (dragOffset > threshold && currentReviewIndex > 0) {
      // Swiped right - go to previous
      setCurrentReviewIndex(currentReviewIndex - 1);
    } else if (dragOffset < -threshold && currentReviewIndex < allReviews.length - 1) {
      // Swiped left - go to next
      setCurrentReviewIndex(currentReviewIndex + 1);
    }
    setDragOffset(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Trackpad horizontal scroll
  const scrollAccumulator = useRef(0);
  const handleWheel = (e: React.WheelEvent) => {
    // Only handle horizontal scroll
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      scrollAccumulator.current += e.deltaX;

      const threshold = 50;
      if (scrollAccumulator.current > threshold) {
        // Scrolled right - go to next
        if (currentReviewIndex < allReviews.length - 1) {
          setCurrentReviewIndex(currentReviewIndex + 1);
        }
        scrollAccumulator.current = 0;
      } else if (scrollAccumulator.current < -threshold) {
        // Scrolled left - go to previous
        if (currentReviewIndex > 0) {
          setCurrentReviewIndex(currentReviewIndex - 1);
        }
        scrollAccumulator.current = 0;
      }
    }
  };

  // Calculate font size based on quote length to fill the box
  const getReviewFontSize = (quote: string, mobile: boolean) => {
    const len = quote.length;
    if (mobile) {
      // Mobile sizes - larger text to fill the box
      if (len < 80) return 'text-3xl';
      if (len < 150) return 'text-2xl';
      if (len < 220) return 'text-xl';
      if (len < 280) return 'text-lg';
      return 'text-base';
    } else {
      // Desktop sizes - larger text
      if (len < 100) return 'text-3xl';
      if (len < 150) return 'text-2xl';
      if (len < 220) return 'text-xl';
      return 'text-lg';
    }
  };


  return (
    <div>
      {/* Hero Section */}
      <section className="relative aspect-square md:aspect-auto md:min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-top"
          style={{ backgroundImage: `url(${flowerWallImg})`, backgroundSize: 'cover' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Logo */}
            <img
              src={logoImg}
              alt="Blush Hair & Spa"
              className="w-72 sm:w-88 lg:w-[480px] h-auto drop-shadow-2xl"
            />

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-2xl drop-shadow-lg">
              We strive to create stunning and personalized looks that leave our clients feeling confident and radiant.
            </p>

            {/* Button */}
            <a
              href="https://na2.meevo.com/CustomerPortal/onlinebooking/booking/guestinfo?tenantId=501213&locationId=501583"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blush-pink text-white px-16 py-6 text-lg tracking-wider uppercase hover:bg-white hover:text-blush-pink transition-all duration-300 text-center shadow-2xl hover:shadow-3xl font-semibold rounded-lg border-2 border-white"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-script text-4xl sm:text-5xl text-blush-pink mb-6">Our Vision</h2>
            <p className="text-lg text-blush-dark leading-relaxed">
              At Blush Hair and Spa, our vision is to provide a relaxing environment where our artists can create elegant haircuts and color enhancements. We strive to provide a kind of service to promote confidence and self-worth.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${chandelierImg})` }}
        ></div>
        <div className="absolute inset-0 bg-blush-pink/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-script text-4xl sm:text-5xl text-white mb-4">What Our Clients Say</h2>
            <p className="text-white font-semibold text-xl mb-2">5.0 stars • 39 Google reviews</p>
          </div>

          <div
            ref={carouselRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
          >
            <div
              className={`flex ${!isResetting && !isDragging ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                gap: isMobile ? '1rem' : '2rem',
                transform: isMobile
                  ? `translateX(calc(10vw - ${currentReviewIndex} * (80vw + 1rem) + ${dragOffset}px))`
                  : `translateX(calc(-${currentReviewIndex} * (calc((100% - 4rem) / 3) + 2rem) + ${dragOffset}px))`,
              }}
            >
              {[...allReviews, ...allReviews.slice(0, reviewsToShow)].map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-8 rounded-lg shadow-md flex-shrink-0 flex flex-col justify-between"
                  style={{
                    width: isMobile ? '80vw' : 'calc((100% - 4rem) / 3)',
                    aspectRatio: '1 / 1'
                  }}
                >
                  <div className="flex flex-col h-full text-center">
                    <div className="flex justify-center mb-1 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 md:w-7 md:h-7 text-blush-gold fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="flex-1 flex items-center justify-center px-1 md:px-2 overflow-hidden py-2 md:py-0">
                      <p className={`text-blush-dark leading-snug md:leading-relaxed ${getReviewFontSize(review.quote, isMobile)}`}>"{review.quote}"</p>
                    </div>
                    <p className="text-blush-pink font-semibold mt-1 md:mt-4 text-base md:text-base lg:text-lg">— {review.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://reviews.birdeye.com/blush-hair-and-spa-171820852704182"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white border-2 border-white text-blush-pink px-8 py-4 text-sm tracking-wider uppercase hover:bg-transparent hover:text-white transition-colors duration-200 rounded-lg font-semibold"
            >
              Read More Reviews
            </a>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {allReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsResetting(false);
                  setCurrentReviewIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentReviewIndex
                    ? 'bg-white w-8'
                    : 'bg-white/30 hover:bg-white/60 w-2'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blush-peach/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-script text-4xl sm:text-5xl text-blush-pink mb-6 text-center md:text-left">Get in Touch</h2>
              <p className="text-lg text-blush-dark mb-8 text-center md:text-left">
                Have questions? We'd love to hear from you. Send us a message or give us a call.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0">
                {/* Left column on mobile: Location, Phone, Hours */}
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blush-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blush-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blush-dark text-lg md:text-base">Location</h3>
                      <p className="text-blush-grey text-base md:text-base">9475 US-90 #220<br />Daphne, AL 36526</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blush-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blush-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blush-dark text-lg md:text-base">Phone</h3>
                      <a href="tel:+12515011996" className="text-blush-grey hover:text-blush-pink transition-colors text-base md:text-base">
                        (251) 501-1996
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blush-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blush-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-blush-dark text-lg md:text-base">Hours</h3>
                      <p className="text-blush-grey text-base md:text-base">
                        Mon: Closed<br />
                        Tue - Fri: 9am - 6pm<br />
                        Sat: 9am - 2pm<br />
                        Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right column on mobile: Map */}
                <div className="flex items-start md:mt-8">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=9475+US-90+%23220,+Daphne,+AL+36526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative group"
                  >
                    <iframe
                      src="https://www.google.com/maps?q=Blush+Hair+and+Spa,+9475+US-90,+Daphne,+AL+36526&output=embed"
                      width="100%"
                      className="h-full min-h-[180px] md:h-[200px]"
                      style={{ border: 0, pointerEvents: 'none' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Blush Hair and Spa Location"
                    ></iframe>
                    <div className="absolute inset-0 bg-blush-pink/0 group-hover:bg-blush-pink/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-blush-pink text-white px-4 py-2 rounded-lg font-semibold text-sm">
                        Get Directions
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blush-dark mb-6">Send us a Message</h3>
              <ContactForm formType="contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

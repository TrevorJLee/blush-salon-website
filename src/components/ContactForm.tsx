import { useState, type FormEvent } from 'react';

interface ContactFormProps {
  formType?: 'contact' | 'career';
}

const ContactForm = ({ formType = 'contact' }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Build email body from form data
    const firstName = formData.get('firstName')?.toString() || '';
    const lastName = formData.get('lastName')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const position = formData.get('position')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';

    const isCareer = formType === 'career';
    const emailSubject = isCareer
      ? `Career Application - ${position} - ${firstName} ${lastName}`
      : subject || `Contact Form - ${firstName} ${lastName}`;

    let body = `Name: ${firstName} ${lastName}\n`;
    body += `Email: ${email}\n`;
    body += `Phone: ${phone}\n`;
    if (isCareer && position) body += `Position: ${position}\n`;
    body += `\nMessage:\n${message}`;

    const mailtoLink = `mailto:beautiful@blushhairandspa.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <div className="bg-blush-peach/50 rounded-lg p-8 text-center">
        <svg className="w-16 h-16 text-blush-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-blush-dark mb-2">Thank You!</h3>
        <p className="text-blush-grey">
          {formType === 'career'
            ? "We've received your application and will be in touch soon."
            : "We've received your message and will get back to you shortly."}
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-blush-pink hover:text-blush-gold transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className={`grid gap-6 ${formType === 'career' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-blush-dark mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 border border-blush-grey/30 rounded focus:outline-none focus:border-blush-pink transition-colors"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-blush-dark mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 border border-blush-grey/30 rounded focus:outline-none focus:border-blush-pink transition-colors"
          />
        </div>
      </div>

      <div className={`grid gap-6 ${formType === 'career' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-blush-dark mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-blush-grey/30 rounded focus:outline-none focus:border-blush-pink transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-blush-dark mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-blush-grey/30 rounded focus:outline-none focus:border-blush-pink transition-colors"
          />
        </div>
      </div>

      {formType === 'career' && (
        <>
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-blush-dark mb-2">
              Position Interested In *
            </label>
            <select
              id="position"
              name="position"
              required
              className="w-full px-4 py-3 border border-blush-grey/30 rounded focus:outline-none focus:border-blush-pink transition-colors bg-white"
            >
              <option value="">Select a position...</option>
              <option value="stylist">Hair Stylist</option>
              <option value="colorist">Color Specialist</option>
              <option value="receptionist">Receptionist</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-blush-dark mb-2">
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="w-full px-4 py-3 border border-blush-grey/30 rounded focus:outline-none focus:border-blush-pink transition-colors bg-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blush-pink file:text-white file:cursor-pointer"
            />
          </div>
        </>
      )}

      {formType === 'contact' && (
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-blush-dark mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-blush-grey/30 rounded focus:outline-none focus:border-blush-pink transition-colors"
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-blush-dark mb-2">
          {formType === 'career' ? 'Tell us about yourself *' : 'Message *'}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={formType === 'career'
            ? 'Share your background, specialties, and why you want to join Blush...'
            : 'How can we help you?'
          }
          className="w-full px-4 py-3 border border-blush-grey/30 rounded focus:outline-none focus:border-blush-pink transition-colors resize-none"
        />
      </div>

      <input type="hidden" name="_formType" value={formType} />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blush-pink text-white py-4 px-8 text-sm tracking-wider uppercase hover:bg-blush-gold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : formType === 'career' ? 'Submit Application' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;

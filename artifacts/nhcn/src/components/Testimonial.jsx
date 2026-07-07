import React from 'react';

const testimonials = [
  {
    name:     'Gopal Das',
    location: 'Guwahati, Assam',
    stars:    5,
    text:     '"After struggling to find a specialist in our area for months, North East Healthcare Network connected us with a cardiologist in Guwahati within days. They even arranged transportation for my father\'s appointment."',
  },
  {
    name:     'Mimi Choudhury',
    location: 'Imphal, Manipur',
    stars:    4,
    text:     '"When my daughter had a high fever at night, I panicked not knowing where to go. NEHN\'s emergency service connected me with a pediatrician available for virtual consultation immediately. Such peace of mind!"',
  },
  {
    name:     'Dr. Samir Baruah',
    location: 'Shillong, Meghalaya',
    stars:    4,
    text:     '"Registering with NEHN has transformed my practice. They manage scheduling and patient coordination efficiently, allowing me to focus on providing care while reaching patients across remote areas."',
  },
];

const StarRating = ({ count }) => (
  <div className="flex text-yellow-400 mb-3" role="img" aria-label={`${count} out of 5 stars`}>
    {Array(count).fill(0).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Avatar = ({ name }) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="w-12 h-12 rounded-full bg-blue-950 flex items-center justify-center mr-4 flex-shrink-0">
      <span className="text-white font-semibold text-sm">{initials}</span>
    </div>
  );
};

export const Testimonial = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say About Us</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map(({ name, location, stars, text }) => (
          <div key={name} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Avatar name={name} />
              <div>
                <h4 className="font-semibold text-gray-900">{name}</h4>
                <p className="text-sm text-gray-600">{location}</p>
              </div>
            </div>
            <StarRating count={stars} />
            <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;

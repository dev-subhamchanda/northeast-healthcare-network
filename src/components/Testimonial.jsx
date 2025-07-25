export const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say About Us</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" alt="User Profile" className="w-12 h-12 rounded-full object-cover mr-4" />
              <div>
                <h4 className="font-semibold text-gray-900">Gopal Das</h4>
                <p className="text-sm text-gray-600">Guwahati, Assam</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">"After struggling to find a specialist in our area for months, North East Healthcare Network connected us with a cardiologist in Guwahati within days. They even arranged transportation for my father's appointment."</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" alt="Young mother holding child with relieved expression near medical center" className="w-12 h-12 rounded-full object-cover mr-4" />
              <div>
                <h4 className="font-semibold text-gray-900">Mimi Choudhury</h4>
                <p className="text-sm text-gray-600">Imphal, Manipur</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {Array(4).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">"When my daughter had a high fever at night, I panicked not knowing where to go. NEHN's emergency service connected me with a pediatrician available for virtual consultation immediately. Such peace of mind!"</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/256/avatar-default-icon.png" alt="Middle-aged male doctor in white coat standing confidently in clinic setting" className="w-12 h-12 rounded-full object-cover mr-4" />
              <div>
                <h4 className="font-semibold text-gray-900">Dr. Samir Baruah</h4>
                <p className="text-sm text-gray-600">Shillong, Meghalaya</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">
              {Array(4).fill(0).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600">"Registering with NEHN has transformed my practice. They manage scheduling and patient coordination efficiently, allowing me to focus on providing care while reaching patients across remote areas."</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
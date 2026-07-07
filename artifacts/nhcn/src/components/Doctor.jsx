import React, { useState, useCallback } from 'react';

const doctors = [
  { name: "Dr. Anita Das",    specialization: "Cardiologist",      location: "Guwahati, Assam",          experience: "10+ years", contact: "anita@example.com",  phone: "+91-9876543210", hospital: "Apollo Hospital, Guwahati",         available: "24 July 2025, 10:00 AM - 1:00 PM",  photo: `/doctors/anita.jpg`  },
  { name: "Dr. Rakesh Boro",  specialization: "Dermatologist",     location: "Shillong, Meghalaya",      experience: "8+ years",  contact: "rakesh@example.com", phone: "+91-9123456780", hospital: "Shillong Skin Clinic",               available: "25 July 2025, 2:00 PM - 5:00 PM",   photo: `/doctors/rakesh.jpg` },
  { name: "Dr. Priya Chhetri",specialization: "Pediatrician",      location: "Imphal, Manipur",          experience: "12+ years", contact: "priya@example.com",  phone: "+91-9812345678", hospital: "Imphal Children's Hospital",         available: "26 July 2025, 9:00 AM - 12:00 PM",  photo: `/doctors/priya.jpg`  },
  { name: "Dr. Amit Kumar",   specialization: "Orthopedic",        location: "Agartala, Tripura",        experience: "15+ years", contact: "amit@example.com",   phone: "+91-9988776655", hospital: "Tripura Bone & Joint Clinic",        available: "24 July 2025, 4:00 PM - 7:00 PM",   photo: `/doctors/amit.jpg`   },
  { name: "Dr. Sneha Roy",    specialization: "Gynecologist",      location: "Silchar, Assam",           experience: "9+ years",  contact: "sneha@example.com",  phone: "+91-9078563412", hospital: "Silchar Women's Health Center",      available: "25 July 2025, 11:00 AM - 2:00 PM",  photo: `/doctors/sneha.jpg`  },
  { name: "Dr. Bijoy Singha", specialization: "Neurologist",       location: "Aizawl, Mizoram",         experience: "11+ years", contact: "bijoy@example.com",  phone: "+91-9362784510", hospital: "Mizoram Neuro Care",                 available: "26 July 2025, 10:00 AM - 1:00 PM",  photo: `/doctors/bijoy.jpg`  },
  { name: "Dr. Namita Deka",  specialization: "ENT Specialist",    location: "Tezpur, Assam",            experience: "7+ years",  contact: "namita@example.com", phone: "+91-9503214678", hospital: "Tezpur ENT Clinic",                  available: "24 July 2025, 3:00 PM - 6:00 PM",   photo: `/doctors/namita.jpg` },
  { name: "Dr. Sanjay Thapa", specialization: "General Physician", location: "Kohima, Nagaland",         experience: "13+ years", contact: "sanjay@example.com", phone: "+91-9782316540", hospital: "Kohima General Hospital",            available: "25 July 2025, 9:00 AM - 12:00 PM",  photo: `/doctors/sanjay.jpg` },
  { name: "Dr. Meena Das",    specialization: "Dentist",           location: "Itanagar, Arunachal Pradesh", experience: "6+ years", contact: "meena@example.com", phone: "+91-9845231890", hospital: "Smile Dental Care, Itanagar",       available: "26 July 2025, 2:00 PM - 5:00 PM",   photo: `/doctors/meena.jpg`  },
  { name: "Dr. Rajiv Barman", specialization: "Urologist",         location: "Dibrugarh, Assam",         experience: "14+ years", contact: "rajiv@example.com",  phone: "+91-9023147856", hospital: "Dibrugarh Urology Center",           available: "27 July 2025, 11:00 AM - 2:00 PM",  photo: `/doctors/rajiv.jpg`  },
];

const specializations = ["All Specializations", ...Array.from(new Set(doctors.map(d => d.specialization)))];
const locations       = ["All Locations",       ...Array.from(new Set(doctors.map(d => d.location.split(',')[0])))];
const availabilities  = ["All", "Today", "Tomorrow", "This Week", "Next Week"];

// Modal defined outside Doctor so it is not re-created on each render
function DoctorDetailsModal({ doctor, onClose }) {
  if (!doctor) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex items-center mb-5 gap-4">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-100"
            loading="lazy"
            decoding="async"
          />
          <div>
            <h4 className="text-xl font-bold text-gray-900">{doctor.name}</h4>
            <p className="text-blue-800 font-medium text-sm">{doctor.specialization}</p>
            <p className="text-gray-500 text-xs mt-0.5">{doctor.location}</p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          {[
            ['Hospital',    doctor.hospital   ],
            ['Experience',  doctor.experience ],
            ['Available',   doctor.available  ],
            ['Contact',     doctor.contact    ],
            ['Phone',       doctor.phone      ],
          ].map(([label, val]) => (
            <div key={label} className="flex gap-2">
              <span className="font-medium w-24 flex-shrink-0 text-gray-900">{label}:</span>
              <span className="text-gray-600">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function isAvailable(available, filter) {
  if (filter === "All") return true;
  const today = new Date();
  const dateMatch = available.match(/(\d{1,2}) (\w+) (\d{4})/);
  if (!dateMatch) return false;
  const [, day, month, year] = dateMatch;
  const months = { January:0,February:1,March:2,April:3,May:4,June:5,July:6,August:7,September:8,October:9,November:10,December:11 };
  const docDate = new Date(Number(year), months[month], Number(day));
  if (filter === "Today") return docDate.toDateString() === today.toDateString();
  if (filter === "Tomorrow") { const t = new Date(today); t.setDate(today.getDate()+1); return docDate.toDateString() === t.toDateString(); }
  if (filter === "This Week")  { const e = new Date(today); e.setDate(today.getDate()+(6-today.getDay())); return docDate >= today && docDate <= e; }
  if (filter === "Next Week")  { const s = new Date(today); s.setDate(today.getDate()+(7-today.getDay())); const e = new Date(s); e.setDate(s.getDate()+6); return docDate >= s && docDate <= e; }
  return true;
}

const Doctor = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations");
  const [selectedLocation, setSelectedLocation]             = useState("All Locations");
  const [selectedAvailability, setSelectedAvailability]     = useState("All");
  const [visibleCount, setVisibleCount]                     = useState(3);
  const [selectedDoctor, setSelectedDoctor]                 = useState(null);

  const filteredDoctors = doctors.filter(doc => {
    const specMatch  = selectedSpecialization === "All Specializations" || doc.specialization === selectedSpecialization;
    const locMatch   = selectedLocation === "All Locations"             || doc.location.split(',')[0] === selectedLocation;
    const availMatch = isAvailable(doc.available, selectedAvailability);
    return specMatch && locMatch && availMatch;
  });

  const visibleDoctors = filteredDoctors.slice(0, visibleCount);

  const handleApplyFilters = useCallback(e => {
    e.preventDefault();
    setVisibleCount(3);
  }, []);

  const closeModal = useCallback(() => setSelectedDoctor(null), []);

  return (
    <>
      <DoctorDetailsModal doctor={selectedDoctor} onClose={closeModal} />
      <section id="doctors" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Healthcare Professionals</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Search our network of trusted medical professionals across Northeast India
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="flex flex-col md:flex-row">
              {/* Filters */}
              <div className="md:w-1/3 bg-blue-950 text-white p-6">
                <h3 className="text-xl font-semibold mb-4">Refine Your Search</h3>
                <form className="space-y-4" onSubmit={handleApplyFilters}>
                  {[
                    { label: 'Specialization', value: selectedSpecialization, onChange: setSelectedSpecialization, options: specializations },
                    { label: 'Location',        value: selectedLocation,       onChange: setSelectedLocation,       options: locations       },
                    { label: 'Availability',    value: selectedAvailability,   onChange: setSelectedAvailability,   options: availabilities  },
                  ].map(({ label, value, onChange, options }) => (
                    <div key={label}>
                      <label className="block text-sm font-medium mb-2">{label}</label>
                      <select
                        className="w-full bg-blue-900 border border-blue-800 text-white rounded-md px-3 py-2 text-sm"
                        value={value}
                        onChange={e => onChange(e.target.value)}
                      >
                        {options.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-medium w-full py-2 px-4 rounded-md transition duration-300 mt-4 btn-hover"
                  >
                    Apply Filters
                  </button>
                </form>
              </div>

              {/* Doctor list */}
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Available Doctors</h3>
                </div>
                <div className="space-y-6">
                  {visibleDoctors.length === 0 && (
                    <div className="text-center text-gray-500 py-8">No doctors found for selected filters.</div>
                  )}
                  {visibleDoctors.map((doc, idx) => (
                    <div
                      key={doc.name + idx}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300 cursor-pointer"
                    >
                      <div className="flex items-start">
                        <img
                          src={doc.photo}
                          alt={doc.name}
                          className="w-20 h-20 rounded-full object-cover mr-4 flex-shrink-0"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="flex-grow min-w-0">
                          <h4 className="text-lg font-semibold text-gray-900">{doc.name}</h4>
                          <p className="text-blue-800 font-medium text-sm">{doc.specialization}</p>
                          <div className="mt-2 flex items-center text-gray-600 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="truncate">{doc.hospital} ({doc.location})</span>
                          </div>
                          <div className="mt-2 text-sm">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                              Available: {doc.available}
                            </span>
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            <span className="font-medium">Experience:</span> {doc.experience}
                          </div>
                          <button
                            className="mt-3 text-sm bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-md transition duration-300 btn-hover"
                            onClick={() => setSelectedDoctor(doc)}
                            type="button"
                          >
                            Get Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {visibleCount < filteredDoctors.length && (
                  <div className="mt-8 text-center">
                    <button
                      className="border border-blue-800 text-blue-800 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition duration-300 btn-hover"
                      onClick={() => setVisibleCount(c => c + 3)}
                    >
                      Load More Doctors
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctor;

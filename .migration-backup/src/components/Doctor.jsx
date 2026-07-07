import React, { useState } from 'react';

const Doctor = () => {
    const doctors = [
        {
name: "Dr. Anita Das",
specialization: "Cardiologist",
location: "Guwahati, Assam",
experience: "10+ years",
contact: "anita@example.com",
phone: "+91-9876543210",
hospital: "Apollo Hospital, Guwahati",
available: "24 July 2025, 10:00 AM - 1:00 PM",
photo: `/doctors/anita.jpg`
},
{
name: "Dr. Rakesh Boro",
specialization: "Dermatologist",
location: "Shillong, Meghalaya",
experience: "8+ years",
contact: "rakesh@example.com",
phone: "+91-9123456780",
hospital: "Shillong Skin Clinic",
available: "25 July 2025, 2:00 PM - 5:00 PM",
photo: `/doctors/rakesh.jpg`
},
{
name: "Dr. Priya Chhetri",
specialization: "Pediatrician",
location: "Imphal, Manipur",
experience: "12+ years",
contact: "priya@example.com",
phone: "+91-9812345678",
hospital: "Imphal Children’s Hospital",
available: "26 July 2025, 9:00 AM - 12:00 PM",
photo: `/doctors/priya.jpg`
},
{
name: "Dr. Amit Kumar",
specialization: "Orthopedic",
location: "Agartala, Tripura",
experience: "15+ years",
contact: "amit@example.com",
phone: "+91-9988776655",
hospital: "Tripura Bone & Joint Clinic",
available: "24 July 2025, 4:00 PM - 7:00 PM",
photo: `/doctors/amit.jpg`
},
{
name: "Dr. Sneha Roy",
specialization: "Gynecologist",
location: "Silchar, Assam",
experience: "9+ years",
contact: "sneha@example.com",
phone: "+91-9078563412",
hospital: "Silchar Women’s Health Center",
available: "25 July 2025, 11:00 AM - 2:00 PM",
photo: `/doctors/sneha.jpg`
},
{
name: "Dr. Bijoy Singha",
specialization: "Neurologist",
location: "Aizawl, Mizoram",
experience: "11+ years",
contact: "bijoy@example.com",
phone: "+91-9362784510",
hospital: "Mizoram Neuro Care",
available: "26 July 2025, 10:00 AM - 1:00 PM",
photo: `/doctors/bijoy.jpg`
},
{
name: "Dr. Namita Deka",
specialization: "ENT Specialist",
location: "Tezpur, Assam",
experience: "7+ years",
contact: "namita@example.com",
phone: "+91-9503214678",
hospital: "Tezpur ENT Clinic",
available: "24 July 2025, 3:00 PM - 6:00 PM",
photo: `/doctors/namita.jpg`
},
{
name: "Dr. Sanjay Thapa",
specialization: "General Physician",
location: "Kohima, Nagaland",
experience: "13+ years",
contact: "sanjay@example.com",
phone: "+91-9782316540",
hospital: "Kohima General Hospital",
available: "25 July 2025, 9:00 AM - 12:00 PM",
photo: `/doctors/sanjay.jpg`
},
{
name: "Dr. Meena Das",
specialization: "Dentist",
location: "Itanagar, Arunachal Pradesh",
experience: "6+ years",
contact: "meena@example.com",
phone: "+91-9845231890",
hospital: "Smile Dental Care, Itanagar",
available: "26 July 2025, 2:00 PM - 5:00 PM",
photo: `/doctors/meena.jpg`
},
{
name: "Dr. Rajiv Barman",
specialization: "Urologist",
location: "Dibrugarh, Assam",
experience: "14+ years",
contact: "rajiv@example.com",
phone: "+91-9023147856",
hospital: "Dibrugarh Urology Center",
available: "27 July 2025, 11:00 AM - 2:00 PM",
photo: `/doctors/rajiv.jpg`
}
    ];

    const specializations = [
        "All Specializations",
        ...Array.from(new Set(doctors.map(d => d.specialization)))
    ];
    const locations = [
        "All Locations",
        ...Array.from(new Set(doctors.map(d => d.location.split(',')[0])))
    ];
    const availabilities = [
        "All",
        "Today",
        "Tomorrow",
        "This Week",
        "Next Week"
    ];

    const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations");
    const [selectedLocation, setSelectedLocation] = useState("All Locations");
    const [selectedAvailability, setSelectedAvailability] = useState("All");
    const [visibleCount, setVisibleCount] = useState(3);

    // Modal state
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    function isAvailable(available, filter) {
        if (filter === "All") return true;
        const today = new Date();
        const dateMatch = available.match(/(\d{1,2}) (\w+) (\d{4})/);
        if (!dateMatch) return false;
        const [_, day, month, year] = dateMatch;
        const months = {
            January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
            July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
        };
        const docDate = new Date(year, months[month], day);

        if (filter === "Today") {
            return docDate.toDateString() === today.toDateString();
        }
        if (filter === "Tomorrow") {
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            return docDate.toDateString() === tomorrow.toDateString();
        }
        if (filter === "This Week") {
            const weekEnd = new Date(today);
            weekEnd.setDate(today.getDate() + (6 - today.getDay()));
            return docDate >= today && docDate <= weekEnd;
        }
        if (filter === "Next Week") {
            const nextWeekStart = new Date(today);
            nextWeekStart.setDate(today.getDate() + (7 - today.getDay()));
            const nextWeekEnd = new Date(nextWeekStart);
            nextWeekEnd.setDate(nextWeekStart.getDate() + 6);
            return docDate >= nextWeekStart && docDate <= nextWeekEnd;
        }
        return true;
    }

    const filteredDoctors = doctors.filter(doc => {
        const specMatch = selectedSpecialization === "All Specializations" || doc.specialization === selectedSpecialization;
        const locMatch = selectedLocation === "All Locations" || doc.location.split(',')[0] === selectedLocation;
        const availMatch = isAvailable(doc.available, selectedAvailability);
        return specMatch && locMatch && availMatch;
    });

    const visibleDoctors = filteredDoctors.slice(0, visibleCount);

    function handleApplyFilters(e) {
        e.preventDefault();
        setVisibleCount(3);
    }

    // Modal component
    function DoctorDetailsModal({ doctor, onClose }) {
        if (!doctor) return null;
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                        onClick={onClose}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <div className="flex items-center mb-4">
                        <img src={doctor.photo} alt={doctor.name} className="w-20 h-20 rounded-full object-cover mr-4" />
                        <div>
                            <h4 className="text-xl font-bold text-gray-900">{doctor.name}</h4>
                            <p className="text-blue-800 font-medium">{doctor.specialization}</p>
                        </div>
                    </div>
                    <div className="mb-2 text-gray-700">
                        <span className="font-medium">Hospital:</span> {doctor.hospital}
                    </div>
                    <div className="mb-2 text-gray-700">
                        <span className="font-medium">Location:</span> {doctor.location}
                    </div>
                    <div className="mb-2 text-gray-700">
                        <span className="font-medium">Experience:</span> {doctor.experience}
                    </div>
                    <div className="mb-2 text-gray-700">
                        <span className="font-medium">Contact:</span> {doctor.contact}
                    </div>
                    <div className="mb-2 text-gray-700">
                        <span className="font-medium">Phone:</span> {doctor.phone}
                    </div>
                    <div className="mb-2 text-gray-700">
                        <span className="font-medium">Available:</span> {doctor.available}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {selectedDoctor && (
                <DoctorDetailsModal
                    doctor={selectedDoctor}
                    onClose={() => setSelectedDoctor(null)}
                />
            )}
            <section id="doctors" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Healthcare Professionals</h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">Search our network of trusted medical professionals across Northeast India</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-blue-950 text-white p-6">
                                <h3 className="text-xl font-semibold mb-4">Refine Your Search</h3>
                                <form className="space-y-4" onSubmit={handleApplyFilters}>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Specialization</label>
                                        <select
                                            className="w-full bg-blue-900 border border-blue-800 text-white rounded-md px-3 py-2 text-sm"
                                            value={selectedSpecialization}
                                            onChange={e => setSelectedSpecialization(e.target.value)}
                                        >
                                            {specializations.map(spec => (
                                                <option key={spec}>{spec}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Location</label>
                                        <select
                                            className="w-full bg-blue-900 border border-blue-800 text-white rounded-md px-3 py-2 text-sm"
                                            value={selectedLocation}
                                            onChange={e => setSelectedLocation(e.target.value)}
                                        >
                                            {locations.map(loc => (
                                                <option key={loc}>{loc}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Availability</label>
                                        <select
                                            className="w-full bg-blue-900 border border-blue-800 text-white rounded-md px-3 py-2 text-sm"
                                            value={selectedAvailability}
                                            onChange={e => setSelectedAvailability(e.target.value)}
                                        >
                                            {availabilities.map(avail => (
                                                <option key={avail}>{avail}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-red-600 hover:bg-red-700 text-white font-medium w-full py-2 px-4 rounded-md transition duration-300 mt-4 btn-hover"
                                    >
                                        Apply Filters
                                    </button>
                                </form>
                            </div>
                            <div className="md:w-2/3 p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900">Available Doctors</h3>
                                </div>
                                {/* Doctor Cards */}
                                <div className="space-y-6">
                                    {visibleDoctors.length === 0 && (
                                        <div className="text-center text-gray-500 py-8">No doctors found for selected filters.</div>
                                    )}
                                    {visibleDoctors.map((doc, idx) => (
                                        <div key={doc.name + idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300 cursor-pointer">
                                            <div className="flex items-start">
                                                <img src={doc.photo} alt={doc.name} className="w-20 h-20 rounded-full object-cover mr-4" />
                                                <div className="flex-grow">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="text-lg font-semibold text-gray-900">{doc.name}</h4>
                                                            <p className="text-blue-800 font-medium">{doc.specialization}</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-2 flex items-center text-gray-600 text-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        <span>{doc.hospital} ({doc.location})</span>
                                                    </div>
                                                    <div className="mt-2 text-sm text-gray-600">
                                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Available: {doc.available}</span>
                                                    </div>
                                                    <div className="mt-2 text-sm text-gray-600">
                                                        <span className="font-medium">Experience:</span> {doc.experience}
                                                    </div>
                                                    <div className="mt-2 text-sm text-gray-600">
                                                        <span className="font-medium">Contact:</span> {doc.contact} | {doc.phone}
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

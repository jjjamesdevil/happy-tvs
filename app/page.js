'use client';

import { useState } from 'react';

export default function TVSShowroomWebsite() {
  const whatsappNumber = '919876543210';
  const googleMapsLink = 'https://maps.google.com';

  const [language, setLanguage] = useState('hindi');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [bike, setBike] = useState('TVS Raider');

  const bikes = [
    {
      name: 'TVS Raider',
      mileage: '67 km/l',
      emi: '₹2,499/month',
      image:
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'TVS Apache RTR',
      mileage: '45 km/l',
      emi: '₹3,499/month',
      image:
        'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'TVS Jupiter',
      mileage: '50 km/l',
      emi: '₹2,299/month',
      image:
        'https://images.unsplash.com/photo-1622185135505-2d7950039942?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const text = {
    hindi: {
      title: 'Happy TVS - Bihar Ka Trusted Bike Showroom',
      subtitle:
        'Easy EMI • Fast Finance • Test Ride • Best Service • Genuine Parts',
      inquiry: 'Instant Finance Inquiry',
      reviews: 'Customer Reviews',
    },
    english: {
      title: 'Happy TVS - Trusted Bike Showroom In Bihar',
      subtitle:
        'Easy EMI • Fast Finance • Test Ride • Best Service • Genuine Parts',
      inquiry: 'Instant Finance Inquiry',
      reviews: 'Customer Reviews',
    },
    bhojpuri: {
      title: 'Happy TVS - Bharosa Ke Bike Showroom',
      subtitle:
        'Aasan EMI • Jaldi Finance • Test Ride • Best Service',
      inquiry: 'Finance Inquiry',
      reviews: 'Customer Review',
    },
  };

  const current = text[language];

  const submitForm = () => {
    if (!name || !mobile) {
      alert('Please fill all details');
      return;
    }

    const message = `Hello Happy TVS,%0AName: ${name}%0AMobile: ${mobile}%0ABike: ${bike}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`);
  };

  const bookTestRide = (bikeName) => {
    const msg = `Hello Happy TVS, I want a test ride for ${bikeName}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-black text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-red-400 mb-3">
              Happy TVS Showroom
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              {current.title}
            </h1>

            <p className="text-lg text-gray-300 mb-8">
              {current.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => bookTestRide('TVS Bike')}
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold shadow-lg"
              >
                Book Test Ride
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=1400&auto=format&fit=crop"
              alt="TVS Bike"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Language Buttons */}
      <section className="px-6 py-8 bg-white">
        <div className="max-w-7xl mx-auto flex gap-3 flex-wrap">
          <button
            onClick={() => setLanguage('hindi')}
            className="bg-black text-white px-4 py-2 rounded-xl"
          >
            हिन्दी
          </button>

          <button
            onClick={() => setLanguage('english')}
            className="bg-white border px-4 py-2 rounded-xl"
          >
            English
          </button>

          <button
            onClick={() => setLanguage('bhojpuri')}
            className="bg-white border px-4 py-2 rounded-xl"
          >
            भोजपुरी
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            'Easy EMI Approval',
            'Low Down Payment',
            'Free Test Ride',
            'Fast Service Support',
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-md text-center"
            >
              <h3 className="font-bold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Bikes Section */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">Popular Bikes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bikes.map((bikeItem, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
              >
                <img
                  src={bikeItem.image}
                  alt={bikeItem.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {bikeItem.name}
                  </h3>

                  <div className="space-y-2 text-gray-700 mb-5">
                    <p>Mileage: {bikeItem.mileage}</p>
                    <p>EMI Starts: {bikeItem.emi}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        alert(`${bikeItem.name} EMI Starts ${bikeItem.emi}`)
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded-xl w-full"
                    >
                      EMI Details
                    </button>

                    <button
                      onClick={() => bookTestRide(bikeItem.name)}
                      className="border border-black px-4 py-2 rounded-xl w-full"
                    >
                      Test Ride
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Form */}
      <section className="px-6 py-16 bg-red-600 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              {current.inquiry}
            </h2>

            <p className="text-lg text-red-100">
              Aadhaar + PAN pe easy finance options.
            </p>
          </div>

          <div className="bg-white text-black rounded-3xl p-8 shadow-2xl">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border p-3 rounded-xl"
              />

              <select
                value={bike}
                onChange={(e) => setBike(e.target.value)}
                className="w-full border p-3 rounded-xl"
              >
                <option>TVS Raider</option>
                <option>TVS Apache RTR</option>
                <option>TVS Jupiter</option>
              </select>

              <button
                onClick={submitForm}
                className="bg-black text-white w-full py-3 rounded-2xl font-semibold"
              >
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center">
            {current.reviews}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Bahut achha finance support mila aur delivery fast hua.',
              'Staff behavior friendly tha aur service bhi achhi lagi.',
              'Test ride ke baad Apache liya, experience mast raha.',
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-lg"
              >
                <p className="text-gray-700 mb-4">“{review}”</p>
                <h4 className="font-bold">Verified Customer</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="px-6 py-16 text-center bg-gray-200">
        <h2 className="text-4xl font-bold mb-4">
          Visit Happy TVS Showroom
        </h2>

        <a
          href={googleMapsLink}
          target="_blank"
          className="bg-black text-white px-6 py-3 rounded-2xl inline-block"
        >
          Open Google Maps
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">Happy TVS</h3>

            <p className="text-gray-400">
              Trusted bike showroom with finance and service support.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Bikes</li>
              <li>Finance</li>
              <li>Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Contact</h4>

            <ul className="space-y-2 text-gray-400">
              <li>📍 Harchanda Chowk, Deoria Road, Muzaffarpur</li>
<li>📞 +91 8252511143</li>
<li>✉️ happytvs2022@gmail.com</li>
<li>🟢 WhatsApp Support Available</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
 }

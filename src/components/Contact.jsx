import React from 'react';

const Contact = () => (
  <section className="py-16 bg-slate-900" id="contact">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center flex items-center gap-3 justify-center">
        <span className="text-emerald-300 text-4xl font-mono">/</span> contact me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Email */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-emerald-400 text-slate-900 rounded-full text-2xl shadow-md">
            📧
          </div>
          <h4 className="text-white font-semibold text-lg">Email</h4>
          <p className="text-gray-300">souptik.sinha@email.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-emerald-400 text-slate-900 rounded-full text-2xl shadow-md">
            📱
          </div>
          <h4 className="text-white font-semibold text-lg">Phone</h4>
          <p className="text-gray-300">+1 (555) 123-4567</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="w-12 h-12 flex items-center justify-center bg-emerald-400 text-slate-900 rounded-full text-2xl shadow-md">
            📍
          </div>
          <h4 className="text-white font-semibold text-lg">Location</h4>
          <p className="text-gray-300">Chicago, IL</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

import React from 'react';

const contactMethods = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-emerald-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-8 0v-1" /></svg>
    ),
    label: 'Email',
    value: 'souptik.sinha@email.com',
    href: 'mailto:souptik.sinha@email.com',
    bg: 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800',
    text: 'text-emerald-200',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-emerald-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
    ),
    label: 'Phone',
    value: '+1 (872) 288-5897',
    href: 'tel:+18722885897',
    bg: 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800',
    text: 'text-emerald-200',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-emerald-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    label: 'Location',
    value: 'Chicago, IL',
    href: null,
    bg: 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800',
    text: 'text-emerald-200',
  },
];

const Contact = () => (
  <section className="py-12 bg-slate-900" id="contact">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center gap-3 justify-center">
        <span className="text-emerald-300 text-3xl font-mono">/</span> contact me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href || undefined}
            className={`group flex flex-col items-center md:items-start gap-2 p-4 rounded-2xl shadow-xl transition-transform hover:-translate-y-1 hover:scale-105 ${method.bg} ${method.text} focus:outline-none focus:ring-2 focus:ring-emerald-400`}
            style={{ textDecoration: 'none', boxShadow: '0 4px 24px 0 rgba(16, 185, 129, 0.08)' }}
            tabIndex={0}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 shadow group-hover:bg-emerald-900 transition">
              {method.icon}
            </div>
            <h4 className="font-semibold text-base">{method.label}</h4>
            <p className="text-sm font-mono break-all">{method.value}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;

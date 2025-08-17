import React from 'react';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'souptiksinha1@gmail.com',
    href: 'mailto:souptiksinha1@gmail.com',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (872) 288-5897',
    href: 'tel:+18722885897',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Chicago, IL',
    href: null,
  },
];

const Contact = () => (
  <section className="section-padding gradient-bg" id="contact">
    <div className="container-custom">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-gradient font-black mb-6">
          Get In Touch
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Let's discuss how we can work together to bring your ideas to life.
        </p>
      </motion.div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {method.href ? (
              <a
                href={method.href}
                className="group block p-6 lg:p-8 project-card card-hover text-center touch-manipulation min-h-[44px] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-6 flex items-center justify-center rounded-2xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                  <div className="text-white group-hover:text-white/90 transition-colors duration-300 scale-75 lg:scale-100">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">{method.label}</h3>
                <p className="text-white/70 font-mono text-sm lg:text-base break-all">{method.value}</p>
              </a>
            ) : (
              <div className="p-6 lg:p-8 project-card text-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 lg:mb-6 flex items-center justify-center rounded-2xl bg-white/10">
                  <div className="text-white scale-75 lg:scale-100">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">{method.label}</h3>
                <p className="text-white/70 font-mono text-sm lg:text-base">{method.value}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="max-w-2xl mx-auto p-6 lg:p-8 project-card">
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Ready to start a project?</h3>
          <p className="text-white/70 mb-6 text-sm lg:text-base">
            I'm available for freelance work and full-time opportunities. 
            Let's discuss your project requirements and timeline.
          </p>
          <a 
            href="mailto:souptiksinha1@gmail.com?subject=Let's work together!&body=Hi Souptik,%0D%0A%0D%0AI'd like to discuss a project opportunity with you.%0D%0A%0D%0ABest regards,"
            className="inline-block w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-white text-black font-semibold rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer touch-manipulation min-h-[48px] flex items-center justify-center text-center"
          >
            Send me a message
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
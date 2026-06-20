import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (location.state && location.state.service) {
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry regarding ${location.state.service}`,
        message: `Hi Nextshop Team,\n\nI am interested in your "${location.state.service}" solutions. I would love to learn more about the design options, timeline, and custom features for our project.`
      }));
    }
  }, [location.state]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    setErrors({});
    
    // Reset form fields
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      
      {/* Background glow circle */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-indigo-50/20 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Start <span className="text-gradient font-black">Something New</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
            Have an idea or project spec? Contact us directly. We are ready to turn your concept into functional code.
          </p>
        </div>

        {/* Form and info split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Contact Details Pane - left */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-0"></div>

            <div className="space-y-8 relative z-10">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">Get in touch</span>
                <h3 className="text-2xl font-extrabold tracking-tight">Contact Information</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Have a question or looking to build a custom solution? Reach out to us via any channel.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email Address", val: "hello@nextshop.com" },
                  { icon: Phone, title: "Phone Support", val: "+91 99999 99999" },
                  { icon: MapPin, title: "Office Hub", val: "Bengaluru, India" },
                  { icon: Clock, title: "Operational Hours", val: "Monday - Friday, 9am - 6pm" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                          {item.title}
                        </span>
                        <span className="block text-xs md:text-sm font-semibold text-slate-200 mt-0.5">
                          {item.val}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 mt-12 border-t border-slate-800 relative z-10">
              <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-widest">Typical SLA</span>
              <span className="text-xs font-bold text-indigo-400 block mt-1">First response in less than 4 hours.</span>
            </div>

          </div>

          {/* Form Pane - right */}
          <div className="lg:col-span-7 bg-white/70 backdrop-blur-md border border-slate-200/50 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-center">
            
            {submitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 animate-bounce" />
                <div>
                  <h3 className="font-extrabold text-lg text-slate-850">Message Sent Successfully!</h3>
                  <p className="text-xs md:text-sm text-slate-500 font-light mt-1 max-w-sm">
                    Thank you for reaching out. We will review your message details and get back to your email inbox shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-slate-50/50 border ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-indigo-500'} focus:outline-none rounded-xl px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 transition-colors`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
                  </div>

                  {/* Email input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-slate-50/50 border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-indigo-500'} focus:outline-none rounded-xl px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 transition-colors`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Subject Line
                  </label>
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Project specs / consultation..."
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-slate-50/50 border ${errors.subject ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-indigo-500'} focus:outline-none rounded-xl px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 transition-colors`}
                  />
                  {errors.subject && <span className="text-[10px] text-red-500 font-semibold">{errors.subject}</span>}
                </div>

                {/* Message input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Detailed Message
                  </label>
                  <textarea 
                    name="message"
                    rows="4"
                    placeholder="Tell us about your web project timeline, scope, and goals..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-slate-50/50 border ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-indigo-500'} focus:outline-none rounded-xl px-4 py-3.5 text-xs text-slate-800 placeholder-slate-400 transition-colors resize-none`}
                  ></textarea>
                  {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-750 text-white font-semibold py-4 px-6 rounded-2xl shadow-md shadow-indigo-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Team</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

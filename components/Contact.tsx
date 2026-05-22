import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mlgvbyjk', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 xl:py-32 bg-neutral-950 px-6">
      <div className="container mx-auto max-w-4xl xl:max-w-6xl">
        
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl xl:text-5xl font-display font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-400">I'm currently available for freelance projects. Send me a message and let's discuss your vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
           
           {/* Contact Info */}
           <div className="md:col-span-2 bg-neutral-800 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-xl mb-6">Contact Info</h3>
                <div className="space-y-6">
                   <a href="mailto:workwithharinayan@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <Mail size={20} />
                      <span>Email</span>
                   </a>
                </div>
              </div>
              
              <div className="mt-8 md:mt-10">
                <h4 className="text-gray-500 text-sm uppercase font-bold tracking-wider mb-4">Socials</h4>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/mantseditz/" className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-neutral-900 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/harinayanrajpattun/" className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-neutral-900 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
           </div>

           {/* Form */}
           <div className="md:col-span-3 p-6 md:p-10">
                 <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                   <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 xl:py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                    placeholder="John Doe"
                    required
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                   <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 xl:py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                    placeholder="john@example.com"
                    required
                   />
                 </div>
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                   <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 xl:py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                   ></textarea>
                 </div>
                  <button 
                   type="submit" 
                   disabled={status === 'sending'}
                   className="w-full bg-white text-neutral-950 font-bold py-4 xl:py-5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'success' && (
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle size={16} /> Message sent! I'll get back to you soon.
                    </div>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again or email me directly.</p>
                  )}
              </form>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
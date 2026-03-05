import React, { useState } from 'react';
import { HelpCircle, ChevronDown, UserPlus, ClipboardCheck, School, ArrowRight } from 'lucide-react';

const Admission = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    { 
      id: '01', 
      title: "Collect Form", 
      desc: "Visit the school office to collect the official admission form.",
      icon: <UserPlus className="w-6 h-6" /> 
    },
    { 
      id: '02', 
      title: "Submit Docs", 
      desc: "Submit the filled form with Birth Certificate and Transfer Certificate.",
      icon: <ClipboardCheck className="w-6 h-6" /> 
    },
    { 
      id: '03', 
      title: "Verification", 
      desc: "Final verification by the Headmaster followed by fee payment.",
      icon: <School className="w-6 h-6" /> 
    }
  ];

  const faqs = [
    {
      q: "What is the age criteria for Class V?",
      a: "As per Government norms, the student should be 10+ years of age as of 1st January of the academic year."
    },
    {
      q: "Which documents are mandatory for admission?",
      a: "Original Birth Certificate, Aadhaar Card, 2 Passport size photos, and a Transfer Certificate (TC) from the previous school."
    },
    {
      q: "Is there any admission fee for SC/ST students?",
      a: "Panchagrami Saradamani Vidyapith follows all Government schemes; fee concessions are provided as per WB Govt rules."
    }
  ];

  return (
    <section id="admission" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Step-by-Step Process */}
          <div className="space-y-12">
            <div>
              <span className="text-school-blue font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Process</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                How to <span className="text-school-blue">Enroll.</span>
              </h2>
            </div>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.id} className="group flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-school-blue group-hover:bg-school-blue group-hover:text-white transition-all duration-500 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-school-gold font-black text-sm tracking-widest">{step.id}</span>
                      <h4 className="text-xl font-bold text-slate-800">{step.title}</h4>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Modern FAQ Accordion */}
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="text-school-gold w-6 h-6" />
              <h3 className="text-2xl font-black text-slate-900">Admission FAQ</h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-bold text-slate-700 text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-5 pt-0 text-slate-500 text-sm leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-school-blue rounded-2xl text-white flex items-center justify-between group cursor-pointer">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Still have questions?</p>
                <p className="font-bold">Contact Admission Cell</p>
              </div>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Admission;
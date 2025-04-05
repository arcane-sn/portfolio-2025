
import React from 'react';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title">Get In Touch</h2>
          <h3 className="heading-lg mb-6">Let's Build Something Amazing</h3>
          <p className="text-slate-light mb-10">
            I'm currently open to new opportunities and collaborations. Whether you have a question, a proposal, or just want to say hello, feel free to reach out!
          </p>

          <div className="flex justify-center mb-12">
            <a
              href="mailto:ezrasenaputra@gmail.com"
              className="btn btn-primary flex items-center gap-2"
            >
              <Mail size={18} />
              Say Hello
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/arcane-sn"
              className="text-slate-light hover:text-theme-yellow transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ezra-senaputra-9ba7aa182/"
              className="text-slate-light hover:text-theme-yellow transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Is EcoSnap free to use?",
    a: "Yes! EcoSnap is completely free for users and always will be.",
  },
  {
    q: "How accurate is the AI waste detection?",
    a: "Our AI model has over 90% accuracy in classifying common waste types based on image inputs.",
  },
  {
    q: "Can I schedule a pickup directly?",
    a: "Yes, after classification, you’ll have the option to schedule waste pickup through integrated partners.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const FAQ = () => {
  return (
    <section className="py-16 px-6 md:px-20 [background:var(--background-end)] text-base-content ">
      <motion.h2
        className="text-3xl font-bold text-emerald-400 text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="collapse collapse-arrow bg-base-200 rounded-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeIn}
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium text-emerald-400">
              {faq.q}
            </div>
            <div className="collapse-content">
              <p className="text-base-content/80">{faq.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

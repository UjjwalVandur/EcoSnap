"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "Upload",
    desc: "Take a picture of your waste and upload it to our platform.",
  },
  {
    step: "Classify",
    desc: "Our AI identifies the type and predicts the weight of the waste.",
  },
  {
    step: "Dispose or Schedule Pickup",
    desc: "Get suggestions for recycling or schedule a collection instantly.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Steps = () => {
  return (
    <section className="py-16 px-6 md:px-20 [background:var(--background-end)] text-base-content text-center ">
      <motion.h2
        className="text-3xl font-bold text-emerald-400 mb-10 id:steps"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        How to Use EcoSnap
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold text-emerald-400 mb-2">{item.step}</h3>
            <p className="text-base-content/80">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Steps;

import { motion } from 'framer-motion';

export const ThankYou = () => {
  return (
    <section
      id="thank-you"
      className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-200 text-center"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Thank You!
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Thank you for being a valuable customer. We have a surprise gift for you!
        </motion.p>
        <motion.button
          onClick={() => alert('Gift Redeemed!')}
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Redeem Gift
        </motion.button>
      </div>
    </section>
  );
};

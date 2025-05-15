import { motion } from 'framer-motion';
import Link from 'next/link';

export const HealthyFood = () => {
  return (
    <section id="healthy-food" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1490645935147-36bde53e6866"
            alt="Healthy Food"
            className="w-full rounded-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-8 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Fresh, Healthy, Organic
          </h2>
          <p className="text-gray-600 mb-6">
            Say no to harmful chemicals with our range of fresh, organic fruits and
            veggies. Pamper your body with the true gifts from nature.
          </p>
          <Link
            href="#"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Watch Video
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
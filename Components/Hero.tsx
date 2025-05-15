import Link from 'next/link';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a680')",
      }}
    >
      <motion.div
        className="bg-black bg-opacity-50 p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get Delicious Food Anytime
        </h1>
        <p className="text-lg md:text-xl mb-6">Eat Smart & Healthy with Food Munch</p>
        <div className="space-x-4">
          <Link
            href="#menu"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition transform hover:scale-105"
          >
            View Menu
          </Link>
          <Link
            href="#delivery"
            className="inline-block border border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-white transition transform hover:scale-105"
          >
            Order Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
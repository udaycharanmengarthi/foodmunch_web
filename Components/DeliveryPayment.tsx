import { motion } from 'framer-motion';
import Link from 'next/link';

export const DeliveryPayment = () => {
  const paymentMethods = [
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card.png',
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card.png',
    'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-card.png',
  ];

  return (
    <section id="delivery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Delivery and Payment
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Enjoy hassle-free payment and live tracking with a 5% discount on online
          orders.
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {paymentMethods.map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt="Payment Method"
              className="h-12"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
        <div className="text-center">
          <Link
            href="#"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition transform hover:scale-105"
          >
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};

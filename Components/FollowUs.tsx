import { motion } from 'framer-motion';
import Link from 'next/link';

export const FollowUs = () => {
  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-facebook', href: '#' },
    { icon: 'fab fa-pinterest', href: '#' },
  ];

  return (
    <section id="follow-us" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Follow Us
        </h2>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.icon}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={link.href}
                className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition transform hover:rotate-12"
              >
                <i className={`${link.icon} text-2xl`}></i>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
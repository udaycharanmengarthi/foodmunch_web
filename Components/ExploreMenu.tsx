import { motion } from 'framer-motion';
import Link from 'next/link';

export const ExploreMenu = () => {
  const menuItems = [
    {
      title: 'Non-Veg Starters',
      image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8',
    },
    {
      title: 'Veg Starters',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    },
    { title: 'Soups', image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5b4f' },
    {
      title: 'Fish & Sea Food',
      image: 'https://images.unsplash.com/photo-1594212699903-ec88e4475996',
    },
    {
      title: 'Main Course',
      image: 'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a',
    },
    { title: 'Noodles', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9' },
    { title: 'Salads', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe' },
    { title: 'Desserts', image: 'https://images.unsplash.com/photo-1569718212165-3328f9b831f7' },
  ];

  return (
    <section id="menu" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Explore Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <Link href="#" className="text-yellow-500 hover:underline">
                  View All
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
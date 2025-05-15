import { motion } from 'framer-motion';

export const WhyChooseUs = () => {
  const cards = [
    {
      title: 'Food Service',
      description: 'Experience fine dining at home with carefully packed orders.',
      image: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-service-img.png',
    },
    {
      title: 'Fresh Food',
      description: 'Fresh-cut fruits and vegetables from our partner farms.',
      image: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fresh-food-img.png',
    },
    {
      title: 'Best Offers',
      description: 'Up to 50% OFF and exclusive promo codes on all orders.',
      image: 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Why Choose Us?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We use both original recipes and classic versions of famous food items.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-gray-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={card.image} alt={card.title} className="mx-auto mb-4 h-24" />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

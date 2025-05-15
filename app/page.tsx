// Import all section components for the homepage
import { DeliveryPayment } from '@/components/DeliveryPayment';
import { ExploreMenu } from '@/components/ExploreMenu';
import { FollowUs } from '@/components/FollowUs';
import { Footer } from '@/components/Footer';
import { HealthyFood } from '@/components/HealthyFood';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ThankYou } from '@/components/ThankYou';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <div className="font-roboto bg-gray-100">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ExploreMenu />
      <HealthyFood />
      <DeliveryPayment />
      <ThankYou />
      <FollowUs />
      <Footer />
    </div>
  );
}

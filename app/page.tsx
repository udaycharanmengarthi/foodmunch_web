import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ExploreMenu } from '@/components/ExploreMenu';
import { HealthyFood } from '@/components/HealthyFood';
import { DeliveryPayment } from '@/components/DeliveryPayment';
import { ThankYou } from '@/components/ThankYou';
import { FollowUs } from '@/components/FollowUs';
import { Footer } from '@/components/Footer';

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
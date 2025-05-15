import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <div className="container mx-auto px-4">
        <Image
          src="/food-munch-logo.png"
          alt="Food Munch Logo"
          width={80}
          height={70}
          className="mb-4 mx-auto"
        />
        <p className="font-bold">orderfood@foodmunch.com</p>
        <p>Medak, Telangana, India</p>
      </div>
    </footer>
  );
};
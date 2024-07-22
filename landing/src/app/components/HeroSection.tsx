import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import hero from '../../../src/images/hero.png';

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-800 min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[53%] mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-yellow-400">User-Centric Excellence:</span> Our
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              App Development services
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
              Tackles Your Pain Points
            </h2>
            <p className="text-lg mb-8 max-w-md">
              Experience a Seamless Digital Journey with <span className="text-green-600">Desun</span> -<br />
              Where Every Line of Code Resolves Your Challenges and <br />
              <span className="text-yellow-400">Elevates Your App Experience</span> to Unparalleled Heights.
            </p>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold mb-4">
                Leave your contacts and we will call you back within 30 minutes
              </h3>
              <form className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">Full name</label>
      <Input type="text" placeholder="My Name" className="mt-1 border border-gray-300 rounded-md w-full" />
    </div>
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700">Phone number</label>
      <Input type="tel" placeholder="+91 0000000000" className="mt-1 border border-gray-300 rounded-md w-full" />
    </div>
  </div>
  <div className="flex flex-col md:flex-row gap-4 md:items-center">
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium text-gray-700">Business name</label>
      <Input type="text" placeholder="ABC Technologies PVT LTD" className="mt-1 border border-gray-300 rounded-md w-80" />
    </div>
    <div className="w-full md:w-1/2">
      <label className="block text-sm font-medium text-gray-700">Business mail</label>
      <Input type="email" placeholder="demoaccount@gmail.com" className="mt-1 border border-gray-300 rounded-md w-full" />
    </div>
    <div className="w-full md:w-auto flex items-center justify-center mt-4 md:mt-6">
      <Button className="bg-green-500 text-white hover:bg-green-600 w-full md:w-auto">
        Get consultation
      </Button>
    </div>
  </div>
</form>
            </div>
          </div>
          <div className="w-full md:w-[45%] relative h-[40rem]">
            <div className="relative w-full h-full">
              <Image
                src={hero}
                alt="App Screenshot"
                layout="fill"
                objectFit="contain"
                className="transform rotate-18"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

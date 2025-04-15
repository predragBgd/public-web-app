import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Supercharge Your LinkedIn Outreach
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Automate connection requests and personalized messaging — save hours
            every week using Public LinkedIn App.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/download"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
            >
              Add to Chrome
            </Link>
            <Link
              href="demo"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition"
            >
              Watch Demo
            </Link>
          </div>
        </div>
        {/* Image Section  */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <Image
            src="/heroImage.jpeg"
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

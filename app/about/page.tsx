import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Facebook, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | 5SecondRule',
  description: 'Our story, mission and the team behind 5SecondRule recipes',
};

export default function AboutPage() {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-deep-purple text-white">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display mb-6">
              About Our Kitchen
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              The story behind 5SecondRule and our mission to make cooking fun, 
              quick, and deliciously simple for everyone.
            </p>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-20 text-white"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" />
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl font-display text-deep-purple mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p>
                    The 5SecondRule was born out of frustration with complicated recipes and the myth that good food needs to be time-consuming to prepare.
            </p>
            <p>
                    Our founder, Alex, a busy parent with three young children, found traditional recipes overwhelming with their lengthy prep times and complicated instructions. One evening, while racing to prepare dinner, Alex dropped a piece of pasta on the floor and jokingly referenced the "5-second rule."
            </p>
            <p>
                    That moment sparked an idea: what if there was a collection of recipes where the initial prep took just 5 seconds (figuratively speaking, of course!)? Recipes that focused on simplicity, used few ingredients, and still tasted amazing?
            </p>
            <p>
                    In 2022, 5SecondRule launched with just 10 recipes. Today, we have over 500 recipes, a passionate community, and a simple mission: make cooking accessible, fun, and quick for everyone.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/images/about/our-story.jpg" 
                    alt="5SecondRule team cooking together" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-bubblegum-pink opacity-20"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-bright-yellow opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-lime-green/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-display text-deep-purple mb-8">Our Mission</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              We believe that everyone can cook delicious meals without spending hours in the kitchen. Our mission is to make cooking accessible, enjoyable, and stress-free.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-md relative">
                <div className="w-16 h-16 bg-bubblegum-pink rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <span className="font-display text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Simplify Cooking</h3>
                <p>We create recipes that minimize prep time and maximize flavor, making cooking accessible to everyone.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md relative">
                <div className="w-16 h-16 bg-bright-yellow rounded-full flex items-center justify-center mx-auto mb-6 text-deep-purple">
                  <span className="font-display text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Build Community</h3>
                <p>We foster a supportive community where people can share their love for quick, delicious food.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md relative">
                <div className="w-16 h-16 bg-deep-purple rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <span className="font-display text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Inspire Creativity</h3>
                <p>We encourage culinary creativity by providing flexible recipes that can be easily customized.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display text-deep-purple mb-6">Meet Our Team</h2>
              <p className="text-xl max-w-3xl mx-auto">
                We're a passionate group of food enthusiasts, home cooks, and tech lovers dedicated to making your kitchen experience fun and simple.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                      <div className="mt-3 flex gap-2">
                        {member.social.map((social, idx) => (
                          <a 
                            key={idx} 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-bubblegum-pink"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-bubblegum-pink/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display text-deep-purple mb-6">Join Our Community</h2>
            <p className="text-xl mb-8">
              Connect with fellow food enthusiasts, share your creations, and find inspiration for your next quick meal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="default"
                asChild
              >
                <Link href="/recipes">
                  Explore Our Recipes
                </Link>
            </Button>
            <Button
                size="lg" 
                variant="secondary"
              asChild
            >
                <Link href="/contact">
                  Get In Touch <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
            </Button>
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}

// Team members data
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & Head Chef",
    image: "/images/about/team-1.jpg",
    social: [
      { icon: <Instagram size={18} />, url: "https://instagram.com" },
      { icon: <Twitter size={18} />, url: "https://twitter.com" },
    ],
  },
  {
    name: "Sam Rivera",
    role: "Culinary Director",
    image: "/images/about/team-2.jpg",
    social: [
      { icon: <Instagram size={18} />, url: "https://instagram.com" },
      { icon: <Facebook size={18} />, url: "https://facebook.com" },
    ],
  },
  {
    name: "Jordan Taylor",
    role: "Food Photographer",
    image: "/images/about/team-3.jpg",
    social: [
      { icon: <Instagram size={18} />, url: "https://instagram.com" },
      { icon: <Twitter size={18} />, url: "https://twitter.com" },
    ],
  },
];


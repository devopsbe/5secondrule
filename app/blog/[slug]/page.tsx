import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Calendar, User, Tag, Facebook, Twitter, Instagram, Share2, Clock } from 'lucide-react';

export const metadata = {
  title: 'Blog Post | 5SecondRule',
  description: 'Read our latest article on quick cooking techniques and recipes.',
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, we would fetch the blog post based on the slug
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">We couldn't find the article you're looking for.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[50vh] relative">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-3 text-white/80">
                <span className="flex items-center gap-1">
                  <Calendar size={16} className="text-bubblegum-pink" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} className="text-bubblegum-pink" />
                  {post.readTime} min read
                </span>
                <span className="flex items-center gap-1">
                  <User size={16} className="text-bubblegum-pink" />
                  {post.author.name}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                {post.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-bubblegum-pink/30 text-white px-2 py-1 rounded-full flex items-center"
                  >
                    <Tag size={12} className="mr-1" />
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog" className="flex items-center text-bubblegum-pink">
                <ChevronLeft size={16} className="mr-1" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8 prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600">
                {post.excerpt}
              </p>

              {post.content.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.type === 'heading' && (
                    <h2 className="text-2xl font-bold text-deep-purple mt-10 mb-4">{section.content}</h2>
                  )}
                  
                  {section.type === 'paragraph' && (
                    <p className="mb-4 text-gray-700">{section.content}</p>
                  )}
                  
                  {section.type === 'image' && (
                    <figure className="my-8">
                      <div className="relative h-80 w-full rounded-lg overflow-hidden">
                        <Image
                          src={section.content as string}
                          alt={section.alt || 'Blog image'}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {section.caption && (
                        <figcaption className="text-sm text-gray-500 mt-2 text-center">
                          {section.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                  
                  {section.type === 'list' && section.items && (
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  )}
                  
                  {section.type === 'quote' && (
                    <blockquote className="border-l-4 border-bubblegum-pink pl-4 italic my-8 py-2 text-gray-600">
                      {section.content}
                      {section.attribution && (
                        <cite className="block text-sm mt-2 font-normal not-italic">— {section.attribution}</cite>
                      )}
                    </blockquote>
                  )}
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Author Card */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-deep-purple mb-2">{post.author.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{post.author.bio}</p>
                  <div className="flex gap-3">
                    {post.author.social.twitter && (
                      <a href={post.author.social.twitter} className="text-gray-600 hover:text-bubblegum-pink">
                        <Twitter size={18} />
                      </a>
                    )}
                    {post.author.social.instagram && (
                      <a href={post.author.social.instagram} className="text-gray-600 hover:text-bubblegum-pink">
                        <Instagram size={18} />
                      </a>
                    )}
                    {post.author.social.facebook && (
                      <a href={post.author.social.facebook} className="text-gray-600 hover:text-bubblegum-pink">
                        <Facebook size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Share Widget */}
              <div className="bg-bubblegum-pink/10 rounded-xl p-6">
                <h3 className="font-bold text-deep-purple mb-4">Share This Article</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Twitter">
                    <Twitter size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Facebook">
                    <Facebook size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full" aria-label="Copy link">
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-deep-purple mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {post.relatedPosts.map((relatedPost, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm line-clamp-2">
                          <Link href={relatedPost.slug} className="hover:text-bubblegum-pink transition-colors">
                            {relatedPost.title}
                          </Link>
                        </h4>
                        <span className="text-xs text-gray-500">{relatedPost.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Post Navigation */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {post.previousPost && (
                <Link 
                  href={post.previousPost.slug}
                  className="group flex flex-col p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xs text-gray-500 flex items-center">
                    <ChevronLeft size={14} className="mr-1" />
                    Previous Article
                  </span>
                  <span className="font-medium group-hover:text-bubblegum-pink transition-colors">
                    {post.previousPost.title}
                  </span>
                </Link>
              )}
              
              {post.nextPost && (
                <Link 
                  href={post.nextPost.slug}
                  className="group flex flex-col items-end text-right p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xs text-gray-500 flex items-center">
                    Next Article
                    <ChevronLeft size={14} className="rotate-180 ml-1" />
                  </span>
                  <span className="font-medium group-hover:text-bubblegum-pink transition-colors">
                    {post.nextPost.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Mock function to get blog post by slug
function getBlogPostBySlug(slug: string) {
  // In a real app, this would fetch data from an API or database
  const post = {
    title: "The Science Behind the Perfect 5-Minute Marinade",
    slug: "5-minute-marinade",
    date: "June 5, 2023",
    readTime: 8,
    author: {
      name: "Alex Johnson",
      avatar: "/images/blog/authors/alex.jpg",
      bio: "Food scientist and culinary enthusiast specializing in quick-cooking techniques.",
      social: {
        twitter: "https://twitter.com/alexjohnson",
        instagram: "https://instagram.com/alexjohnson",
        facebook: "https://facebook.com/alexjohnson"
      }
    },
    heroImage: "/images/blog/post-1-hero.jpg",
    excerpt: "Learn the scientific principles behind quick marinades and how they can impart maximum flavor in minimum time for your proteins.",
    categories: ["Science", "Techniques"],
    content: [
      {
        type: "paragraph",
        content: "The conventional wisdom says that marinades need hours or even overnight to work their magic. But what if you could get most of the flavor benefits in just 5 minutes? The science says you can, and here's why."
      },
      {
        type: "paragraph",
        content: "Marinades serve three primary functions: adding flavor, tenderizing, and in some cases, preserving food. The first function - flavor - happens remarkably quickly at the surface level, where most of the taste experience occurs anyway."
      },
      {
        type: "heading",
        content: "The Chemistry of Fast Marinades"
      },
      {
        type: "paragraph",
        content: "The science of marinade penetration reveals that most marinades only penetrate a few millimeters into the food's surface within the first 5-10 minutes. This surface penetration accounts for approximately 70-80% of the flavor impact we perceive."
      },
      {
        type: "image",
        content: "/images/blog/marinade-diagram.jpg",
        alt: "Diagram showing marinade penetration over time",
        caption: "Marinade penetration depth over time. Notice how most penetration occurs in the first 5-10 minutes."
      },
      {
        type: "paragraph",
        content: "Salt is one of the few marinade components that penetrates deeply into meat, through a process called diffusion. Acids like lemon juice or vinegar primarily affect the surface, breaking down exterior proteins but rarely penetrating deeply unless given many hours."
      },
      {
        type: "heading",
        content: "Key Components of an Effective Quick Marinade"
      },
      {
        type: "list",
        items: [
          "Salt: Enhances flavor and helps other flavors penetrate",
          "Acid: Helps break down surface proteins (lemon juice, vinegar, yogurt)",
          "Oil: Carries fat-soluble flavors and helps with even coating",
          "Aromatics: Provide intense flavor quickly (garlic, herbs, spices)",
          "Umami boosters: Enhance perceived richness (soy sauce, fish sauce, MSG)",
          "Sugar: Aids in caramelization and balances acidic components"
        ]
      },
      {
        type: "paragraph",
        content: "When creating a quick marinade, the key is to maximize the surface flavor impact by increasing intensity rather than waiting for deep penetration."
      },
      {
        type: "quote",
        content: "The mistake most home cooks make is thinking time equals flavor. In reality, concentration and proper application technique matter far more than duration.",
        attribution: "Dr. Maria Rodriguez, Food Science Researcher"
      },
      {
        type: "heading",
        content: "Techniques for Maximizing Quick Marinades"
      },
      {
        type: "paragraph",
        content: "To get the most out of your 5-minute marinades, consider these techniques that food scientists and professional chefs employ:"
      },
      {
        type: "list",
        items: [
          "Score or puncture the surface of the food to increase surface area",
          "Gently warm your marinade ingredients to enhance flavor release (then cool before applying)",
          "Use a high concentration of aromatics and spices for stronger surface flavor",
          "Ensure complete coverage with frequent turning or a zipper bag",
          "Pat dry before cooking to promote better browning"
        ]
      },
      {
        type: "paragraph",
        content: "These approaches take advantage of the fact that flavor perception is heavily dependent on surface compounds rather than full penetration."
      },
      {
        type: "image",
        content: "/images/blog/quick-marinade-process.jpg",
        alt: "Step-by-step process of applying a quick marinade",
        caption: "The complete 5-minute marinade process from preparation to application"
      },
      {
        type: "paragraph",
        content: "Remember that some ingredients work faster than others. Garlic and spices release their flavors quickly, while whole herbs might benefit from a quick crushing to release their essential oils."
      },
      {
        type: "heading",
        content: "When You Really Do Need More Time"
      },
      {
        type: "paragraph",
        content: "While 5-minute marinades work wonderfully for most everyday cooking, some specific goals do require longer marination:"
      },
      {
        type: "list",
        items: [
          "True tenderization of tough cuts (which requires enzymatic breakdown)",
          "Deep flavor penetration for very thick pieces of meat",
          "Traditional preparations that rely on fermentation components (like buttermilk marinades)",
          "Curing or preservation techniques"
        ]
      },
      {
        type: "paragraph",
        content: "But for most weeknight cooking where you need quick, delicious results, the 5-minute approach will transform your meals without the wait."
      },
      {
        type: "paragraph",
        content: "Next time you're in a hurry, don't skip the marinade - just concentrate it, apply it properly, and you'll unlock a world of flavor in just 5 minutes."
      }
    ],
    relatedPosts: [
      {
        title: "The Ultimate Guide to Stir-Fry Mastery",
        slug: "/blog/stir-fry-guide",
        date: "May 25, 2023",
        image: "/images/blog/popular-2.jpg"
      },
      {
        title: "Fast Cooking Methods Around the World",
        slug: "/blog/fast-cooking-methods",
        date: "April 30, 2023",
        image: "/images/blog/post-5.jpg"
      },
      {
        title: "7 Essential Kitchen Tools for Quick Cooking",
        slug: "/blog/essential-kitchen-tools",
        date: "May 22, 2023",
        image: "/images/blog/post-2.jpg"
      }
    ],
    previousPost: {
      title: "Quick Breakfast Ideas for Busy Mornings",
      slug: "/blog/quick-breakfast-ideas"
    },
    nextPost: {
      title: "7 Essential Kitchen Tools for Quick Cooking",
      slug: "/blog/essential-kitchen-tools"
    }
  };
  
  return post;
} 
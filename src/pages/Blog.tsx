import React from 'react';
import { Calendar, User, MessageCircle, ThumbsUp } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Yapay Zeka ve Etik: Gelecekteki Zorluklar",
      excerpt: "Yapay zeka teknolojilerinin gelişimi beraberinde etik sorunları da getiriyor. Peki bu zorlukların üstesinden nasıl gelebiliriz?",
      author: "AI Geliştirici",
      date: "1 Mart 2024",
      comments: 15,
      likes: 42,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    },
    {
      id: 2,
      title: "Derin Öğrenme Modelleri Optimizasyonu",
      excerpt: "Modern derin öğrenme modellerinin performansını artırmak için kullanabileceğiniz en etkili optimizasyon teknikleri.",
      author: "AI Geliştirici",
      date: "28 Şubat 2024",
      comments: 8,
      likes: 35,
      image: "https://images.unsplash.com/photo-1676277791608-ac54525aa94d"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-tertiary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-secondary text-lg">AI ve teknoloji üzerine düşüncelerim</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-tertiary/50 rounded-lg overflow-hidden backdrop-blur-sm group hover:bg-tertiary/70 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-secondary mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-secondary">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {post.likes}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
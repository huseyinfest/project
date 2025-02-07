import React from 'react';
import { MessageCircle, ThumbsUp, Clock } from 'lucide-react';

const QA = () => {
  const questions = [
    {
      id: 1,
      title: "Yapay zeka öğrenimine nereden başlamalıyım?",
      content: "Yapay zeka alanında kariyer yapmak istiyorum. Hangi kaynaklardan başlamam gerekiyor?",
      author: "Yeni Başlayan",
      date: "2 saat önce",
      answers: 3,
      likes: 12,
      tags: ["başlangıç", "kariyer", "eğitim"]
    },
    {
      id: 2,
      title: "TensorFlow vs PyTorch: Hangisini seçmeliyim?",
      content: "Derin öğrenme projelerim için hangi framework'ü kullanmalıyım? Artıları ve eksileri neler?",
      author: "AI Geliştirici",
      date: "1 gün önce",
      answers: 5,
      likes: 18,
      tags: ["deep-learning", "tensorflow", "pytorch"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-tertiary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Soru & Cevap</h1>
          <p className="text-secondary text-lg">AI ve yazılım geliştirme hakkında sorularınızı yanıtlıyorum</p>
        </div>

        <div className="mb-8">
          <button className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Yeni Soru Sor
          </button>
        </div>

        <div className="space-y-6">
          {questions.map((question) => (
            <article key={question.id} className="bg-tertiary/50 rounded-lg p-6 backdrop-blur-sm hover:bg-tertiary/70 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-3 hover:text-purple-400 transition-colors">
                {question.title}
              </h2>
              <p className="text-secondary mb-4">{question.content}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {question.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm text-purple-400 bg-purple-900/30 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-secondary">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {question.answers} yanıt
                  </span>
                  <span className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {question.likes}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {question.date}
                  </span>
                  <span>{question.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QA;
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Twitter, Mail, BookOpen, Boxes, HelpCircle, User, Award, Briefcase, Code, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const RotatingEarth = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial
        color="#4299e1"
        metalness={0.5}
        roughness={0.7}
      />
    </mesh>
  );
};

const FlyingPlane = ({ position }: { position: [number, number, number] }) => {
  return (
    <mesh position={position}>
      <coneGeometry args={[0.2, 0.5, 4]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

const Home = () => {
  return (
    <div className="relative w-full min-h-screen mx-auto overflow-x-hidden bg-gradient-to-b from-primary to-tertiary">
      {/* Hero Section */}
      <div className="h-screen relative">
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 0, 5]} />
              <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              <FlyingPlane position={[-3, 2, 0]} />
              <FlyingPlane position={[3, -2, 1]} />
              <FlyingPlane position={[0, 3, -2]} />
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-purple-500" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-500" />
          </div>

          <div>
            <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              Merhaba, Ben <span className="text-purple-500">AI Geliştirici</span>
            </h1>
            <p className="text-secondary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
              Yapay zeka çözümleri geliştiriyor, <br className="sm:block hidden" />
              geleceği şekillendiriyorum.
            </p>
          </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Hakkımda</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-tertiary/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-500" />
                  Uzmanlık Alanlarım
                </h3>
                <ul className="space-y-2 text-secondary">
                  <li>• Derin Öğrenme ve Yapay Sinir Ağları</li>
                  <li>• Doğal Dil İşleme (NLP)</li>
                  <li>• Bilgisayarlı Görü</li>
                  <li>• Makine Öğrenmesi Optimizasyonu</li>
                  <li>• AI Model Deployment</li>
                </ul>
              </div>

              <div className="bg-tertiary/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-500" />
                  Sertifikalar & Başarılar
                </h3>
                <ul className="space-y-2 text-secondary">
                  <li>• AWS Machine Learning Specialist</li>
                  <li>• Google TensorFlow Developer</li>
                  <li>• Stanford Deep Learning Specialization</li>
                  <li>• AI Research Paper Publications</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-tertiary/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-purple-500" />
                  Kariyer
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-white font-semibold">Kıdemli AI Geliştirici</h4>
                    <p className="text-purple-400">TechCorp</p>
                    <p className="text-secondary">2021 - Günümüz</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-white font-semibold">AI Geliştirici</h4>
                    <p className="text-purple-400">AI Solutions Inc.</p>
                    <p className="text-secondary">2019 - 2021</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-white font-semibold">Yazılım Mühendisi</h4>
                    <p className="text-purple-400">Software Co.</p>
                    <p className="text-secondary">2018 - 2019</p>
                  </div>
                </div>
              </div>

              <div className="bg-tertiary/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-4">Bağlantılar</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-secondary hover:text-purple-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-secondary hover:text-purple-500 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-secondary hover:text-purple-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </a>
                  <a
                    href="mailto:your.email@example.com"
                    className="flex items-center space-x-2 text-secondary hover:text-purple-500 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Keşfet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/blog" className="group">
              <div className="bg-tertiary/50 p-8 rounded-lg backdrop-blur-sm transform transition-all duration-300 group-hover:scale-105 group-hover:bg-tertiary/70">
                <BookOpen className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Blog</h3>
                <p className="text-secondary mb-6">AI, makine öğrenimi ve teknoloji üzerine yazılar.</p>
                <div className="flex items-center text-purple-400 group-hover:text-purple-500">
                  <span>Yazıları Keşfet</span>
                  <Code className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
            <Link to="/projects" className="group">
              <div className="bg-tertiary/50 p-8 rounded-lg backdrop-blur-sm transform transition-all duration-300 group-hover:scale-105 group-hover:bg-tertiary/70">
                <Boxes className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Projeler</h3>
                <p className="text-secondary mb-6">Geliştirdiğim AI projeleri ve açık kaynak katkılarım.</p>
                <div className="flex items-center text-purple-400 group-hover:text-purple-500">
                  <span>Projeleri İncele</span>
                  <Code className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
            <Link to="/qa" className="group">
              <div className="bg-tertiary/50 p-8 rounded-lg backdrop-blur-sm transform transition-all duration-300 group-hover:scale-105 group-hover:bg-tertiary/70">
                <HelpCircle className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">Soru & Cevap</h3>
                <p className="text-secondary mb-6">AI ve yazılım geliştirme hakkında sorularınızı yanıtlıyorum.</p>
                <div className="flex items-center text-purple-400 group-hover:text-purple-500">
                  <span>Soru Sor</span>
                  <Code className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Earth Section */}
      <section className="h-screen relative">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 0, 5]} />
            <RotatingEarth />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
};

export default Home;
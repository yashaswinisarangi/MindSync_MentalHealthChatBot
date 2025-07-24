import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Heart, MessageSquare, Shield, Sparkles, AlertCircle, CloudRain, Zap, Flame, Users, ScanLine } from 'lucide-react';
import { FeelingCard } from '../components/FeelingCard';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WellnessTools } from '../components/WellnessTools';
import amlanImg from '../assets/images/img1.jpg';
import preritImg from '../assets/images/img2.jpg';
import adityaImg from '../assets/images/img3.jpg';
import yashaswiniImg from '../assets/images/img4.jpg';


const feelings = [
  {
    id: '1',
    name: 'Anxiety',
    description: 'A feeling of worry, nervousness, or unease about something with an uncertain outcome.',
    symptoms: ['Restlessness', 'Racing thoughts', 'Difficulty concentrating', 'Sleep problems'],
    solutions: ['Deep breathing exercises', 'Progressive muscle relaxation', 'Regular exercise', 'Mindfulness meditation'],
    icon: AlertCircle,
    color: 'from-yellow-100 to-orange-100'
  },
  {
    id: '2',
    name: 'Depression',
    description: 'Persistent feelings of sadness and loss of interest that can interfere with daily life.',
    symptoms: ['Loss of interest', 'Changes in sleep', 'Fatigue', 'Difficulty concentrating'],
    solutions: ['Professional therapy', 'Regular exercise', 'Social connection', 'Structured daily routine'],
    icon: CloudRain,
    color: 'from-blue-100 to-purple-100'
  },
  {
    id: '3',
    name: 'Stress',
    description: "Your body's reaction to pressure from a situation or life event.",
    symptoms: ['Irritability', 'Muscle tension', 'Headaches', 'Difficulty sleeping'],
    solutions: ['Time management', 'Regular breaks', 'Physical activity', 'Relaxation techniques'],
    icon: Zap,
    color: 'from-red-100 to-pink-100'
  },
  {
    id: '4',
    name: 'Burnout',
    description: 'A state of physical, emotional, and mental exhaustion caused by prolonged stress.',
    symptoms: ['Emotional exhaustion', 'Cynicism', 'Reduced performance', 'Physical fatigue'],
    solutions: ['Set boundaries', 'Take regular breaks', 'Seek support', 'Practice self-care'],
    icon: Flame,
    color: 'from-orange-100 to-red-100'
  },
  {
    id: '5',
    name: 'Social Anxiety',
    description: 'Intense fear or anxiety in social situations and interactions with others.',
    symptoms: ['Excessive self-consciousness', 'Avoiding social situations', 'Physical symptoms like sweating', 'Racing heart'],
    solutions: ['Gradual exposure', 'Cognitive behavioral therapy', 'Relaxation techniques', 'Challenge negative thoughts'],
    icon: Users,
    color: 'from-purple-100 to-blue-100'
  },
  {
    id: '6',
    name: 'PTSD',
    description: 'A disorder that develops in some people who have experienced a shocking, scary, or dangerous event.',
    symptoms: ['Flashbacks', 'Nightmares', 'Avoidance behaviors', 'Heightened reactions'],
    solutions: ['Professional therapy', 'Support groups', 'Mindfulness practices', 'Trauma-focused therapy'],
    icon: ScanLine,
    color: 'from-green-100 to-blue-100'
  }
];

const teamMembers = [
  {
    name: 'Amlan Anurag',
    role: 'AI/ML Engineer',
    description: 'Building intelligent systems with data',
    image: amlanImg
  },
  {
    name: 'Prerit Mohanty',
    role: 'AI/ML Engineer',
    description: 'Turning data into intelligent decisions',
    image: preritImg
  },
  {
    name: 'Aditya Nanda',
    role: 'Developer',
    description: 'Enhancing user experience through development',
    image: adityaImg
  },
  {
    name: 'Yashaswini Sarangi',
    role: 'Backend Developer',
    description: 'Powering applications with backend logic',
    image: yashaswiniImg
   }
];

export const Home = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const [openFeelingId, setOpenFeelingId] = useState(null);
  const navigate = useNavigate();
  
  const handleWellnessJourney = () => {
    navigate('/chat');
  };

  const handleFeelingToggle = (feelingId) => {
    setOpenFeelingId(openFeelingId === feelingId ? null : feelingId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-green via-light-orange to-light-green">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24 max-w-4xl mx-auto relative"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-full"
            >
              <div className="relative">
                <Sparkles className="w-24 h-24 mx-auto text-dark-green opacity-20" />
                <Heart className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-dark-green" />
              </div>
            </motion.div>
            
            <h1 className="text-7xl font-bold text-dark-green mb-6 mt-16">MindSync</h1>
            <p className="text-2xl text-dark-green/80 mb-12">Your AI-powered companion for mental wellness and emotional balance. Let's navigate your journey to better mental health together.</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWellnessJourney}
              className="inline-flex items-center gap-3 bg-dark-green text-light-orange px-10 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all text-xl"
            >
              <MessageSquare className="w-6 h-6" />
              Start Your Wellness Journey
            </motion.button>
          </motion.div>

          {/* Features */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-light-orange/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-dark-green/10"
            >
              <Brain className="w-12 h-12 text-dark-green mb-4" />
              <h3 className="text-2xl font-semibold text-dark-green mb-4">AI-Powered Support</h3>
              <p className="text-dark-green/80 text-lg">Experience compassionate and understanding conversations with our advanced AI that adapts to your emotional needs.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-light-orange/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-dark-green/10"
            >
              <Shield className="w-12 h-12 text-dark-green mb-4" />
              <h3 className="text-2xl font-semibold text-dark-green mb-4">Safe Space</h3>
              <p className="text-dark-green/80 text-lg">Your mental health journey is personal. We provide a secure and private environment for your conversations.</p>
            </motion.div>
          </div>

          {/* Feelings Section */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-dark-green mb-4">Understanding Your Feelings</h2>
              <p className="text-xl text-dark-green/80">Explore common emotional states and learn how to manage them effectively</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {feelings.map((feeling, index) => (
                <motion.div
                  key={feeling.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <FeelingCard 
                    feeling={feeling} 
                    isOpen={openFeelingId === feeling.id}
                    onToggle={handleFeelingToggle}
                  />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Self-Help Tools Section */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-dark-green mb-4">Wellness Toolkit</h2>
              <p className="text-xl text-dark-green/80 mb-8">Explore our collection of self-help tools and resources</p>
              <WellnessTools />
            </motion.div>
          </section>

          {/* Your Path to Feeling Better Section */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-dark-green mb-4">Your Path to Feeling Better</h2>
              <p className="text-xl text-dark-green/80">Simple steps to improve your mental well-being</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: 1,
                  title: 'Practice Mindfulness',
                  description: 'Stay present and focused on the current moment',
                  details: ['Daily meditation practice', 'Mindful breathing exercises', 'Present moment awareness', 'Body scan meditation'],
                  color: 'from-blue-100 to-purple-100'
                },
                {
                  id: 2,
                  title: 'Connect with Others',
                  description: 'Build and maintain meaningful relationships',
                  details: ['Join support groups', 'Regular family time', 'Social activities', 'Deep conversations'],
                  color: 'from-green-100 to-emerald-100'
                },
                {
                  id: 3,
                  title: 'Stay Active',
                  description: 'Regular exercise improves mood and reduces stress',
                  details: ['Daily walking', 'Yoga practice', 'Strength training', 'Outdoor activities'],
                  color: 'from-yellow-100 to-amber-100'
                },
                {
                  id: 4,
                  title: 'Get Quality Sleep',
                  description: 'Maintain a regular sleep schedule for better mental health',
                  details: ['Consistent bedtime', 'Relaxing bedtime routine', 'Screen-free hour before bed', 'Comfortable sleep environment'],
                  color: 'from-pink-100 to-rose-100'
                }
              ].map((step) => (
                <div key={step.id} className="relative">
                  <motion.div
                    layout
                    className={`bg-gradient-to-br ${step.color} rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all border border-dark-green/10 backdrop-blur-sm overflow-hidden min-h-[150px]`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div onClick={() => setSelectedPath(selectedPath === step.id ? null : step.id)} className="p-6">
                      <motion.div layout className="mb-4">
                        <h3 className="text-xl font-semibold text-dark-green">{step.title}</h3>
                        <p className="text-dark-green/80 text-sm mt-2">{step.description}</p>
                      </motion.div>
                    </div>
                    
                    <AnimatePresence>
                      {selectedPath === step.id && (
                        <motion.div
                          layout
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ 
                            opacity: 1, 
                            height: 'auto',
                            transition: {
                              height: {
                                duration: 0.4,
                                ease: "easeOut"
                              }
                            }
                          }}
                          exit={{ 
                            opacity: 0,
                            height: 0,
                            transition: {
                              opacity: { duration: 0.2 },
                              height: { duration: 0.4 }
                            }
                          }}
                          className="px-6 pb-6"
                        >
                          <div>
                            <h4 className="font-semibold text-dark-green mb-2">Tips:</h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="text-dark-green/80 flex items-center gap-2"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-dark-green/40" />
                                  {detail}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}
            </div>
          </section>

         {/* Blog Section */}
<section className="mb-24">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl font-bold text-dark-green mb-4">Mental Health Insights</h2>
    <p className="text-xl text-dark-green/80">Latest articles and research on mental wellness</p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      {
        id: '1',
        title: 'Understanding the Mind-Body Connection',
        excerpt: 'Explore how mental health affects physical well-being and vice versa.',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
        date: 'March 15, 2024',
        link: 'https://www.psychologytoday.com/us/basics/mind-body-connection'
      },
      {
        id: '2',
        title: 'The Power of Mindfulness Meditation',
        excerpt: 'Learn how daily mindfulness practice can transform your mental health.',
        imageUrl: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800&q=80',
        date: 'March 12, 2024',
        link: 'https://www.mindful.org/how-to-meditate/'
      },
      {
        id: '3',
        title: 'Breaking the Stigma Around Mental Health',
        excerpt: 'Why we need to change the conversation about mental health in society.',
        imageUrl: 'https://images.unsplash.com/photo-1541534401786-2077eed87a74?auto=format&fit=crop&w=800&q=80',
        date: 'March 10, 2024',
        link: 'https://www.nami.org/Blogs/NAMI-Blog/July-2020/Why-the-Way-We-Talk-About-Mental-Health-Matters'
      },
      {
        id: '4',
        title: 'Coping with Anxiety',
        excerpt: 'Practical strategies for managing anxiety in daily life.',
        imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
        date: 'March 8, 2024',
        link: 'https://adaa.org/tips'
      },
      {
        id: '5',
        title: 'The Science of Happiness',
        excerpt: 'Evidence-based practices to increase your well-being.',
        imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80',
        date: 'March 5, 2024',
        link: 'https://greatergood.berkeley.edu/topic/happiness'
      },
      {
        id: '6',
        title: 'Building Resilience',
        excerpt: 'How to develop mental strength during challenging times.',
        imageUrl: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?auto=format&fit=crop&w=800&q=80',
        date: 'March 3, 2024',
        link: 'https://www.apa.org/topics/resilience'
      }
    ].map((blog, index) => (
      <motion.article
        key={blog.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-dark-green/10"
      >
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <p className="text-sm text-dark-green/60">{blog.date}</p>
          <h3 className="text-xl font-semibold text-dark-green mt-2">{blog.title}</h3>
          <p className="mt-2 text-dark-green/80">{blog.excerpt}</p>
          <a 
            href={blog.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-dark-green text-light-orange rounded-lg hover:bg-dark-green/90 transition-colors"
            >
              Read More
            </motion.button>
          </a>
        </div>
      </motion.article>
    ))}
  </div>
</section>

          {/* About Us Section */}
          <section className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}  
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-dark-green mb-4">About Us</h2>
              <p className="text-xl text-dark-green/80 max-w-3xl mx-auto">
                At MindSync, we combine cutting-edge AI technology with evidence-based mental health practices to provide accessible, 
                personalized support for your emotional well-being. Our team of experienced mental health professionals ensures 
                the highest quality of care and guidance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-dark-green/10"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-dark-green">{member.name}</h3>
                    <p className="text-dark-green/60 mb-2">{member.role}</p>
                    <p className="text-dark-green/80">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
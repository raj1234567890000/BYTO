import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMobile, FaShieldAlt, FaRocket, FaUsers } from 'react-icons/fa';

const WelcomePage = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const featureVariants = {
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <span className="text-2xl font-bold text-orange-500">BYTO</span>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="px-6 py-2 bg-orange-400 text-white rounded-lg font-medium hover:bg-orange-500 transition-colors flex items-center gap-2"
          >
            Get Started <FaArrowRight />
          </Link>
        </motion.div>
      </nav>

    
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-6 py-16 md:py-24 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Welcome to <span className="text-orange-500">BYTO</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12"
        >
          Revolutionizing the way you connect, collaborate, and create with our cutting-edge platform.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
        >
          <Link 
            to=""
            className="px-8 py-3 bg-orange-400 text-white rounded-lg font-medium hover:bg-orange-500 transition-colors text-lg flex items-center justify-center gap-2"
          >
            Join Now <FaArrowRight />
          </Link>
          <Link 
            to=""
            className="px-8 py-3 border-2 border-orange-400 text-orange-500 rounded-lg font-medium hover:bg-orange-100 transition-colors text-lg"
          >
            Learn More
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="BYTO Platform" 
            className="w-full h-auto"
          />
          <motion.div 
            className="absolute inset-0 bg-indigo-600/10"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </motion.section>

      
      <motion.section 
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="text-orange-500">BYTO</span>?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaMobile className="text-4xl text-indigo-600 mb-4" />,
                title: "Seamless Experience",
                desc: "Intuitive interface that works across all your devices"
              },
              {
                icon: <FaShieldAlt className="text-4xl text-indigo-600 mb-4" />,
                title: "Enterprise Security",
                desc: "Military-grade encryption to protect your data"
              },
              {
                icon: <FaRocket className="text-4xl text-indigo-600 mb-4" />,
                title: "Lightning Fast",
                desc: "Optimized performance for maximum productivity"
              },
              {
                icon: <FaUsers className="text-4xl text-indigo-600 mb-4" />,
                title: "Collaborative",
                desc: "Real-time collaboration tools for your team"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover="hover"
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-default"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-center mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

     
      <motion.section 
        className="bg-orange-500 py-20 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Experience?
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of satisfied users who trust BYTO for their daily needs.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to=""
              className="inline-block px-10 py-4 bg-white text-orange-500 rounded-lg font-bold text-lg hover:bg-orange-100 transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </motion.section>


      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold text-indigo-400">BYTO</span>
              <p className="text-gray-400 mt-2">Innovating for your future</p>
            </div>
            <div className="flex gap-6">
              <Link to="" className="hover:text-indigo-400 transition-colors">About</Link>
              <Link to="" className="hover:text-indigo-400 transition-colors">Features</Link>
              <Link to="" className="hover:text-indigo-400 transition-colors">Pricing</Link>
              <Link to="" className="hover:text-indigo-400 transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} BYTO Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
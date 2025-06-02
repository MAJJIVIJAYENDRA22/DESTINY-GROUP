
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import PageHero from '@/components/PageHero';
import FileUpload from '@/components/FileUpload';
import { Award, Heart, Users } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Interior Designer',
    type: 'Full-time',
    location: 'On-site',
    description: 'We are looking for an experienced interior designer to join our team and lead residential projects.',
    requirements: [
      'Minimum 1+ years of experience in interior design',
      'Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite',
      'Strong portfolio showcasing residential design projects',
      'Excellent communication and client management skills',
    ],
  },
  {
    id: 2,
    title: '3D Visualization Artist',
    type: 'Full-time',
    location: 'Remote',
    description: 'Join our creative team to create stunning 3D renderings and visualizations of our design projects.',
    requirements: [
      'Experience with 3ds Max, V-Ray, and Corona Renderer',
      'Strong understanding of lighting, materials, and composition',
      'Attention to detail and ability to create photorealistic renders',
      'Knowledge of interior design principles',
    ],
  },
  {
    id: 3,
    title: 'Project Coordinator',
    type: 'Full-time',
    location: 'On-site',
    description: 'Coordinate interior design projects from concept to completion, ensuring timely delivery and client satisfaction.',
    requirements: [
      'Experience in project management within design or construction industry',
      'Strong organizational and multitasking abilities',
      'Excellent communication and problem-solving skills',
      'Knowledge of design software and project management tools',
    ],
  },
  {
    id: 4,
    title: 'Design Intern',
    type: 'Internship',
    location: 'On-site',
    description: 'A 3-month internship opportunity to work alongside our design team and gain hands-on experience in the industry.',
    requirements: [
      'Currently pursuing a degree in Interior Design or related field',
      'Basic knowledge of design software',
      'Strong interest in residential and commercial interior design',
      'Creative mindset and willingness to learn',
    ],
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resume) {
      toast({
        title: "Error",
        description: "Please upload your resume.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulating form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Application submitted:', { ...formData, resume });
      
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
      });
      setResume(null);
      setSelectedJob(null);
    } catch (error) {
      console.error('Application submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero 
        title="Join Our Team" 
        subtitle="Build your career with DESTINYGROUP" 
        background="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
      />
      
      {/* Company Culture */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Culture</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Join a team that values creativity, collaboration, and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={48} className="text-destiny-gold mb-4" />,
                title: "Collaborative Environment",
                description: "Work alongside talented professionals in a supportive and collaborative atmosphere."
              },
              {
                icon: <Heart size={48} className="text-destiny-gold mb-4" />,
                title: "Work-Life Balance",
                description: "We value your personal time and well-being, promoting a healthy balance between work and life."
              },
              {
                icon: <Award size={48} className="text-destiny-gold mb-4" />,
                title: "Growth Opportunities",
                description: "Continuous learning and professional development are part of our company culture."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-md shadow-md text-center">
                {item.icon}
                <h3 className="text-xl font-serif font-medium mb-3 text-destiny-darkBrown">
                  {item.title}
                </h3>
                <p className="text-destiny-darkGray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Current Openings */}
      <section className="py-20 bg-destiny-lightGray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Current Openings</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Explore our available positions and find your perfect role
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map(job => (
              <div key={job.id} className="bg-white rounded-md shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-medium text-destiny-darkBrown">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-destiny-beige text-destiny-brown text-xs px-2 py-1 rounded">
                          {job.type}
                        </span>
                        <span className="bg-destiny-lightGray text-destiny-darkGray text-xs px-2 py-1 rounded">
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedJob(selectedJob === job.id ? null : job.id);
                        if (selectedJob !== job.id) {
                          setFormData(prev => ({ ...prev, position: job.title }));
                        }
                      }}
                      className={`px-4 py-2 rounded-sm transition-colors ${
                        selectedJob === job.id
                          ? 'bg-destiny-brown text-white'
                          : 'bg-destiny-gold text-white hover:bg-destiny-brown'
                      }`}
                    >
                      {selectedJob === job.id ? 'Close' : 'Apply Now'}
                    </button>
                  </div>
                  
                  <p className="text-destiny-darkGray mb-4">{job.description}</p>
                  
                  <div className="mb-2 font-medium text-destiny-brown">Requirements:</div>
                  <ul className="list-disc list-inside text-destiny-darkGray space-y-1 ml-2">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Application Form */}
                {selectedJob === job.id && (
                  <div className="border-t border-destiny-beige/50 p-6 bg-destiny-beige/10">
                    <h4 className="text-lg font-serif font-medium mb-4 text-destiny-darkBrown">
                      Apply for {job.title}
                    </h4>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-destiny-darkGray mb-2">Full Name *</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-destiny-darkGray mb-2">Email Address *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-destiny-darkGray mb-2">Phone Number *</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50"
                          />
                        </div>
                        <div>
                          <label htmlFor="position" className="block text-destiny-darkGray mb-2">Position *</label>
                          <input
                            id="position"
                            name="position"
                            type="text"
                            required
                            value={formData.position}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50 bg-destiny-beige/20"
                            readOnly
                          />
                        </div>
                      </div>
                      
                      <FileUpload 
                        label="Resume/CV" 
                        id="resume" 
                        accept=".pdf,.doc,.docx" 
                        required={true}
                        onChange={setResume}
                      />
                      
                      <div>
                        <label htmlFor="message" className="block text-destiny-darkGray mb-2">Cover Letter / Additional Information</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-destiny-gray/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-destiny-gold/50 resize-none"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full md:w-auto flex items-center justify-center"
                      >
                        {loading ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;

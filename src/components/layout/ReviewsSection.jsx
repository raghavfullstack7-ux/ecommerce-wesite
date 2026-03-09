import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 border border-ink/10 rounded-2xl min-w-[300px] md:min-w-[400px] bg-white shadow-sm"
    >
      <div className="flex mb-3 md:mb-5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < review.rating ? 'fill-gold text-gold' : 'text-smoke/20'} 
          />
        ))}
      </div>
      
      <div className="flex items-center gap-1 mb-2 md:mb-3">
        <h4 className="font-bold text-base md:text-lg">{review.name}</h4>
        <CheckCircle2 size={16} className="text-success fill-success/10" />
      </div>
      
      <p className="text-sm md:text-base text-charcoal leading-relaxed font-body italic italic">
        "{review.comment}"
      </p>
    </motion.div>
  );
};

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
      name: 'Alex K.',
      rating: 5,
      comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes."
    },
    {
      name: 'James L.',
      rating: 5,
      comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
  ];

  return (
    <section className="py-24 bg-chalk overflow-hidden">
      <div className="container-fashion">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-display">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-4">
             {/* Navigation dots or arrows could go here */}
          </div>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

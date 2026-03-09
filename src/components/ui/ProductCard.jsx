import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Star, Heart, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem(product, 1, 'M');
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] bg-ash rounded-xl overflow-hidden mb-5">
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full flex items-center justify-center relative"
        >
          {/* Mock Product Visual */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-all"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            {!product.image && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-ash">
                 <div className="w-24 h-24 bg-ink/5 rounded-full mb-4 opacity-20" />
                 <p className="font-display text-xs text-smoke tracking-widest uppercase">Select Item</p>
              </div>
            )}
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
            {product.discount && (
              <span className="bg-danger text-chalk text-[9px] font-bold px-2 py-1 rounded flex items-center gap-1">
                -{product.discount}%
              </span>
            )}
            {product.isNew && (
              <span className="bg-sale-neon text-ink text-[9px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
                New
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 z-20">
            <button 
              onClick={(e) => { e.stopPropagation(); /* Wishlist logic */ }}
              className="w-9 h-9 bg-chalk/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-ink hover:text-chalk transition-all"
            >
              <Heart size={16} />
            </button>
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                onClick={handleAddToCart}
                className="absolute bottom-6 left-6 right-6 bg-ink text-chalk py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 z-20 hover:bg-smoke transition-colors"
              >
                <ShoppingBag size={14} /> Add to Cart
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Info - Floats slightly forward in 3D space */}
      <motion.div style={{ translateZ: "20px" }}>
        <h3 className="font-body font-bold text-base mb-1 truncate group-hover:underline">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-smoke/30'} 
              />
            ))}
          </div>
          <span className="text-[10px] text-smoke font-medium">
            {product.rating}/5 <span className="text-smoke/50 ml-1">({product.reviews})</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-lg">${product.price}</span>
          {product.oldPrice && (
            <span className="font-mono text-smoke line-through text-sm">${product.oldPrice}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;

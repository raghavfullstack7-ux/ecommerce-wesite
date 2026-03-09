import CategoryPage from './CategoryPage';

const NewArrivalsPage = () => {
  return (
    <div className="relative">
       <div className="absolute top-32 left-0 w-full bg-sale-neon py-4 transform rotate-1 z-10 shadow-lg">
          <div className="container-fashion flex justify-between">
             {[1,2,3,4,5].map(i => (
                <span key={i} className="text-ink font-display text-4xl italic tracking-tighter uppercase">Fresh From The Atelier — SS26 Collection</span>
             ))}
          </div>
       </div>
       <CategoryPage />
    </div>
  );
};

export default NewArrivalsPage;

import CategoryPage from './CategoryPage';

const OnSalePage = () => {
  return (
    <div className="relative">
       <div className="absolute top-32 left-0 w-full bg-danger py-4 transform -rotate-1 z-10 shadow-lg">
          <div className="container-fashion flex justify-between">
             {[1,2,3,4,5].map(i => (
                <span key={i} className="text-white font-display text-4xl italic tracking-tighter">UP TO 50% OFF — SEASON END SALE</span>
             ))}
          </div>
       </div>
       <CategoryPage />
    </div>
  );
};

export default OnSalePage;

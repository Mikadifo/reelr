function MovieListSkeleton() {
  return (
    <div className="mt-6 mb-12 animate-pulse">
      <div className="flex flex-wrap gap-9">
        {new Array(5).fill(null).map((_, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <div className="w-[120px] h-[170px] bg-dark-accent rounded-2xl" />
            <div className="w-[120px] h-[17px] bg-dark-accent rounded-lg" />
            <div className="w-[80px] h-[17px] bg-dark-accent rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovieListSkeleton;

const OwnerText: React.FC = () => {
    return (
      //display text
      <div> 
        <h1 className="text-white"> My name is</h1>
        <h2 className="text-navy-blue pt-4  px-8 lg:text-8xl md:text-8xl text-5xl font-bold">
          Jack
        </h2>
        <h3 className="text-gray-lite pt-12 text-xs w-25 h-10 lg:text-2xl md:text-base">
          newcomer to front-end development
        </h3>
        <h3 className="text-gray-lite pt-4 text-xs w-auto h-auto lg:text-2xl lg:pt-9 md:text-base md:pt-7">
          Exploring of the front-end.
        </h3>
        </div>
    );
}

export default OwnerText;
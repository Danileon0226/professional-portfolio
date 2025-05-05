import React from 'react';

const Loader = () => (
  <div className="flex items-center justify-center min-h-[200px] w-full">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
  </div>
);

export default Loader;

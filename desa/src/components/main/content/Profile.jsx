import React from 'react';
import About from './About';
import PemerintahanDesa from './Pemerintahan';
import PelayananLayanan from './Layanan';
import SumberDayaDesa from './Resource';

function Profile() {
  return (
    <div className="bg-gray-200 p-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="md:col-span-2 lg:col-span-3 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <About />
              <PemerintahanDesa />
              <PelayananLayanan />
              <SumberDayaDesa />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

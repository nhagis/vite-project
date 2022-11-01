import React from 'react';
import { heroData } from '../utils/data';
import Delivery from './img/delivery.png';
import HeroBg from './img/heroBg.png';

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Ecommerce Stores
          </p>
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          ISMMart will provide a{' '}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Virtual Space
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          ISMMart is an ecommerce platform providing a virtual space to
          sellers/vendors where they can advertise, market and sell their
          products or services. The concept of ISMMart was established when we
          saw a huge trust deficit between sellers and buyers. Considering that
          problem, we at Shaukat Marwat wanted to provide people with a reliable
          and trust worthy platform which will ensure utmost security of buyers’
          money and services.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg
        hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
        >
          Order now
        </button>
      </div>
      <div className="py-2 flex flex-1 items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="Hero Bg"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md drop-shadow-lg rounded-3xl flex flex-col items-center justify-center"
              >
                <img
                  src={n.imageSrc}
                  alt="I1"
                  className="w-20 -mt-10  lg:w-40 lg:-mt-20"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;

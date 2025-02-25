
// Fix the image imports to match the style in App.js
// Using relative paths with "../../" instead of "/"
import restAll from "../../2.jpg";
import CP2 from "../../credits@Baricci_SA (1).jpg";
import dvlm from "../../IMG_0583 (1).jpg";
import kailash from "../../IMG_0345.jpg";
import HKA from "../../Diljit.jpg";
import Jasleen from "../../Jasleen royal.jpg";
import hk from "../../VIN09998.jpg";
import jl from "../../_1.jpg";
import t from "../../1721741656315.jpg";
import sb from "../../DSC06328-3.jpg";
import ka from "../../VIN00330.jpg";
import dsc from "../../DSC04569-3.jpg"

const Work = () => {
  // Add padding-top to push content below the fixed navbar
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">More Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            kailash,
            restAll,
            CP2,
            dvlm,
            Jasleen,
            HKA,
            hk,
            ka,
            sb,
            t,
            jl,
            dsc
          ].map((url, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={url}
                alt={`Event Photography ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
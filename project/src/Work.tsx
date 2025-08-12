

// Consistent imports with App.tsx
import restAll from "../../credits@baricci_SA_LOW_RES-017.webp";
import cover from "../../Credits@baricci_MP-8229.webp";
import Cp from "../../cpg.webp";
import CP2 from "../../credits@Baricci_SA (1).webp";
import dvlm from "../../MAP05446.webp";
import kailash from "../../ka.webp";
import HKA from "../../Diljit.webp";
import Jasleen from "../../credits@baricci_mp--7.webp";

// Additional images from original Work.tsx
import hk from "../../VIN09998.webp";
import jl from "../../_1.webp";
import t from "../../1721741656315.webp";
import sb from "../../DSC06328-3.webp";
import ka from "../../VIN00330.webp";
import dsc from "../../DSC04569-3.webp";
import hs from "../../KFxHS_B2-17.webp"

const Work = () => {
  // Add padding-top to push content below the fixed navbar
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">More Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
             Cp,      // Added from App.tsx
             cover,   // Added from App.tsx
             hk,
             ka,
             sb,
             t,
             jl,
             dsc,
             hs,
            kailash,
            restAll,
            CP2,
            dvlm,
            Jasleen,
            HKA,
           
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
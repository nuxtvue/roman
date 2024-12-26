import { motion } from "motion/react";
import CtaIllustration from "@/assets/images/cta-illustration.svg";
import PricingIllustration from "@/assets/images/pricing-illustration.svg";
const HeroImg = () => {
  return (
    <div>
      <div className="relative ">
        <div className="mt-[50px]">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 760 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 1,
              restDelta: 0.001,
              restSpeed: 0.001,
              velocity: 0.001,
            }}
            className="w-full"
            src={CtaIllustration}
            alt="cta-illustration"
          />
        </div>
        <div className="absolute top-[100px] right-[100px] w-[450px] ">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 760 }}
            transition={{ duration: 1, delay: 1 }}
            width={400}
            src={PricingIllustration}
            alt="pricing-illustration"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImg;

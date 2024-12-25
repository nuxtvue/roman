import { motion } from "motion/react";
function App() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold underline text-red-500"
      >
        Привет МИР
      </motion.h1>
      
    </>
  );
}

export default App;

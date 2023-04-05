import { useEffect } from "react";
import MainScreenStyled from "./MainScreenStyled";
import { motion, useAnimationControls } from "framer-motion";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import RoomsSelect from "../../components/RoomsSelect/RoomsSelect";
import ExplanationBox from "../../components/ExplanationBox/ExplanationBox";

const MainScreen = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.set({ opacity: 0, x: 100 });

    controls.start((i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }));
  }, [controls]);

  return (
    <MainScreenStyled>
      <HeaderBar className="header" />
      <motion.div custom={4} animate={controls} className="explanationBox">
        <ExplanationBox />
      </motion.div>
      <motion.div custom={5} animate={controls} className="functionalBox">
        <RoomsSelect />
      </motion.div>
    </MainScreenStyled>
  );
};

export default MainScreen;

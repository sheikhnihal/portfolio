import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { resumes } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


import { SectionWrapper } from '../hoc';

const ResumeCard = ({ index, title, text }) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >

        <div className="Resume">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[18px]"><a href="https://flowcv.me/nihalsheikh" target="_blank">🔗 {text}</a></p>
        </div>

      </div>
    </div>
  )
}

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Abstract</p>
        <h2 className={styles.sectionHeadText}
        >Resume.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] 
        max-w-3xl leading-[30px]"
      >
        Curious about my expertise? checkout my resume...
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {resumes.map((resume, index) => (
          <ResumeCard
            key={resume.title}
            index={index}
            {...resume}
          />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Resume, "")

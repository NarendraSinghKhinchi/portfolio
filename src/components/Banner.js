import styles from "./banner.module.css" ;
import SkillCard from './SkillCard';

const Banner = ({ skills, speed = 5000 }) => {
  return (
    <div className={styles.inner}>
      <div className={styles.wrapper}>
        <section className={styles.animatedSkills}>
        {
          skills.map(skill=>(
            <SkillCard key={skill.skill} skill={skill}></SkillCard>
          ))
          
        }
        {
          skills.map(skill=>(
            <SkillCard key={skill.skill} skill={skill}></SkillCard>
          ))
        }
        </section>
        
      </div>
    </div>
  );
};

export { Banner };

import styles from './SkillsStyles.module.css'
import checkMarkIconLight from "../../assets/checkmark-light.svg"
import checkMarkIconDark from "../../assets/checkmark-dark.svg"
import { useTheme } from '../../common/ThemeContext';
import SkillList from '../../common/SkillList.jsx'
function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Python'></SkillList>
            <SkillList src={checkMarkIcon} skill='HTML'></SkillList>
            <SkillList src={checkMarkIcon} skill='CSS'></SkillList>
            <SkillList src={checkMarkIcon} skill='Javascript'></SkillList>
            <SkillList src={checkMarkIcon} skill='React JS'></SkillList>
        </div>
        <hr></hr>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Bootsrap CSS'></SkillList>
            <SkillList src={checkMarkIcon} skill='Tailwind CSS'></SkillList>
            <SkillList src={checkMarkIcon} skill='MS Office'></SkillList>
            
        </div>
        <hr></hr>
    </section>
  )
}

export default Skills;
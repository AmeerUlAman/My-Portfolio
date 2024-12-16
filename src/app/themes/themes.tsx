import styles from './themes.module.css'



const Themes =()=>{
return(
<div className={styles.whole}>
<div className={styles.theme}>
    <div className={styles.im1}></div>
    <p className={styles.title}>Theme 1</p>
 </div>
 <div className={styles.theme}>
    <div className={styles.im2}></div>
    <p className={styles.title}>Theme 2</p>
 </div>
 <div className={styles.theme}>
    <div className={styles.im3}></div>
    <p className={styles.title}>Theme 3</p>
 </div>
</div>
);


}

export default Themes;
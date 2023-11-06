import styles from "./MenuItem.module.css";

const MenuItem = ({ img, price, title, desc }) => {
  return (
    <div>
      <div>
        <img className={styles.img} src={img} alt={title} />
      </div>
      <div className={styles.menuNamePrice}>
        <h3 className={styles.h3}>{title}</h3>
        <span className={styles.span}>${price}</span>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default MenuItem;

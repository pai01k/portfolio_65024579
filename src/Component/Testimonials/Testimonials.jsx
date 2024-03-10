import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            I Love You 3000 
          </p>
          <img
            src="https://venturecafephiladelphia.org/wp-content/uploads/sites/11/2021/05/dace9a3da47d7d748e13af43f96344a4449c7688_original.jpeg"
            alt=""
          />
          <h4>Tony stark</h4>
          <p className={styles.bio}>Technician</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          with great power comes great responsibility.
          </p>
          <img
            src="https://deadline.com/wp-content/uploads/2023/06/tom-holland-spider-man-4.jpg?w=681&h=383&crop=1"
            alt=""
          />
          <h4>Peter parker</h4>
          <p className={styles.bio}>FRIENDLY NEIGHBORHOOD</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          See you again yesterday. อย่าลืมเป็นร้อนในนะครับ เจอปืน(gun)
          </p>
          <img
            src="https://s359.kapook.com/r/600/auto/pagebuilder/6d30657c-4b46-4398-993a-3b39fc706ae7.jpg"
            alt=""
          />
          <h4>Mr. Heartrocker</h4>
          <p className={styles.bio}>Steamer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
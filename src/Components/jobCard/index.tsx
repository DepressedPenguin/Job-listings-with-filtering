// jobCard.js
import { DataT } from "../../App";
import styles from "./jobcard.module.scss";

type JobCardPropsT = {
  userData: DataT;
  setFilteringLangList: React.Dispatch<React.SetStateAction<string[]>>;
};
export default function JobCard({
  userData,
  setFilteringLangList,
}: JobCardPropsT) {
  return (
    <div className={styles.job_card_info}>
      <div className={styles.box_job_img}>
        <div className={styles.box_job_logo_company}>
          <img
            className={styles.company_class}
            src={userData.logo}
            alt={userData.logo}
          />
        </div>
      </div>
      <div className={styles.box_job_title}>
        <div className={styles.title_info_new}>
          <div className={styles.company_name}>
            <p>{userData.company}</p>
          </div>
          <div className={styles.new_post_mention}>
            <p className={userData.new ? styles.new_post_p : ""}>
              {userData.new === true ? "NEW!" : ""}
            </p>
            <p className={userData.featured ? styles.p_featured : ""}>
              {userData.featured === true ? "FEATURED" : ""}
            </p>
          </div>
        </div>
        <div className={styles.title_info_post}>
          <p className={styles.title_post_p}>{userData.position}</p>
        </div>
        <div className={styles.info_details_post}>
          <ul className={styles.ul_time_job_country}>
            <li className={styles.li_time_job}>{userData.postedAt}</li>
            <li className={styles.li_time_job}>{userData.contract}</li>
            <li className={styles.li_time_job}>{userData.location}</li>
          </ul>
        </div>
      </div>
      <div className={styles.necessary_languages}>
        <ul className={styles.languages_ul_post}>
          {userData.languages.map((lang, key) => (
            <li
              key={key}
              className={styles.li_language}
              onClick={() => setFilteringLangList((prev) => [...prev, lang])}
            >
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import styles from "./filter.module.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

type FilterPropsT = {
  filteringLangList: string[];
  setFilteringLangList: React.Dispatch<React.SetStateAction<string[]>>;
};
export default function Filter({
  filteringLangList,
  setFilteringLangList,
}: FilterPropsT) {
  return (
    <>
      <div className={styles.main_filter}>
        <div className={styles.input_filter}>
          <div>
            {filteringLangList.map((lang, key) => {
              return (
                <span className={styles.lang_span} key={key}>
                  {lang}
                </span>
              );
            })}
          </div>
          {/* DIV CLEAR */}
          <div className={styles.clear_div}>
            <button
              onClick={() => {
                setFilteringLangList([]);
              }}
              className={styles.clear_btn}
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

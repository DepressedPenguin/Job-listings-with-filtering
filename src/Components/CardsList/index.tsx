import JobCard from "../jobCard";
import styles from "./cardlist.module.scss";
import { DataT } from "../../App";

// $$$$$$$$$$$$$$$$$$$$

type CardListPropT = {
  dataUsers: DataT[];
  filteringLangList: string[];
  setFilteringLangList: React.Dispatch<React.SetStateAction<string[]>>;
};
export default function CardList({
  dataUsers,
  filteringLangList,
  setFilteringLangList,
}: CardListPropT) {
  // Filter datausers based on selected languages
  const filteredData = dataUsers.filter((obj) => {
    // Check if all languages in listlanguages are included in obj.languages
    return filteringLangList.every((lang) => obj.languages.includes(lang));
  });

  return (
    <>
      <div className={styles.main_cardlist}>
        {filteredData.map((userData, key) => (
          <JobCard
            key={key}
            setFilteringLangList={setFilteringLangList}
            userData={userData}
          />
        ))}
      </div>
    </>
  );
}

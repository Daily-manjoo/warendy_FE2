// main.js
import React from "react";
import styles from "../../pages/main/main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <>
      {/* <Headerbg / > */}
      <div className={styles.headerBg}>
        <div className={styles.bgInner}></div>
        <div className={styles.searchContainer}>
          <form className={styles.searchInner}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            <input type="search" placeholder="어떤 와인이 궁금하신가요?" required className={styles.searchBar} />
          </form>
          <div className={styles.currentContainer}>
            <h1 className={styles.currentSearchTitle}>최근검색어</h1>
            <ul className={styles.currentSearch}>
              <li className={styles.currentSearchItem}>프리미티보 디 만두리아</li>
              <li className={styles.currentSearchItem}>루이자도 샤블리</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.transparentBg}>
        <div className={styles.todayWinesContainer}>
          <div className={styles.todayWines}>
            <div className={styles.todayWineTitle}>오늘의 와인</div>
            <ul className={styles.todayWineList}>
              <li className={styles.arrowContainer}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </li>
              <li className={styles.todayWineItem}></li>
              <li className={styles.todayWineItem}></li>
              <li className={styles.todayWineItem}></li>
              <li className={styles.todayWineItem}></li>
              <li className={styles.arrowContainer}>
                <FontAwesomeIcon icon={faArrowRight} />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.todayMoodContainer}>
          <div className={styles.todayMood}>
            <ul className={styles.todayMoodList}>
              <li className={styles.todayMoodItem}>
                <a href="#">비 오는 날</a>
              </li>
              <li className={styles.todayMoodItem}></li>
              <li className={styles.todayMoodItem}></li>
              <li className={styles.todayMoodItem}></li>
              <li className={styles.todayMoodItem}></li>
              <li className={styles.todayMoodItem}></li>
            </ul>
          </div>
        </div>
        <div className={styles.lovedWineContainer}>
          <div className={styles.lovedWines}>
            <div className={styles.lovedWineTitle}>많은 사랑을 받고 있어요!</div>
            <ul className={styles.lovedWineList}>
              <li className={styles.lovedWineItem}></li>
              <li className={styles.lovedWineItem}></li>
              <li className={styles.lovedWineItem}></li>
              <li className={styles.lovedWineItem}></li>
              <li className={styles.lovedWineItem}></li>
              <li className={styles.lovedWineItem}></li>
              <li className={styles.lovedWineItem}></li>
              <li className={styles.lovedWineItem}></li>
            </ul>
          </div>
        </div>
        <div className={styles.etiquetteContainer}>
          <div className={styles.etiquette}>
            <div className={styles.etiquetteTitle}>와인 에티켓</div>
            <div className={styles.etiquetteList}></div>
          </div>
        </div>
      </div>
    </>
  );
}

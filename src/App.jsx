import { useState } from "react";
import styles from "./App.module.css";
import { IoArrowBack } from "react-icons/io5";
import { IoLogoOctocat } from "react-icons/io";
import {
  FaBookOpen,
  FaUserClock,
  FaUserPlus,
  FaUserTimes,
} from "react-icons/fa";
import { BsFiletypeXlsx } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import NavigationBar from "./componets/navigator";
import Recent from "./componets/recent";
import UserList from "./componets/userList";

const optionList = [
  {
    title: "Dropped Users",
    icon: FaUserClock,
    color: "#9b4fd3",
  },
  {
    title: "Blacklisted Users",
    icon: FaUserTimes,
    color: "#c33d7b",
  },
  {
    title: "Export Data",
    icon: BsFiletypeXlsx,
    color: "#c33d7b",
  },
  {
    title: "Add Guest",
    icon: FaUserPlus,
    color: "#9b4fd3",
  },
];

function App() {
  return (
    <>
      <div className={styles.gradientBackground} />

      <div className={styles.App}>
        {/*header*/}
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <img src="/logoMakeMyPass.svg" alt="MakeMyPass" loading="lazy" />
            <h1>MakeMyPass</h1>
          </div>
          <div className={styles.user}>
            <span>Hoi, Kichu</span>
            <img src="/betmen.jpg" alt="Betmen" loading="lazy" />
          </div>
        </nav>
        {/*content*/}
        <div className={styles.contentTitle}>
          <div className={styles.contentTitleContainer}>
            <IoArrowBack className={styles.backIcon} size={30} />
            <IoLogoOctocat size={30} className={styles.octocatIcon} />
            <h1>Frontend Developer Skill Assessment</h1>
          </div>
          <div className={styles.contentTitleDescription}>
            <FaBookOpen className={styles.bookIcon} size={22} />
            <span>View Dos</span>
          </div>
        </div>
        {/**overview and sttuff */}
        <NavigationBar />
        {/*glance*/}
        <div className={styles.glanceContainer}>
          <h2>At a Glance</h2>
          <p>Last Registered on ummm...</p>
        </div>
        {/*guest */}
        <div className={styles.guestContainer}>
          <span>
            <h3>24/250</h3>
            <p>unique guests</p>
          </span>
          <span>
            <h3>24</h3>
            <p>shortlisted</p>
          </span>
        </div>
        {/*progess */}
        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progressBarFill} />
          </div>
          <span>
            <p>• (24) Registered users</p>
            <p style={{ color: "#9b4fd3" }}>• (226) To achieve target</p>
          </span>
        </div>
        {/*user types */}
        <div className={styles.userTypesContainer}>
          <div className={styles.userTypesContainer2}>
            {optionList.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={styles.userTypeCard}>
                  <h3>{item.title}</h3>
                  <Icon size={20} color={item.color} />
                </div>
              );
            })}
          </div>
        </div>
        {/*Search */}
        <div className={styles.searchContainer}>
          <h2>Guest List</h2>
          <div className={styles.searchBar}>
            <CiSearch className={styles.searchIcon} size={20} />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        {/**Guest Recent */}
        <Recent />
        {/*user list */}
          <UserList />
        {/*footer */}
        <div className={styles.footer}>
          <p>Made with ❤️ by Kichu</p>
          </div>
      </div>
    </>
  );
}

export default App;

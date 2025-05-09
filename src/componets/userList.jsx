import React from "react";
import styles from "./styles/userList.module.css";
import { FaPen, FaRegCheckCircle, FaDollarSign } from "react-icons/fa";
import { HiTicket } from "react-icons/hi2";

const size = 14;

const users = [
  {
    name: "Me",
    username: "kichu12348",
    roles: ["Frontend Developer", "Backend Developer"],
    lastActive: "just now",
  },
  {
    name: "Clifin Cletus",
    username: "clifin18",
    roles: ["Frontend Developer"],
    lastActive: "3 days ago",
  },
  {
    name: "Sreenandhu Jacy",
    username: "sreenandhukj",
    roles: ["Frontend Developer", "Backend Developer"],
    lastActive: "3 days ago",
  },
  {
    name: "Vinayapriya C C",
    username: "vinayapriyaappu1403",
    roles: ["Frontend Developer", "Backend Developer"],
    lastActive: "3 days ago",
  },
  {
    name: "Hanshir",
    username: "hanshirlukku",
    roles: ["Frontend Developer", "Backend Developer"],
    lastActive: "3 days ago",
  },
  {
    name: "Alfiya Rasheed",
    username: "alfiyava42",
    roles: ["Frontend Developer"],
    lastActive: "3 days ago",
  },
  {
    name: "Jibin Gigi",
    username: "jibin23mu",
    roles: [
      "Frontend Developer",
      "Backend Developer",
      "Graphics Designer",
      "UI UX Designer",
    ],
    lastActive: "4 days ago",
  },
  {
    name: "Alex Johnson",
    username: "alexj22",
    roles: ["Backend Developer", "DevOps Engineer"],
    lastActive: "1 day ago",
  },
  {
    name: "Sarah Miller",
    username: "sarahm",
    roles: ["UI UX Designer", "Frontend Developer"],
    lastActive: "just now",
  },
  {
    name: "Raj Patel",
    username: "rajpatel44",
    roles: ["Database Administrator", "Backend Developer"],
    lastActive: "2 days ago",
  },
  {
    name: "Emma Wilson",
    username: "emmaw",
    roles: ["Project Manager", "Graphics Designer"],
    lastActive: "5 days ago",
  },
  {
    name: "Michael Chen",
    username: "mikechen",
    roles: ["Frontend Developer", "UI UX Designer"],
    lastActive: "1 week ago",
  },
];

export default function UserList() {

  return (
    <div className={styles.userList}>
      <div className={styles.userListConatainer}>
        {users.map((user, index) => (
          <div className={styles.userRow} key={index}>
            <div className={styles.nameBlock}>
              <div className={styles.name}>{user.name}</div>
              <div className={styles.username}>{user.username}</div>
            </div>
            <div className={styles.roles}>
              <div className={styles.roleTagContainer}>
                {user.roles.map((role, idx) => {
                  return (
                    <span
                      className={styles.roleTag}
                      key={idx}
                      style={
                        role === "Frontend Developer"
                          ? {
                              color: "var(--off-white)",
                              backgroundColor: "var(--very-transparent-bg)",
                            }
                          : {}
                      }
                    >
                      {role}
                    </span>
                  );
                })}
              </div>
              <div className={styles.activity}>{user.lastActive}</div>
              <FaPen className={styles.editIcon} size={size} />
              <FaRegCheckCircle className={styles.editIcon} size={size} />
              <FaDollarSign className={styles.editIcon} size={size} />
              <HiTicket className={styles.editIcon} size={size} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

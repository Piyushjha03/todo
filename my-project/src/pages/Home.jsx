import { useEffect, useState } from "react";
import DownArrow from "../../public/DownArrow";
import PlusIcon from "../../public/PlusIcon";
import RightArrow from "../../public/RightArrow";
import Navbar from "../components/Navbar";
import LightMode from "../../public/LightMode";
import DarkMode from "../../public/DarkMode";
import Search from "../../public/Search";
import Notifications from "../../public/Notifications";
import Calendar from "../../public/Calendar";
import Task from "../components/task";

const Home = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isTeamsOpen, setIsTeamsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isTasksOpen, setIsTasksOpen] = useState(false);
  const [isRemindersOpen, setIsRemindersOpen] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [isLightMode]);

  return (
    <>
      <div className="homePage-wrapper h-screen w-screen flex font-sans">
        <Navbar />
        <div className="homePage-options h-full min-w-80  bg-white dark:bg-secondaryBlack py-8 px-7 drop-shadow-md shadow-md	flex flex-col">
          <div className="homePage-header flex justify-between items-center ">
            <span className="text-2xl dark:text-white text-black">
              Projects
            </span>
            <span className="p-2 rounded-full bg-light--gray dark:bg-light--dark">
              <PlusIcon className="stroke-black dark:stroke-white" />
            </span>
          </div>
          <div className="homePage-items w-full flex flex-col gap-4 mt-4 select-none text-gray-500 dark:text-white">
            <div
              className="Teams w-full cursor-pointer flex justify-between items-center"
              onClick={() => {
                setIsTeamsOpen(!isTeamsOpen);
              }}
            >
              <span>Team</span>
              <span>
                {isTeamsOpen ? (
                  <DownArrow className="stroke-slate-400 dark:stroke-white" />
                ) : (
                  <RightArrow className="stroke-slate-400 dark:stroke-white" />
                )}
              </span>
            </div>
            <div
              className="Projects w-full flex flex-col justify-between items-center"
              onClick={() => {
                setIsProjectsOpen(!isProjectsOpen);
              }}
            >
              <div className="projects-header w-full cursor-pointer flex justify-between items-center">
                <span>Projects</span>
                <span>
                  {isProjectsOpen ? (
                    <DownArrow className="stroke-slate-400 dark:stroke-white" />
                  ) : (
                    <RightArrow className="stroke-slate-400 dark:stroke-white" />
                  )}
                </span>
              </div>
              <div className="projects-content w-full">
                {isProjectsOpen && (
                  <div className="projects-content-inner">
                    <div className="projects-content-inner-item">
                      <span>Project 1</span>
                    </div>
                    <div className="projects-content-inner-item">
                      <span>Project 2</span>
                    </div>
                    <div className="projects-content-inner-item">
                      <span>Project 3</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className="Tasks w-full flex flex-col justify-between items-center"
              onClick={() => {
                setIsTasksOpen(!isTasksOpen);
              }}
            >
              <div className="Tasks-header w-full cursor-pointer flex justify-between items-center">
                <span>Tasks</span>
                <span>
                  {isTasksOpen ? (
                    <DownArrow className="stroke-slate-400 dark:stroke-white" />
                  ) : (
                    <RightArrow className="stroke-slate-400 dark:stroke-white" />
                  )}
                </span>
              </div>
              <div className="Tasks-content w-full">
                {isTasksOpen && (
                  <div className="Tasks-content-inner">
                    <div className="Tasks-content-inner-item">
                      <span>Task 1</span>
                    </div>
                    <div className="Tasks-content-inner-item">
                      <span>Task 2</span>
                    </div>
                    <div className="Tasks-content-inner-item">
                      <span>Task 3</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className="Reminders w-full flex flex-col justify-between items-center"
              onClick={() => {
                setIsRemindersOpen(!isRemindersOpen);
              }}
            >
              <div className="Reminders-header w-full cursor-pointer flex justify-between items-center">
                <span>Reminders</span>
                <span>
                  {isRemindersOpen ? (
                    <DownArrow className="stroke-slate-400 dark:stroke-white" />
                  ) : (
                    <RightArrow className="stroke-slate-400 dark:stroke-white" />
                  )}
                </span>
              </div>
              <div className="Reminders-content w-full">
                {isRemindersOpen && (
                  <div className="Reminders-content-inner">
                    <div className="Reminders-content-inner-item">
                      <span>Reminder 1</span>
                    </div>
                    <div className="Reminders-content-inner-item">
                      <span>Reminder 2</span>
                    </div>
                    <div className="Reminders-content-inner-item">
                      <span>Reminder 3</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="spacer-option flex grow"></div>
          <div className="darkModeToggle w-full h-11 bg-light--gray dark:bg-light--dark rounded-full p-1 flex gap-2 text-black dark:text-white">
            <div
              className={`light-mode cursor-pointer ${
                isLightMode && "bg-white text-black"
              } flex-1 h-full rounded-full flex justify-center items-center gap-1`}
              onClick={() => {
                setIsLightMode(true);
              }}
            >
              <span>
                <LightMode className="fill-gray-500 dark:fill-white" />
              </span>
              <span>Light</span>
            </div>
            <div
              className={`dark-mode cursor-pointer ${
                !isLightMode && "bg-white text-black"
              } flex-1 h-full rounded-full flex justify-center items-center gap-1`}
              onClick={() => {
                setIsLightMode(false);
              }}
            >
              <DarkMode className="fill-gray-500 dark:fill-secondaryBlack" />
              <span>Dark</span>
            </div>
          </div>
        </div>
        <div className="homePage-content h-full w-full p-8 bg-white dark:bg-primaryBlack">
          <div className="homePage-content-header flex justify-between items-center">
            <span className="text-xl font-bold dark:text-white">
              Welcome back, Piyush!!
            </span>
            <div className="homePage-content-header-options flex gap-4">
              <Search />
              <Notifications />
              <Calendar className="fill-black" />
              <span className="text-gray-400">19th July, 2024</span>
              <div className="profile  	 rounded-full overflow-hidden">
                <img
                  className="object-cover max-h-8 aspect-square"
                  src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
              </div>
            </div>
          </div>
          <div className="alltasks flex gap-3 w-full h-full py-4 dark:text-white">
            <div className="todo flex-1 border-2 border-gray-200 dark:border-gray-500 border-dashed p-2 flex flex-col gap-4 ">
              <span className="text-xl font-bold ">Todo</span>
              <Task
                taskName="Task1"
                taskDescription="Description"
                progress="7/10"
                date="23 NOV 2024"
                people={["p1", "p2", "p3"]}
              />
            </div>
            <div className="inprogress flex-1 border-2 border-gray-200 dark:border-gray-500 border-dashed p-2 flex flex-col gap-4">
              <span className="text-xl font-bold ">In Progress</span>
              <Task
                taskName="Task1"
                taskDescription="Description"
                progress="7/10"
                date="23 NOV 2024"
                people={["p1", "p2", "p3"]}
              />
            </div>
            <div className="done flex-1 border-2 border-gray-200 dark:border-gray-500 border-dashed p-2 flex flex-col gap-4">
              <span className="text-xl font-bold ">Done</span>
              <Task
                taskName="Task1"
                taskDescription="Description"
                progress="10/10"
                date="23 NOV 2024"
                people={["p1", "p2", "p3"]}
              />
              <Task
                taskName="Task1"
                taskDescription="Description"
                progress="10/10"
                date="23 NOV 2024"
                people={["p1", "p2", "p3"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

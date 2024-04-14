const Task = (props) => {
  const pb = eval(props.progress) * 100;
  return (
    <>
      <div className="taskwrapper w-full shadow-md rounded-md border-2 border-gray-200 p-2 flex flex-col gap-2 dark:bg-secondaryBlack ">
        <div className="taskName font-bold text-lg font-[monospace]">
          {props.taskName}
        </div>
        <div className="taskDescription font-light text-sm text-gray-400">
          {props.taskDescription}
        </div>
        <div className="progress flex justify-between items-center">
          <span className="text-gray-500">Progress</span>
          {props.progress}
        </div>
        <div
          className={`progressbar h-1 bg-red-600  rounded-full `}
          style={{ width: `${pb}%` }}
        ></div>
        <div className="footer flex justify-between items-center">
          <div className="date bg-red-100 p-1 rounded-full text-red-500">
            {props.date}
          </div>
          <div className="people relative">
            <img
              className="w-6 aspect-square rounded-full object-cover -ml-2"
              src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <img
              className="w-6 aspect-square rounded-full object-cover absolute top-1 left-0 -ml-1"
              src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <img
              className="w-6 aspect-square rounded-full object-cover absolute top-2 left-0"
              src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;

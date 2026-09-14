function TodolistButton(props) {
  let id = props.id;
  let currentIndex = props.tasks.findIndex((item) => {
    if(item.id == id){
      return true;
    }
  })
  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  let prevButton = (props.tasks[prevIndex] != undefined) ? "👆" : "";
  let nextButton = (props.tasks[nextIndex] != undefined) ? "👇" : "";

  console.log(nextIndex);
  return (
    <>
        <span><button>{prevButton}</button></span>
        <span><button>{nextButton}</button></span>
        <span><button>🗑️</button></span>
    </>
  );
}

export default TodolistButton
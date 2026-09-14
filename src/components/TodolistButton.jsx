function TodolistButton(props) {
  let id = props.id;
  let currentIndex = props.tasks.findIndex((item, index) => {
    if(item.id == id){
      return index;
    }
  })
  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  let prevButton = (props.tasks[prevIndex] != undefined) ? "👆" : "";
  let nextButton = (props.tasks[nextIndex] != undefined) ? "👇" : "";
  return (
    <>
        <span><button>{prevButton}</button></span>
        <span><button>{nextButton}</button></span>
        <span><button>🗑️</button></span>
    </>
  );
}

export default TodolistButton
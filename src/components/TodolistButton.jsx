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

  return (
    <>
        <span><button onClick={() => props.move(currentIndex, prevIndex)}>{prevButton}</button></span>
        <span><button onClick={() => props.move(currentIndex, nextIndex)}>{nextButton}</button></span>
        <span><button onClick={() => props.remove(props.id)}>🗑️</button></span>
    </>
  );
}

export default TodolistButton
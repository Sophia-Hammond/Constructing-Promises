function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }



 function monitorCount(rows, columns) {
    return rows * columns
  };
  
  const numOfMonitors = monitorCount(5,4);
  
  console.log(numOfMonitors);



  function massOfProject(length, width, height) {
    return length * width * height
 };

 const newProjectMass = massOfProject(15, 23, 31);

 console.log(newProjectMass);



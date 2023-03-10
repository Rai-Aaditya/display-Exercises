const viewExercise = document.getElementById('viewExercise');
viewExercise.addEventListener('click', displayExercise);
let displayTable = document.getElementById('displayTable');
let buttonClicked = false;
function displayExercise(){
  const muscle = document.getElementById('muscle');
  if(muscle.value!=null) 
  muscleValue = muscle.value;

  console.log(muscleValue);


  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe2c588ae9mshc2d44cbb999cfa4p1f325djsnfbb89e1ebbce',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
  };
if(buttonClicked==true){
  displayTable.innerHTML  = "";
}
let flag = true;
fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle='+muscleValue, options)
	.then(response => response.json())
	.then(val => {
    val.forEach(element => {
      let row = document.createElement('tr');
      if(flag){
        row.classList.add('table-warning');
        
        let name = document.createElement('td');
        name.textContent = element.name;
        name.classList.add('table-warning', 'cell');
        row.appendChild(name);

        let type = document.createElement('td');
        type.textContent = element.type;
        type.classList.add('table-warning', 'cell');
        row.appendChild(type);
        
        let muscle = document.createElement('td');
        muscle.textContent = element.muscle;
        muscle.classList.add('table-warning', 'cell');
        row.appendChild(muscle);
        
        let equipment = document.createElement('td');
        equipment.textContent = element.equipment;
        equipment.classList.add('table-warning', 'cell');
        row.appendChild(equipment);
        
        let difficulty = document.createElement('td');
        difficulty.textContent = element.difficulty;
        difficulty.classList.add('table-warning', 'cell');
        row.appendChild(difficulty);
      }
      else{
          row.classList.add('table-primary');
          
          let name = document.createElement('td');
          name.textContent = element.name;
          name.classList.add('table-primary', 'cell');
          row.appendChild(name);
  
          let type = document.createElement('td');
          type.textContent = element.type;
          type.classList.add('table-primary', 'cell');
          row.appendChild(type);
          
          let muscle = document.createElement('td');
          muscle.textContent = element.muscle;
          muscle.classList.add('table-primary', 'cell');
          row.appendChild(muscle);
          
          let equipment = document.createElement('td');
          equipment.textContent = element.equipment;
          equipment.classList.add('table-primary', 'cell');
          row.appendChild(equipment);
          
          let difficulty = document.createElement('td');
          difficulty.textContent = element.difficulty;
          difficulty.classList.add('table-primary', 'cell');
          row.appendChild(difficulty);
      }
      flag=!flag;
      displayTable.appendChild(row);
      console.log(element);
    });
  })
	.catch(err => console.error(err));
  buttonClicked = true;
}
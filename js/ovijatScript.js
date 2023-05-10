
const ovijatCars = document.getElementById('ovijat-cars');

async function fetchData() {
    const response = await fetch('carsData.json');
    const dailyCars = await response.json();
    return dailyCars;
  }
  
  fetchData().then(cars => {

  cars.ovijat.forEach(cars => {
    const ovijatCarsDiv = document.createElement('div');
    ovijatCarsDiv.classList.add('col-md-6')
    ovijatCarsDiv.innerHTML = `
    <div class="card mb-4" style="">
      <img class="card-img-top mx-auto" src="images/vehicles/${cars.image}" alt="" style="max-width:300px; max-height:200px" >
      <div class="card-body">
        <h5 class="card-title">${cars.model}</h5>
        <p class="">
        <ul>
        <li>${cars.description[0]}</li>
        <li>${cars.description[1]}</li>
          
        </ul>
      </div>
    </div>`
    ovijatCars.appendChild(ovijatCarsDiv);
  });
    
  });
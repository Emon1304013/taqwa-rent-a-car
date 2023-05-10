
const monthlyCars = document.getElementById('monthly-cars');

async function fetchData() {
    const response = await fetch('carsData.json');
    const dailyCars = await response.json();
    return dailyCars;
  }
  
  fetchData().then(cars => {
    // movies; // fetched movies
    console.log(cars.daily)

  cars.monthly.forEach(cars => {
    const monthlyCarsDiv = document.createElement('div');
    monthlyCarsDiv.classList.add('col-md-6')
    monthlyCarsDiv.innerHTML = `
    <div class="card mb-4" style="">
      <img class="card-img-top mx-auto" src="images/daily_vehicles/${cars.image}" alt="" style="max-width:300px; max-height:200px" >
      <div class="card-body">
        <h5 class="card-title">${cars.model}</h5>
        <p class="">
        <ul>
        <li>${cars.description[0]}</li>
        <li>${cars.description[1]}</li>
          
        </ul>
      </div>
    </div>`
    monthlyCars.appendChild(monthlyCarsDiv);
  });
    
  });
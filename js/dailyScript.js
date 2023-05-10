const dailyCars = document.getElementById('daily-cars');


async function fetchData() {
    const response = await fetch('carsData.json');
    const dailyCars = await response.json();
    return dailyCars;
  }
  
  fetchData().then(cars => {
    // movies; // fetched movies
    console.log(cars.daily)


  cars.daily.forEach(cars => {
    const dailyCarsDiv = document.createElement('div');
    dailyCarsDiv.classList.add('col-md-6')
    dailyCarsDiv.innerHTML = `
    <div class="card mb-4" style="">
      <img class="card-img-top mx-auto" src="images/vehicles/${cars.image}" alt="" style="max-width:300px; max-height:200px" >
      <div class="card-body">
        <h5 class="card-title">${cars.model}</h5>
        <p class="">
        <ul>
        <li>${cars.description[0]}</li>
        <li>${cars.description[1]}</li>
        <li>${cars.description[2]}</li>
        <li>${cars.description[3]}</li>
          
        </ul>
      </div>
    </div>`
  dailyCars.appendChild(dailyCarsDiv);
  });
    
  });
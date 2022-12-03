async function GetAllCountries() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7cc31a38d0mshbd65e2c19b579c5p1c3cf0jsnb386704a9864',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  await fetch('https://covid-193.p.rapidapi.com/statistics', options)
    .then(response => response.json())
    .then(data => {
      let html = '';
      data.response.forEach(ctry => {
        console.log(ctry);
        if (ctry.deaths.total > 10000) {
          html +=
            `
                <table class="table table-bordered bg-white my-2 tablee">
                            <thead>
                              <tr>
                                <th scope="col">Country</th>
                                <th scope="col">Population</th>
                                <th scope="col">New Confirmed</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">Deaths</th>
                                <th scope="col">Critical</th>
                                <th scope="col">Total Tests</th>
                                <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>${ctry.country}</td>
                                <td>${ctry.population}</td>
                                <td class="bg-danger text-white">${ctry.cases.new}</td> 
                                <td class="bg-success text-white">${ctry.cases.recovered}</td>
                                <td class="bg-danger text-white">${ctry.deaths.total}</td>
                                <td>${ctry.cases.critical}</td>
                                <td>${ctry.tests.total}</td>
                                <td>${ctry.cases.total}</td>
                              </tr>
                            </tbody>
                          </table>    
                    </div>  
            
                `
          document.getElementById('List').innerHTML = html
        }

      })


    })


}
GetAllCountries();
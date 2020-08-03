window.onload = function(){

    
    let url = `https://api.covid19api.com/summary`;

    let globalData = document.querySelector('.globalData');
    let dataList = document.querySelector('.tableBody');
    let dataList2 = document.querySelector('.dataBody');


    fetch(url)
    .then( response => response.json() )
    .then( result => {      
      let data = result;

      //Country wise data
      let countriesList = result.Countries;
      let list = "";
      countriesList.map( function(data) { 
         list += `         
            <tr>
              <td class="countryRow">${data.Country}</th>
              <td class="totalCasesRow">${data.TotalConfirmed}</td>
              <td class="totalRecoveredRow">${data.TotalRecovered}</td>
              <td class="totalDeathsRow">${data.TotalDeaths}</td>
              <td class="newCasesRow">${data.NewConfirmed}</td>                            
              <td class="newRecoveredRow">${data.NewRecovered}</td>
              <td class="newDeathsRow">${data.NewDeaths}</td>
            </tr>
         `;
         })
      dataList.innerHTML = list;

      // Global Data
      let gData = result.Global;
      globalData.innerHTML =`
      <div class="col-12 col-md-4 pb-5 mx-auto">
            <div class="row text-center">
              <div class="col-12 globalTotalCasesHeader">Total Cases</div>
            </div>
            <div class="row text-center">
              <div class="col-12 globalTotalCases">${gData.TotalConfirmed}</div>
            </div>
          </div>
          <div class="col-12 col-md-4 pb-5 mx-auto">
            <div class="row text-center">
              <div class="col-12 globalTotalRecoveredHeader">Total Recovered</div>
            </div>
            <div class="row text-center">
              <div class="col-12 globalTotalRecovered">${gData.TotalRecovered}</div>
            </div>
          </div>
          <div class="col-12 col-md-4 pb-5 mx-auto">
            <div class="row text-center">
              <div class="col-12 globalTotalDeathsHeader">Total Deaths</div>
            </div>
            <div class="row text-center">
              <div class="col-12 globalTotalDeaths">${gData.TotalDeaths}</div>
            </div>
          </div>         
        </div>`
    
    
      
      //Last updated
      let months = [ " January ", " February ", " March ", " April ", " May ", " June ", " July ", " August ", " September ", " October ", " November ", " December " ];
      let lastUpdated = data.Date.slice(8,10) + months[parseInt(data.Date.slice(5,8)) - 1] + data.Date.slice(0,4) + ", " + data.Date.slice(11,19) + "(UTC)";
      $(".lastUpdated").append(lastUpdated);

      //Country wise data in Slider 
      let countriesList2 = result.Countries;
      let list2 = `
              <div class="carousel-item active" data-interval="1000">
                <div class="card text-center"  style="margin-left:10%;margin-right:10%;margin-bottom:50px;">
                  <div class="card-header display-4">
                    Global Data
                  </div>
                  <div class="card-body" style="margin-left:10%; margin-right:10%; display: grid; grid-template-columns: 18rem 18rem 18rem; grid-gap: 10px;">
                    <div class="card" style="width: 18rem;">
                      <div class="card-header bg-primary text-light">
                        <h4 style="font-weight:bold;">Total Cases</h4>
                      </div>
                      <div class="card-body text-primary">
                      <h2 style="font-weight:bold;">${gData.TotalConfirmed}</h2>
                      </div>
                    </div>

                    <div class="card" style="width: 18rem;">
                      <div class="card-header bg-success text-light">
                      <h4 style="font-weight:bold;">Total Recovered</h4>
                      </div>
                      <div class="card-body text-success">
                      <h2 style="font-weight:bold;">${gData.TotalRecovered}</h2>
                      </div>
                    </div>

                    <div class="card" style="width: 18rem;">
                      <div class="card-header bg-danger text-light">
                      <h4 style="font-weight:bold;">Total Deaths</h4>
                      </div>
                      <div class="card-body text-danger">
                      <h2 style="font-weight:bold;">${gData.TotalDeaths}</h2>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-muted">
                    ${lastUpdated}
                  </div>
                </div>
              </div>
      `;
      countriesList2.map( function(data) { 
         list2 += `            
         <div class="carousel-item" data-interval="10000" style="margin-bottom:50px;">
         <div class="card text-center" style="margin: 0px 10%;">
           <div class="card-header">
            ${data.Country}
           </div>
           <div class="card-body" style="margin-left:10%; margin-right:10%; display: grid; grid-template-columns: 18rem 18rem 18rem; grid-gap: 10px;">
             <div class="card" style="width: 18rem;">
               <div class="card-header bg-primary text-light">
                 Total Cases
               </div>
               <div class="card-body text-primary">
                 ${data.TotalConfirmed}
               </div>
             </div>

             <div class="card" style="width: 18rem;">
               <div class="card-header bg-success text-light">
                 Total Recovered
               </div>
               <div class="card-body text-success">
               ${data.TotalRecovered}
               </div>
             </div>

             <div class="card" style="width: 18rem;">
               <div class="card-header bg-danger text-light">
                 Total Deaths
               </div>
               <div class="card-body text-danger">
               ${data.TotalDeaths}
               </div>
             </div>

             <div class="card" style="width: 18rem;">
               <div class="card-header bg-primary text-light">
                 New Cases
               </div>
               <div class="card-body text-primary">
               ${data.NewConfirmed}
               </div>
             </div>

             <div class="card" style="width: 18rem;">
               <div class="card-header bg-success text-light">
                 New Recovered
               </div>
               <div class="card-body text-success">
               ${data.NewRecovered}
               </div>
             </div>

             <div class="card" style="width: 18rem;">
               <div class="card-header bg-danger text-light">
                 New Deaths
               </div>
               <div class="card-body text-danger">
               ${data.NewDeaths}
               </div>
             </div>
           
           </div>
           <div class="card-footer text-muted">
             ${lastUpdated}
           </div>
         </div>
       </div>
         `;
         })
      dataList2.innerHTML = list2;
      
        //Back to top
        $('.backToTop').click(function() {
            $('body,html').animate({
                scrollTop : 0
            }, 500);
        });

    })
    .catch( error => console.log('The Error is = ' + error) )
}

function searchFunction() {
    // Declare variables
    let notFound = document.getElementById("notFound");
    let key = 0;
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchBox");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            key++;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    if (key==0) {
      notFound.classList.remove("d-none");
    } else {
      notFound.classList.add("d-none");
    }
  }

document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetch-button");
    const tableElement = document.getElementById("pro-table");

    fetchButton.addEventListener("click", () => {
        fetch("mypro.json")
        .then((response) => response.json())
        .then((data) => {
          //Creating the header for the table
          const tableHeader = `
            <tr>
              <th>Company Name</th>
              <th>Position</th>
              <th>End Date</th>
            </tr>
          `;
          
          
          const tableRows = data.prof.map((prof) => {
            const {position, company, year} = prof;
            
            return `
              <tr>
                <td>${company}</td>
                <td>${position}</td>
                <td>${year}</td>
              </tr>
            `;
          });
          
          const tableHTML = tableHeader + tableRows.join("");
          tableElement.innerHTML = tableHTML;

        })

        .catch((error) => {
            console.log("An error occured:", error);
        });
  });
});


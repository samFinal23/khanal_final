document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetch-button");
    const tableElement = document.getElementById("school-table");

    fetchButton.addEventListener("click", () => {
        fetch("mydata.json")
        .then((response) => response.json())
        .then((data) => {
          //Creating the header for the table
          const tableHeader = `
            <tr>
              <th>School Name</th>
              <th>Degree</th>
              <th>Year</th>
              <th>Major</th>
              <th> Favorite Course</th>
            </tr>
          `;
          
          
          const tableRows = data.school.map((school) => {
            const {name, degree, year, major, course} = school;
            const majorList = major.join(", ");
            const courseList = course.join(", ");
            
            return `
              <tr>
                <td>${name}</td>
                <td>${degree}</td>
                <td>${year}</td>
                <td>${majorList}</td>
                <td>${courseList}</td>
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


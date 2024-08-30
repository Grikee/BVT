function searchEmails() {
    // Get the search input value
    let input = document.getElementById("email-search");
    let filter = input.value.toLowerCase();
    
    // Get the table and rows
    let table = document.querySelector(".table tbody");
    let rows = table.getElementsByTagName("tr");
    
    // Loop through all table rows and hide those that don't match the search query
    for (let i = 0; i < rows.length; i++) {
        let columns = rows[i].getElementsByTagName("td");
        let found = false;

        // Check each column in the row
        for (let j = 0; j < columns.length; j++) {
            if (columns[j]) {
                if (columns[j].innerText.toLowerCase().indexOf(filter) > -1) {
                    found = true;
                    break;
                }
            }
        }

        // If found, show the row; otherwise, hide it
        if (found) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

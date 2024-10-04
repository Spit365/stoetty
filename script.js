        // Get the button, popup1, and other elements
        var popupBtn1 = document.getElementById("popupBtn1");
        var popup1 = document.getElementById("popup1");
        var closepopup1 = document.getElementById("closepopup1");
        var saveBtn1 = document.getElementById("saveBtn1");
        var textInput1 = document.getElementById("textInput1");

        // Show the popup1 when button is clicked
        popupBtn1.onclick = function() {
            popup1.style.display = "block";
            // Restore the saved text when reopening the popup1
            textInput1.value = localStorage.getItem("textInput1");
        }

        // Close the popup1 when the "close" button is clicked
        closepopup1.onclick = function() {
            popup1.style.display = "none";
        }

        // Save the input text when the "save" button is clicked
        saveBtn1.onclick = function() {
            localStorage.setItem("SaveField1", textInput1.value);
        }
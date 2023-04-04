document.addEventListener("DOMContentLoaded", function() {

    // stores file uploaded by user
    const resume = document.getElementById("resume");

    // executes when user clicks upload button
    document.getElementById("resumeUpload").addEventListener("click", function() {

        // checks if a user has selected a file
        if (!(resume.files.length === 0)) {

            /***************************
             * PARSING LOGIC GOES HERE *
             ***************************/

        }

        // no file selected
        else {}
    });
}); 
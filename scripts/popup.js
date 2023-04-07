document.addEventListener("DOMContentLoaded", function() {

    // stores file uploaded by user
    var resume = document.getElementById("resume");
    var resumeTxt = "";

    // executes when user clicks upload button
    document.getElementById("resumeUpload").addEventListener("click", function() {

        // checks if a user has selected a file
        if (!(resume.files.length === 0)) {

            /***************************
             * PARSING LOGIC GOES HERE *
             ***************************/

            var file = resume.files[0];
            console.log(file);
            
            var reader = new FileReader();
            reader.onload = function(event) {
              var buffer = event.target.result;
              mammoth.extractRawText({arrayBuffer: buffer})
                .then(function(result) {
                  resumeTxt = result.value;
                  console.log(resumeTxt);
                  chrome.storage.sync.set({ myResume: resumeTxt }, function() {
                    console.log('Resume is saved!');
                  });
                  /* Call parse or compare function here */
                })
                .done();
            };
            reader.readAsArrayBuffer(file);

        }

        // no file selected
        else {
          console.log("No file selected!")
        }
    });

    document.getElementById("resumeOpen").addEventListener("click", function() {
      chrome.storage.sync.get(['myResume'], function(result) {

        const html = `
          <html>
            <head>
              <title>My Resume</title>
              <style>
                p {
                  font-size: 12px;
                }
              </style>
            </head>
            <body>
              <pre><p>${result.myResume}</p></pre>
            </body>
          </html>
        `;

        var blob = new Blob([html], {type: 'text/html'});
        var url = URL.createObjectURL(blob);
        chrome.tabs.create({url: url});

      });
    });




}); 

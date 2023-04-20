function updatePopUp() {
  chrome.storage.sync.get(['myResume'], function(result) {
  

    if (result.myResume) {
      document.getElementById("resumeOpen").disabled = false;
      document.getElementById("resumeDelete").disabled = false;
      chrome.storage.sync.get(['myResumeName'], function(resultName) {
        document.getElementById("resumeName").textContent = resultName.myResumeName;
        chrome.storage.sync.get(['myResumeUploadTime'], function(resultDate) {
          document.getElementById("resumeUploadTimeTxt").textContent = "Uploaded on " + resultDate.myResumeUploadTime;
        });
      });
    } else {
        document.getElementById("resumeName").textContent = "No Resume Uploaded!";
        document.getElementById("resumeUploadTimeTxt").textContent = "";
        document.getElementById("resumeOpen").disabled = true;
        document.getElementById("resumeDelete").disabled = true;
    }
  });
}

function viewResume() {
  chrome.storage.sync.get(['myResume'], function(result) {
    chrome.storage.sync.get(['myResumeName'], function(resultName) {
      chrome.storage.sync.get(['myResumeUploadTime'], function(resultDate) {

        const html = `
          <html>
            <head>
              <title>My resume - ${resultName.myResumeName}</title>
              <style>
                p {
                  font-size: 12px;
                }
              </style>
            </head>
            <body>
              <pre><h2><u>${resultName.myResumeName} - Uploaded on ${resultDate.myResumeUploadTime}</u></h2></pre>
              <br>
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
}

function uploadNewResume() {

  var resume = document.getElementById("resume");
  var resumeTxt = "";

  // checks if a user has selected a file
  if (!(resume.files.length === 0)) {

    var file = resume.files[0];
    console.log(file);
    var fileName = file.name;
    var currTime = new Date();
    var uploadTimeTxt = " " + (currTime.getMonth()+1) + "/" + currTime.getDate() + "/" + currTime.getFullYear();
    
    var reader = new FileReader();
    reader.onload = function(event) {
      var buffer = event.target.result;
      mammoth.extractRawText({arrayBuffer: buffer})
        .then(function(result) {
          resumeTxt = result.value;
          console.log(resumeTxt);
          chrome.storage.sync.set({ myResume: resumeTxt }, function() {
            console.log('Resume is saved!');
            chrome.storage.sync.set({ myResumeName: fileName }, function() {
              chrome.storage.sync.set({ myResumeUploadTime: uploadTimeTxt }, function() {
                updatePopUp();
              });
            });
          });
        })
        .done();
    };
    reader.readAsArrayBuffer(file);

  }

  // no file selected
  else {
    console.log("No file selected!")
  }

}

document.addEventListener("DOMContentLoaded", function() {

  updatePopUp();

  document.getElementById("resume").onchange = uploadNewResume;

  // executes when user clicks upload button
  document.getElementById("resumeUpload").addEventListener("click", function() {
    resume.click();
  });

  document.getElementById("resumeOpen").addEventListener("click", function() {
    viewResume();
  });

  document.getElementById("resumeDelete").addEventListener("click", function() {
    var confirmDelete = confirm("Remove resume from extension?");
    if (confirmDelete) {
      chrome.storage.sync.set({ myResume: null }, function() {
        chrome.storage.sync.set({ myResumeName: null }, function() {
          chrome.storage.sync.set({ myResumeUploadTime: null }, function() {
            updatePopUp();
          });
        });
      });
    }

  });

}); 

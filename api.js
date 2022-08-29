//getting the github username input form
const githubForm = document.getElementById('gitHubForm');

//listen for submissions on Github usernmae input form
gitHubForm.addEventListener('submit', (e) => {

    //to prevent default form submission action
    e.preventDefault();

    //get the github username input field on the DOM
    let usernameInput = document.getElementById('usernameInput');

    //get the value of the github username input field
    let gitHubUsername = usernameInput.value;

    //Run github API function, passing in the github username
    requestUserRepos(gitHubUsername);
})











function requestUserRepos(username) {
    //create a new xmlhttprequest object
    const xhr = new XMLHttpRequest();

    //github endpoint, passing in a username
    const url = `https://api.github.com/users/${username}/repos`; 

    //to open connwction using GET request via url endpoint
    //providing 3 arguments(get/post, the url, async true/false)
    xhr.open('GET', url, true);

    //when request is received
    //it is processed here
    xhr.onload = function()  {

        //parse API data into JSON
        const data = JSON.parse(this.response);

        //Log the response
        console.log(data);


        //loop over each object in the data array
        for (let i in data) {

            //Get the ul with id of userRepos
            let ul = document.getElementById('userRepos');

            //create variable that will create li's to be added to ul
            let li = document.createElement('li');

            //add bootstrap list item class to each li
            li.classList.add('list-group-item')

            //create the html markup for each li
            li.innerHTML = (`
            <p><strong>Repo:</strong> ${data[i].name}</p>
            <p><strong>Description:</strong> ${data[i].description}</p>
            <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>`);

            //append each li to the ul
            ul.appendChild(li);
          
            //log the repo name
            //console.log('Repo:', data[i].name);
            //log the repo description
            //console.log('Description:', data[i].description);
            //log the repo url
           // console.log('URL:', data[i].html_url);
            //adding a separator between each repo
           // console.log('===========================')
        }
    }

    //send the request to the server
    xhr.send();
}

//call function
//requestUserRepos('shagariboy');
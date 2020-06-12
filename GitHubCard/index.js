/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
/*
STEP 2: Inspect and study the data coming back, this is YOUR
github info! You will need to understand the structure of this
data in order to use it to build your component function

Skip to STEP 3.
*/

/*
STEP 4: Pass the data received from Github into your function,
and append the returned markup to the DOM as a child of .cards
*/

/*
STEP 5: Now that you have your own card getting added to the DOM, either
follow this link in your browser https://api.github.com/users/<Your github name>/followers,
manually find some other users' github handles, or use the list found at the
bottom of the page. Get at least 5 different Github usernames and add them as
Individual strings to the friendsArray below.

Using that array, iterate over it, requesting data for each user, creating a new card for each
user, and adding that card to the DOM.
*/



/*
STEP 3: Create a function that accepts a single object as its only argument.
Using DOM methods and properties, create and return the following markup:

*/
function userPull(obj) {
  //creating
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const userUrl = document.createElement('a');
  const numFollowers = document.createElement('p');
  const numFollowing = document.createElement('p');
  const userBio = document.createElement('p');
  
  
  //appending
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(numFollowers);
  cardInfo.appendChild(numFollowing);
  cardInfo.appendChild(userBio);
  profile.appendChild(userUrl);
  
  //  <div class="card">
  //    <img src={image url of user} />
  //    <div class="card-info">
  //      <h3 class="name">{users name}</h3>
  //      <p class="username">{users user name}</p>
  //      <p>Location: {users location}</p>
  //      <p>Profile:
  //        <a href={address to users github page}>{address to users github page}</a>
  //      </p>
  //      <p>Followers: {users followers count}</p>
  //      <p>Following: {users following count}</p>
  //      <p>Bio: {users bio}</p>
  //    </div>
  //  </div>
  
  //styling
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  
  //programattically update content
  userImg.src = obj.data.avatar_url;
  name.textContent = obj.data.name;
  userName.textContent = 'Username: ' + obj.data.login;
  location.textContent = 'Location: ' + obj.data.location;
  userUrl.href = obj.data.html_url;
  userUrl.textContent = obj.data.html_url;
  numFollowers.textContent = 'Followers: ' + obj.data.followers;
  numFollowing.textContent = 'Following: ' + obj.data.following;
  userBio.textContent = obj.data.bio;

  return card;

};



// List of LS Instructors Github username's:

const followersArray = [
  'jekegren01', 
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];




const cards = document.querySelector('.cards');

followersArray.forEach((uname) => {
axios
  .get(`https://api.github.com/users/${uname}`)
  .then((res) => {
    console.log('Here is the res: ', res);
        cards.appendChild(userPull(res));
        console.log(res.data);
      })
      .catch((err) => {
        console.log('There was an error: ', err)
      });
    });

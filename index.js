var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    totalTweets: 10000,
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    totalTweets: 12000,
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

const arrayMain = [user1, user2];
let userSelect = new URLSearchParams(document.location.search.substring(1));
let userSelector = userSelect.get("user");
console.log(userSelector);

// 1. header container needs: (1) displayName (2) totalTweets

const headerContainer = document.querySelector('.header-container')
let user;

if (userSelector === 'user1') {
    user = arrayMain[0];
} else {
    user = arrayMain[1];
}


const headerDisplayName = document.createElement('h4')
headerDisplayName.textContent = `${user.displayName}`
headerContainer.appendChild(headerDisplayName)

const headertotalTweets = document.createElement('h6')
headertotalTweets.textContent = `${user.totalTweets} Tweets`
headerContainer.appendChild(headertotalTweets)

// 2. cover photo (imported from src)

var headerImage = document.createElement("img");
headerImage.src = `${user.coverPhotoURL}`;
var src = document.querySelector(".cover-photo-container");
src.appendChild(headerImage);

// 3. profile details needs: (1) avatar image (2) userName (3) displayName (4) joinDate (5) followingCount (6) followerCount
const profileDetails = document.querySelector('.profile-details')
const avatarImage = document.createElement("img")
avatarImage.classList.add('avatar-image')
avatarImage.src = `${user.avatarURL}`
profileDetails.appendChild(avatarImage)

const profileUserName = document.createElement('div')
profileUserName.textContent = `${user.displayName}`
profileDetails.appendChild(profileUserName)

profileUserName.innerHTML = `
    <h4>${user.displayName}</h4>
    <div class = "greyed-out">${user.userName}</div>
    <div class = "greyed-out join-date">Joined ${user.joinedDate}</div>
    <div class = "followers"><b>${user.followingCount}</b> Following
    <b>${user.followerCount}</b> Followers</div>`
profileDetails.appendChild(profileUserName)

// 4  tweet feed needs "tweets" 
const tweetContainer = document.querySelector('.tweets-container')
//get loop info for now AND later use
for (let i = 0; i < user.tweets.length; i++) {

    //create individualTweet container
    const individualTweet = document.createElement('div')
    individualTweet.classList.add('individual-tweets')
    tweetContainer.appendChild(individualTweet)
    
    //Create avatar container within individualTweet container
    const tweetAvatar = document.createElement('div')
    tweetAvatar.classList.add('tweet-Avatar')
    individualTweet.appendChild(tweetAvatar)

    //add content to avatar container
    var smallerAvatarImage = document.createElement('img')

    smallerAvatarImage.src = `${user.avatarURL}`
    tweetAvatar.appendChild(smallerAvatarImage)

// Container split----------------------------------------------------------------------------------------------
    //Create tweet-Content container within individualTweet container 
    const tweetContent = document.createElement('div')
    tweetContent.classList.add('tweet-Content')
    individualTweet.appendChild(tweetContent)


    // Dynamically load EACH TIME (1) avatar image (2) displayName (3) userName (4) time ago, all INLINE\
    tweetContent.innerHTML = `
        <div class = "tweet-upper-container">
            <h5 class="header-display-name">${user.displayName}</h5>
            <div class="header-user-name">${user.userName}</div>
            <div class="header-timestamp"> ${user.tweets[i].timestamp}</div>
        </div>
        ${user.tweets[i].text}`
}



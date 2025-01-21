
const sections = [
    {
        id: "1",
        title: "Of all places 🅓",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Discord_Color_Text_Logo_%282015-2021%29.svg/220px-Discord_Color_Text_Logo_%282015-2021%29.svg.png",
        date: "08/07/24",
        content: "This was the day I joined the server and while it wasn't a very breathtaking introduction you still waved hello!"
    },
    {
        id: "2",
        title: "Introductions 😂",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Human%E2%80%93canine_friendship_-_smiling_girl_hugging_her_dog_at_golden_hour_in_Laos.jpg/150px-Human%E2%80%93canine_friendship_-_smiling_girl_hugging_her_dog_at_golden_hour_in_Laos.jpg",
        date: "08/19/24",
        content: "This was the day that lil dicky decided to out me to the whole server, and you came up with the whole Bonnie and Clyde reference!"
    },
    {
        id: "3",
        title: "The first time we played together! 🎮",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Dead_by_Daylight_Steam_header.jpg/220px-Dead_by_Daylight_Steam_header.jpg",
        date: "08/21/24",
        content: "This was the day we first played DBD together and I don't remeber much of what was said, but I know it was full of little giggles and huge laughs!!"
    },
    {
        id: "4",
        title: "Reaching out 👋🏻",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Glaspalast_M%C3%BCnchen_1891_062.jpg/240px-Glaspalast_M%C3%BCnchen_1891_062.jpg",
        date: "08/24/24",
        content: "On this day you private messaged me on discord and our friendship took off from there! 🚀"
    },
    {
        id: "5",
        title: "My little freak! 💦",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Martin_van_Maele_-_La_Comtesse_au_fouet_01.jpg/250px-Martin_van_Maele_-_La_Comtesse_au_fouet_01.jpg",
        date: "08/26/24",
        content: "If you would have told me that my little pwincess, was into toes, and bootyholes, and furries I would have told you, you were smoking crack! But here you are, into it all... There will be an update to this. "
    },
    {
        id: "6",
        title: "Getting them digits! 📲",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/GamePigeon.png/125px-GamePigeon.png",
        date: "09/01/24",
        content: "This was the day I got your phone number so I could whoop your ass at Connect 4, and <em>BOY</em>, did I do it too!"
    },
    {
        id: "7",
        title: "Decleration! 📜",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Field_Marshall_Keitel_signs_German_surrender_terms_in_Berlin_8_May_1945_-_Restoration.jpg/300px-Field_Marshall_Keitel_signs_German_surrender_terms_in_Berlin_8_May_1945_-_Restoration.jpg",
        date: "09/26/24",
        content: "It was on this day the first I love you's were exchanged, I may have gotten scared and didn't say it again for awhile after that, but we <strong>BOTH</strong> knew what we wanted."
    },
    {
        id: "8",
        title: "My greatest wish for us! 🧞‍♂️",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Couple_in_love_%288175382088%29.jpg/220px-Couple_in_love_%288175382088%29.jpg",
        date: " 09/30/24",
        content: "My greatest wish is that no matter what happens we stick together, it won't always be sunshine and roses, but all we can do is work on it."
    },
    {
        id: "9",
        title: "My promise to you! 🤙🏻",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pinky_swear.JPG/220px-Pinky_swear.JPG",
        date: "Posted: 10/04/24",
        content: "I promise that I will allllways hear you out, I will always be here for you, I will always love you, and most importantly I will be here to hold you up when you can't hold yourself up!"
    },
    {
        id: "10",
        title: "Coloring books! 🖍️",
        imgSrc: "https://i.postimg.cc/YqBXzmqT/IMG-1975.jpg",
        date: "11/15/24",
        content: "Coloring in our matching coloring book has been so much fun! Although it pisses me off that your so damn good at coloring because you just blow me out of the water every single fucking time and that shit pisses me off, and now you got me a damn white pen so when we color again and your still 339480752490847230 times better than me i will have <strong>NO FUCKING</strong> excuse and thats some <em>BULLSHIT</em>. Thats the real reason we haven't colored recently."
    },
    {
        id: "11",
        title: "The first of many! ❶",
        imgSrc: "https://i.postimg.cc/x8M6S9gs/IMG-2037.jpg",
        date: "12/12/24",
        content: "This is the <strong>VERY</strong> first photo I have of us in my phone, the night I got there. I got sneak peak of your souuuul while I was there and its safe to say I've been entranced ever sense. You are the light of my life and there is no question about that, yes you are beatiful but its so much more than that. You are kind. You are intelligent. You are driven. You have a beautiful heart, and from what I could tell a soul so gooorgeous to compliment it. You truly are one-in-7 <strong>BILLION</strong>!"
    },
    {
        id: "12",
        title: "Making a murderer, Pt. 1. 🔪",
        imgSrc: "https://i.postimg.cc/MpWdh2BD/IMG-5571.jpg",
        date: "12/14/24",
        content: "We went to your work christmas party and I got to meet some really impactful people in your life maybe not all good all the time but in one way or another you have love for every one of those people and I could see it. That being said, you are <em>SCARY</em> with an axe, you couldn't beat me at the persicion throwing but that doesn't even matter because I couldn't even come CLOSE to you in the other version that shit was TERRIFYING!!!!"
    },
    {
        id: "13",
        title: "Nothing better! 🙅🏻‍♂️",
        imgSrc: "https://i.postimg.cc/DZtxDSQJ/IMG-2038.jpg",
        date: "12/15/24",
        content: "There is <strong><em>NOTHING</em></strong> better than Sami smothers, not one thing. I would give up living on earth to expierience Sami smothers for the rest of eternity in the afterlife, and that is allll I will say about that."
    },
    {
        id: "14",
        title: "Going home. 🥺",
        imgSrc: "https://i.postimg.cc/Gpmgswh2/IMG-2043.jpg",
        date: "12/16/24",
        content: "This was a really rough day, and not a day I look forward to happening again... However its never goodbye only <em>until next time</em>, mainly because there is no goodbye you should have really considered all that goodbye shit before you decided to introduce Sami smothers into the relationship. Now you are fuuuucked and you aren't going anywhere."
    },
    {
        id: "15",
        title: "He really does though. 💪🏻",
        imgSrc: "https://i.postimg.cc/T3CCx7qX/temp-image-E0-B1-BF20-B311-4021-AC30-2102433274-BE.jpg",
        date: "1/1/25",
        content: "I just want to say I was really sad to find out that you were a belieber at the beginning of this relationship. However this meme you found is so fuckin true! But also fuck that I am gonna caaaaave."
    },
    {
        id: "16",
        title: "You are scrumptious! 🤤",
        imgSrc: "https://i.postimg.cc/2ymdphtt/IMG-2256.png",
        date: "Eternity",
        content: "You are so fuckin sexy oh my fuuuuuuuuuckin goodness you are, delicious. A short glass of I can't wait to beat that ass again... You my love are something ELSE!"
    }/*
    {
        id: "",
        title: "",
        imgSrc: "",
        date: "",
        content: ""
    },*/
];


const contents = document.getElementById("contents");
const sectionsContainer = document.getElementById("sections");

sections.forEach((section) => {
    
    const listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#${section.id}">${section.title}</a>`;
    contents.appendChild(listItem);

   
    const sectionHTML = `
        <h2 id="${section.id}">${section.title}</h2>
        <img src="${section.imgSrc}" alt="${section.title}" width="150">
        <h6>Posted: ${section.date}</h6>
        <p>${section.content}</p>
    `;
    sectionsContainer.innerHTML += sectionHTML;
});

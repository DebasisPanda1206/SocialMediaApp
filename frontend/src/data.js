
const users = [{ Name: "Alexander Blink", profile_picture: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },
{ Name: "Joey Amore", profile_picture: "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" },
{ Name: "Trevor Alund", profile_picture: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" },
{ Name: "Rajeev Malhodra", profile_picture: "https://img.freepik.com/free-photo/pretty-long-haired-girl-stylish-denim-outfit-walking-outside-holding-black-smartphone-waiting-call_197531-3423.jpg?semt=ais_hybrid&w=740&q=80" },
{ Name: "Prince Yadav", profile_picture: "https://t3.ftcdn.net/jpg/00/95/07/50/360_F_95075031_5EMIdawNgVJnfgZqt4LYfNjpoKdSvI3q.jpg" },
{ Name: "Louis Drawy", profile_picture: "https://picsum.photos/id/237/200/300" },
{ Name: "Cole Livingston", profile_picture: "https://picsum.photos/id/239/200/300" },
{ Name: "Angy DePelle", profile_picture: "https://picsum.photos/id/240/200/300" },
{ Name: "Morris Johnson", profile_picture: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg" },
{ Name: "Shane Tummilston", profile_picture: "https://picsum.photos/id/242/200/300" },
{ Name: "Gregg Chappel", profile_picture: "https://picsum.photos/id/243/200/300" },
]

const sampleCaptions = [
    "Exploring the streets of Bhubaneswar 🌆",
    "Coffee and code ☕💻",
    "Sunset vibes at Puri beach 🌅",
    "Weekend getaway with friends 🏞️",
    "Just deployed my latest project 🚀",
    "Chilling at KIIT campus 🍃",
    "Captured this moment during a walk 📸",
    "Late night debugging session 😵‍💫",
    "Feeling grateful today 🙏",
    "Nature always inspires 🌿",
    "React + Express = ❤️"
];

const samplePlaces = [
    "Bhubaneswar",
    "Cuttack",
    "Puri",
    "KIIT University",
    "Chilika Lake",
    "Patia",
    "Infocity",
    "Nandankanan",
    "Sailashree Vihar",
    "Smart City Hub",
    "Campus Library"
];

const posts = users.map((user, index) => {
    const rawDate = new Date(Date.now() - index * 3600 * 1000); // Each post 1 hour apart
    const formattedDate = rawDate.toLocaleString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    return {
        userName: user.Name,
        profile_picture: user.profile_picture,
        post_picture: `https://picsum.photos/seed/post${index + 1}/600/400`,
        content: sampleCaptions[index % sampleCaptions.length],
        place: samplePlaces[index % samplePlaces.length],
        timestamp: formattedDate // ✅ Now it's a string React can render
    };
});

const currentUser = {
    userid: '25',
    userName: 'Arjun Malhotra',
    prof_pic: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    num_of_post: 30,
    num_of_followers: 120,
    num_of_following: 108,
    user_desc: `Photographer | Traveler | Storyteller.\nCapturing moments one frame at a time.`,
    user_posts: Array.from({ length: 32 }, (_, i) => ({
        post_id: `p${String(i + 1).padStart(3, '0')}`,
        img_path: `https://picsum.photos/seed/${i + 1}/800/600`

    }))
};
export { users, posts, currentUser }

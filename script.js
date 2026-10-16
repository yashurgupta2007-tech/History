window.addEventListener("load",()=> {
    const loader = document.getElementById("loader");
    setTimeout(()=>{
        loader.classList.add("loader-hide");
        
    },1800);
});

const reveals = document.querySelectorAll(".reveal,.reveal-left,.reveal-right");
const revealOnScroll = () => {
    const trigger = window.innerHeight*0.85;
    reveals.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        if (top<trigger) {
            item.classList.add("active");
        }
    });
};

window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);

const progressBar = document.getElementById("progress-bar");
window.addEventListener("scroll",()=>{
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop/scrollHeight)*100;
    progressBar.style.width = progress + "%";
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll",()=>{
    if(window.scrollY>300) {
        backToTop.classList.add('show');
    }
    else {
        backToTop.classList.remove('show');
    }
});
backToTop.addEventListener("click",()=>{
    window.scrollTo({
        top:0, 
        behavior: "smooth"
    });
});

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click',() => {
    navLinks.classList.toggle('active');
})

const fortData = {
    raigad: {
        name: 'Raigad Fort',
        image: 'https://www.cygnetthotels.com/blog/wp-content/uploads/2025/04/3333.png',
        description: 'Raigad Fort served as the capital of the Maratha Empire and was the coronation site of Chhatrapati Shivaji Maharaj in 1674.',
        link: 'https://foresthillstala.com/history-of-raigad-fort-exploring-secrets-and-beyond/'
    },
    shivneri: {
        name: 'Shivneri Fort',
        image: 'https://thetasteoftrip.com/wp-content/uploads/2025/07/IMG_3632-scaled.jpg',
        description: 'Shivneri fort is the birthplace of Chhatrapati Shivaji Maharaj, the founder of the Maratha Empire.',
        link: 'https://maharashtratourism.gov.in/fort/shivneri/'
    },
    rajgad: {
        name: 'Rajgad Fort',
        image: 'https://savetoursandtravels.com/wp-content/uploads/2026/07/556978877_18295384267282849_950569237686739756_n-768x1024.jpg',
        description: 'Rajgad Fort was known as Murumbdev, which was the first capital of the Maratha Empire.',
        link: 'https://maharashtratourism.gov.in/fort/rajgad/'
    },
    sinhagad: {
        name: 'Sinhagad Fort',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwpZ27Mbq-g5D6A605oEjPmXDlvuwOuyiYnmRbX6V4YzwBCJAPF9NTm0&s=10',
        description: 'Sinhagad Fort was previously known as Kondhana Fort. This fort has been the site of many battles, most notably the battle of Tanaji Malusare.',
        link: 'https://maharashtratourism.gov.in/fort/sinhagad/'
    },
    pratapgad: {
        name: 'Pratapgad Fort',
        image: 'https://t3.ftcdn.net/jpg/19/76/13/02/360_F_1976130256_vu4cw2SX1fSsmZdR5JtdHUK5omQg4bSi.jpg',
        description: 'Pratapgad Fort is very important fort as the major fight with Afzal Khan took place here.',
        link: 'https://www.sahapedia.org/shivajis-ingenious-stratagem-pratapgad-fort'
    },
    sindhudurg: {
        name: 'Sindhudurg Fort',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaZw1qcC2-OBrkausvxUSCvGczrT6yzn3oyEFbCsy8mi0vJ6nQAbwGX5S&s=10',
        description: 'Sindhudurg fort had main objective to counter the rising influence of English, Dutch, French and Portuguese merchants in the Konkan Coast and to curb the rise of Siddhis of Janjira.',
        link: 'https://konkanestates.com/sindhudurg-fort-the-ultimate-guide-to-maharashtras-magnificent-sea-fortress/'
    },
    panhala: {
        name: 'Panhala Fort',
        image: 'https://www.travellersofindia.com/wp-content/uploads/2023/09/Panhala-Fort-travellersofindia.jpeg',
        description: 'Panhala Fort is known for the most notable battle of Pavan Khind by Bajiprabhu Deshpande, strategically located at the pass of Sahyadri mountains.',
        link: 'https://www.livehistoryindia.com/story/monuments/panhala-fort-many-masters'
    },
    torna: {
        name: 'Torna Fort',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqln0RbDGjaHMq2SDG0iNSEJjqChyLsNmbwuEH7Zxag&s=10',
        description: 'Torna Fort is also known as Prachandagad. It is historically significant because it was the first fort captured by Chhatrapati Shivaji Maharaj.',
        link: 'https://maharashtratourism.gov.in/fort/torna/'
    },
    daulatabad: {
        name: 'Daulatabad Fort',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjz9TiDSTXY57r8Cuddb6eC67OhRPSbjzLqAhaPBhhfQ&s=10',
        description: 'Daulatabad Fort is renowned for its impenetrable defenses, including deceptive mazes, a crocodile-filled moat and the fatal Andheri tunnel.',
        link: 'https://www.vivekanandcollege.ac.in/uploads/dpthistory/research/only%20research%20papers%202018-23/10.pdf'
    },
    murud_janjira: {
        name: 'Murud-Janjira Fort',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OGRb6PIEp-z_jERZmic6S5J9nfY_WcBcM340R1g-ofMTAknghQGl2D2b&s=10',
        description: 'Murud-Janjira Fort is the only  coastal fort in India which remained undefeated. The Siddhis successfully defended it for over three centuries.',
        link: 'https://maharashtratourism.gov.in/fort/murud-janjira/'
    },
    lohagad: {
        name: 'Lohagad Fort',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbq418n1n6qL9qYWr9WbGD_Gf8e-wTUbgix8lhMmYpAA&s=10',
        description: 'Lohagad Fort (the Iron Fort) is famous for its unique Vinchu Kata formation. ',
        link: 'https://maharashtratourism.gov.in/fort/lohagad/'
    },
    visapur: {
        name: 'Visapur Fort',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d4/79/72/dilapidated-structures.jpg?w=900&h=500&s=1',
        description: 'Visapur Fort is famous for its waterfall staircase trek built by Balaji Vishwanath, the very first Peshwa of the Maratha Empire.',
        link: 'https://www.fortsmaharashtra.com/visapur-fort/'
    }
};

const markers = document.querySelectorAll(".marker");
const fortImage = document.getElementById("fort-image");
const fortName = document.getElementById("fort-name");
const fortDescription = document.getElementById("fort-description");
const fortLink = document.getElementById("fort-link");
const infoPanel = document.querySelector(".info-panel");

markers.forEach(marker => {
    marker.addEventListener("click", () => {
        markers.forEach(m => {
            m.classList.remove("active");
        });
        marker.classList.add("active");
        infoPanel.classList.add("fade");
        setTimeout(() => {
            const fort = fortData[marker.dataset.fort];
            fortImage.src = fort.image;
            fortName.textContent = fort.name;
            fortDescription.textContent = fort.description;
            fortLink.href = fort.link;
            infoPanel.classList.remove("fade");
        },300);
    });
});

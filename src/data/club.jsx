import photographyHero from "../assets/images/clubs-hero/photography-society.webp";
import musicHero from "../assets/images/clubs-hero/music-club.webp";
import esportHero from "../assets/images/clubs-hero/esport-community.webp";
import artHero from "../assets/images/clubs-hero/art-club.webp";
import entrepreneurshipHero from "../assets/images/clubs-hero/entrepreneurship-hub.webp";

import photographyHeader from "../assets/images/clubs-header/photography-header.webp";
import musicHeader from "../assets/images/clubs-header/music-header.webp";
import esportHeader from "../assets/images/clubs-header/esport-header.webp";
import artHeader from "../assets/images/clubs-header/art-header.webp";
import entrepreneurshipHeader from "../assets/images/clubs-header/entrepreneurship-header.webp";

export const club = [
  {
    id: "photography",
    name: "Photography Society",
    image: photographyHero,
    imgHeader: photographyHeader,
    shortDescription:
      "Capture memorable moments and improve your photography skills.",
    description:
      "Photography Society is a creative community for students who are passionate about capturing moments and telling stories through images. Members have the opportunity to learn photography techniques, experiment with different styles and equipment, and improve their editing skills through hands-on workshops and guided activities. The club regularly organizes photo walks, collaborative projects, and exhibitions that allow students to showcase their work while building connections with fellow photography enthusiasts across campus.",
      events: [
      {
        name: "Campus Photo Walk",
        date: "2026-09-15",
      },
      {
        name: "Portrait Photography Workshop",
        date: "2026-10-05",
      },
    ],
  },

  {
    id: "music",
    name: "Music Club",
    image: musicHero,
    imgHeader: musicHeader,
    shortDescription:
      "Perform, collaborate, and explore different styles of music.",
    description:
      "Music Club is a vibrant community for students who enjoy creating, performing, and appreciating music. Open to musicians of all skill levels, the club provides opportunities to explore different genres, collaborate with fellow performers, and improve musical abilities through regular rehearsals and workshops. Members can participate in live performances, campus events, and collaborative projects that celebrate creativity and bring people together through a shared passion for music.",  
    events: [
      {
        name: "Open Jam Session",
        date: "2026-09-18",
      },
      {
        name: "Campus Music Festival",
        date: "2026-10-10",
      },
    ],
  },

  {
    id: "esports",
    name: "Esports Community",
    image: esportHero,
    imgHeader: esportHeader,
    shortDescription:
      "Connect with fellow gamers and participate in tournaments.",
    description:
      "Esports Community brings together students who share a passion for competitive gaming and teamwork. Whether you are a casual player looking to improve your skills or an experienced competitor seeking new challenges, the club offers a welcoming environment to learn, practice, and compete. Members can participate in gaming tournaments, strategy sessions, team scrimmages, and community events while developing communication, leadership, and problem-solving skills through collaborative gameplay.",  
    events: [
      {
        name: "Valorant Campus Cup",
        date: "2026-09-25",
      },
      {
        name: "Esports Team Recruitment",
        date: "2026-10-08",
      },
    ],
  },

  {
    id: "art",
    name: "Art Club",
    image: artHero,
    imgHeader: artHeader,
    shortDescription:
      "Express creativity through painting, drawing, and digital art.",
    description:
      "Art Club is a welcoming space for students who want to explore their creativity and develop their artistic talents. Members can experiment with a variety of mediums, including drawing, painting, illustration, and digital art, while learning new techniques from workshops and collaborative activities. The club regularly hosts exhibitions, creative challenges, and community art projects that encourage self-expression, artistic growth, and meaningful connections among students with a passion for visual arts.",  
    events: [
      {
        name: "Watercolor Painting Workshop",
        date: "2026-09-21",
      },
      {
        name: "Student Art Exhibition",
        date: "2026-10-14",
      },
    ],
  },

  {
    id: "entrepreneurship",
    name: "Entrepreneurship Hub",
    image: entrepreneurshipHero,
    imgHeader: entrepreneurshipHeader,
    shortDescription: "Learn business fundamentals and startup development.",
    description:
      "Entrepreneurship Hub is dedicated to helping students transform innovative ideas into meaningful projects and business opportunities. Through workshops, networking sessions, and collaborative activities, members gain valuable insights into entrepreneurship, business development, and innovation. The club encourages creativity, critical thinking, and leadership while providing opportunities to learn from experienced entrepreneurs, develop startup concepts, and present ideas in a supportive and inspiring environment.",  
    events: [
      {
        name: "Business Model Canvas Workshop",
        date: "2026-09-22",
      },
      {
        name: "Startup Pitch Night",
        date: "2026-10-20",
      },
    ],
  },
];

import { useMemo } from "react";
import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const quotes = [
  "💻 It works on my machine.",
  "🧙‍♂️ I’m not a magician, I’m a developer.",
  "🐞 99 little bugs in the code, 99 bugs in the code...",
  "🔁 To understand recursion, you must first understand recursion.",
  "🚨 I don’t always test my code, but when I do, I do it in production.",
  "🏠 There’s no place like 127.0.0.1",
  "☕ Will code for coffee.",
  "❌ Semicolon missing; life ruined.",
  "🐛 It’s not a bug, it’s an undocumented feature.",
  "🔄 Eat, Sleep, Code, Repeat.",
  "👋 Hello world!",
  "📝 Code never lies, comments sometimes do.",
  "🧩 First, solve the problem. Then, write the code.",
  "🧠 Programming is thinking, not typing.",
  "🔢 If at first you don’t succeed, call it version 1.0.",
  "🧮 Real programmers count from zero.",
  "🎃 Why do programmers confuse Halloween and Christmas? Because OCT 31 == DEC 25.",
  "👀 A good programmer looks both ways before crossing a one-way street.",
  "🗑️ Deleted code is debugged code.",
  "🔥 In case of fire: git commit, git push, leave building.",
  "⛪ Software and cathedrals are much the same — first we build them, then we pray.",
  "🕰️ Weeks of coding can save you hours of planning.",
  "🚫 The best error message is the one that never shows up.",
  "🤔 There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
  "🔍 Programming is 10% writing code and 90% figuring out why it’s not working.",
  "🐢 Computers are fast; programmers keep it slow.",
  "🧩 The code that is the hardest to debug is the code that you know cannot possibly be wrong.",
  "🪲 If debugging is the process of removing bugs, then programming must be the process of putting them in.",
  "😂 A user interface is like a joke. If you have to explain it, it’s not that good.",
  "📚 Good code is its own best documentation.",
  "🏠 There’s no place like localhost.",
  "🦄 Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
  "🔒 Security is always excessive until it’s not enough.",
  "🧑‍💻 The best way to get a project done faster is to start sooner.",
  "🛠️ If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.",
  "🧹 Clean code always looks like it was written by someone who cares.",
  "🕵️‍♂️ Debugging is like being the detective in a crime movie where you are also the murderer.",
  "🎯 Simplicity is the soul of efficiency.",
  "🧑‍🚀 Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "🧱 Walking on water and developing software from a specification are easy if both are frozen.",
  "🧑‍🏫 Before software can be reusable it first has to be usable.",
  "🧑‍🔬 Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
  "🧑‍🎨 Programs must be written for people to read, and only incidentally for machines to execute.",
  "🧑‍🔧 The most disastrous thing that you can ever learn is your first programming language.",
  "🧑‍🚒 The sooner you start to code, the longer the program will take.",
  "🧑‍💼 Programming isn’t about what you know; it’s about what you can figure out.",
  "🧑‍🏭 The function of good software is to make the complex appear to be simple.",
  "🧑‍🌾 Code is like humor. When you have to explain it, it’s bad.",
  "🧑‍🎓 Experience is the name everyone gives to their mistakes.",
  "🧑‍🔬 The only way to go fast, is to go well.",
  "🧑‍🚀 If you don’t make mistakes, you’re not working on hard enough problems.",
  "🧑‍💻 Programming is the art of algorithm design and the craft of debugging errant code.",
  "🧑‍🔧 The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly.",
  "🧑‍🎨 The most important property of a program is whether it accomplishes the intention of its user.",
  "🧑‍🔬 The cheapest, fastest, and most reliable components are those that aren’t there.",
  "🧑‍🚒 The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
  "🧑‍💼 The sooner you start to code, the longer the program will take.",
  "🧑‍🏭 Programming is not a zero-sum game. Teaching something to a fellow programmer doesn’t take anything away from you.",
  "🧑‍🌾 The best way to predict the future is to invent it.",
  "🧑‍🎓 The best thing about a boolean is even if you are wrong, you are only off by a bit.",
  "🧑‍🔬 If you optimize everything, you will always be unhappy.",
  "🧑‍🔬 The best way to understand recursion is to understand recursion.",
  "🧑‍🚒 The fastest way to debug code is to delete it.",
];

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
  _______          __         .__________    _____  
 \\      \\___  ___/  |______  |__\\_____  \\  /  |  | 
 /   |   \\  \\/ /\\   __\\__  \\ |  |/  ____/ /   |  |_
/    |    \\   /  |  |  / __ \\|  /       \\/    ^   /
\\____|__  /\\_/   |__| (____  /__\\_______ \\____   | 
        \\/                 \\/           \\/    |__| 
`}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
  _   _       _        _ ___  _  _   
 | \\ | |     | |      (_)__ \\| || |  
 |  \\| |_   _| |_ __ _ _   ) | || |_ 
 | . \` \\ \\ / / __/ _\`| | / /|__   _|
 | |\\  |\\ V /| || (_| | |/ /_   | |  
 |_| \\_| \\_/  \\__\\__,_|_|____|  |_|  
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.</div>
        <Seperator>---------------------------------</Seperator>
        <div>{quotes[Math.floor(Math.random() * quotes.length)]}</div>
        <Seperator>---------------------------------</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
        ⠀⠀⠀⠀⠀⠀⠘⣿⣿⣷⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣷⣦⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡿⠟⣛⣩⣭⣭⣭⣭⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⣠⠞⣡⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⡀⠀
        ⠀⠀⠀⠀⠀⠀⡴⢡⣾⣿⡟⣿⡿⣿⢻⣿⣷⣭⣿⣿⣿⣿⣿⣿⣿⡿⠛⣋⣿⠆
        ⠀⠀⠀⠀⠀⠘⠁⣿⣿⣿⣇⡙⠷⠙⢘⡿⠟⠋⠉⠉⠉⠉⠉⠉⠉⠉⣹⠟⠁⠀
        ⠀⠀⠀⣀⣠⣴⣿⣿⣿⣿⠿⠋⠀⠈⠁⠀⠀⣧⣦⣦⣄⣦⣠⣤⣤⣾⣷⣶⣤⣄
        ⠤⠶⠿⠿⠿⠛⠛⠛⠉⣡⡤⠶⠒⠒⠲⠦⣤⣏⡙⠻⠟⠟⠿⣯⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⣸⠋⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠲⠶⠞⠃⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⢿⣄⠀⠀⠀⠀⢀⣠⡤⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢰⠟⠞⠁⣀⣀⣤⣶⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠈⠀⠀⠆⢉⡛⠿⠍⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⢉⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⢸⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                    
`}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

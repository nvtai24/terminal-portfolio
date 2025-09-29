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
        <Seperator>----</Seperator>
        <div>
          This project is a clone based on the original work by{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            satnaing/terminal-portfolio
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                    .'\\   /\`.
              .'.-.\\-'.-.\\.\`
          ..._:   .-. .-.   :_...
        .'    '-.(o ) (o ).-'    \`.
      :  _    _ _\`~(_)~\`_ _    _  :
      :  /:   ' .-=_   _=-. \`   ;\\  :
      :   :|-.._  '     \`  _..-|:   :
      :   \`:| |\`:-:-.-:-:'| |:'   :
        \`.   \`.| | | | | | |.'   .'
          \`.   \`-:_| | |_:-'   .'
          \`-._   \`\`\`\`    _.-'
                \`\`-------''
`}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

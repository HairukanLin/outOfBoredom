import styles from "../../components-style/popUps/redirect-link.module.css";

export default function RedirectComponent({ platform, setRedirectPopUp }: {
        platform: string;
        setRedirectPopUp: (open: boolean) => void;
    }) {

    let link="";

    switch (platform){
        case "spotify":
         link="https://open.spotify.com/artist/6sUckbLOVyPwApRpE9NBST";    
         break;
        case "youtube":
         link="https://www.youtube.com/channel/UCZkHS49pt0gL8fkIiCFDexA";
         break;
        case "apple music":
         link="https://music.apple.com/de/artist/out-of-boredom/1611638736";
         break;
        case "instagram":
         link="https://www.instagram.com/out_of_boredem/";
         break;
        default: 
         link="https://open.spotify.com/artist/6sUckbLOVyPwApRpE9NBST"
         break;
        
    }

    return (
        <div className={styles.redirectPopUp}>
            <p>open {platform}?</p>
            <p><span onClick={() => setRedirectPopUp(false)}>no</span> <span onClick={() => window.open(link)}>yes</span></p>
        </div>
    );
}
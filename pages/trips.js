import PageDetails from "../Components/Utilites/PageDetails";
import tripsPhoto from "../public/assets/projects/trips.PNG";
export default function trips() {
  return (
    <PageDetails
      img={tripsPhoto}
      title="Beaches"
      techHeader="React JS / Tailwind CSS"
      overView="static landing page for Travel company . this app was built using react js and styled completely by 
                  tailwind css and hosted on netlify . users will be able to see All - Inclusive Resorts . 
                  they can also able to choose check in or check out time"
      demo="https://trips-around-the-world.netlify.app/"
      code="https://github.com/magedElshafey/Travel-Website"
      AllTech={["React JS", "Tailwind CSS", "JavaScript", "Github"]}
      headTitle="Beaches App"
    />
  );
}

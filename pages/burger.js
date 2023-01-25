import PageDetails from "../Components/Utilites/PageDetails";
import burgerImage from "../public/assets/projects/burgerProject-2.PNG";
export default function burger() {
  return (
    <>
      <PageDetails
        img={burgerImage}
        title="Doom"
        techHeader="React JS / Tailwind CSS"
        overView="static landing page for resturant . this app was built using react js and styled completely by 
                  tailwind css and hosted on netlify . users will be able to see the menu and top rated sales . 
                  they can also able to filter the foods by price or by category"
        demo="https://resturant-app-landing-page.netlify.app//"
        code="https://github.com/magedElshafey/Landing-Page"
        AllTech={["React JS", "Tailwind CSS", "JavaScript", "Github"]}
        headTitle="Doom App"
      />
    </>
  );
}

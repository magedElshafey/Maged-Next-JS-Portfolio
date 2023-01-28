import PageDetails from "../Components/Utilites/PageDetails";
import brandsImage from "../public/assets/projects/brandsClubProject.png";
export default function brands() {
  return (
    <>
      <PageDetails
        img={brandsImage}
        title="Brands Club"
        techHeader="React JS / Tailwind CSS / Redux toolkit"
        overView="Modern E-commerce website designed by using React JS , Redux toolkit
and styled completely by Tailwind CSS.
It contains from three pages (Home page , Product Category page with
filter option to filter the products and product details page .
It also had a complete cart and user authentication process
User must register to App to add products to cart or remove them"
        demo="https://brands-club.netlify.app/"
        code="https://github.com/magedElshafey/Brands-Club"
        AllTech={[
          "React JS",
          "Tailwind CSS",
          "JavaScript",
          "Redux toolkit",
          "Github",
        ]}
        headTitle="Brands Club App"
      />
    </>
  );
}

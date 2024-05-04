import React from "react";
import style from "./AboutPage.module.css"; // Import your CSS file for styling

const AboutPage = () => {
  return (
    <div className={style.aboutpagecontainer}>
      <h1>About Us</h1>
      <div className={style.aboutcontent}>
        <div className={style.abouttext}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            viverra, lorem vel consectetur bibendum, mauris odio fermentum leo,
            sit amet consectetur nisi justo vitae dui. In hac habitasse platea
            dictumst. Nunc vel dui id urna ultrices cursus. Integer mattis
            ligula eu tincidunt sollicitudin. Duis at arcu id quam fringilla
            vulputate. Nulla facilisi. Integer varius, lorem ac ultricies
            sagittis, arcu mauris sodales felis, sit amet ultricies neque est
            vel nunc. Nullam semper ex vel lorem hendrerit, eget tristique
            turpis venenatis.
            <img
              src="https://images.pexels.com/photos/6214479/pexels-photo-6214479.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 1"
            />
          </div>

          <div>
            Donec ut sagittis magna. Aliquam erat volutpat. Sed efficitur, sem
            id laoreet volutpat, leo tortor gravida tortor, a rhoncus elit orci
            sit amet justo. Suspendisse potenti. Sed laoreet ultrices massa, sit
            amet ultricies nulla ultrices id. Phasellus vitae erat vel enim
            condimentum aliquam vel a ipsum. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
            nec lectus accumsan, fermentum elit eu, iaculis ipsum. Curabitur
            pretium, metus id dapibus fermentum, mauris est rhoncus magna, a
            finibus ligula ipsum vel nunc.
            <img
              src="https://images.pexels.com/photos/6214478/pexels-photo-6214478.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

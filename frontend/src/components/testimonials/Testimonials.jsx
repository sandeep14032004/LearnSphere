import React from "react";
import "./testimonials.css";
const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Aarav Sharma",
      position: "B.Tech Student",
      message:
        "LearnSphere has transformed my learning experience! The courses are well-structured, and the interactive sessions make it easy to grasp complex topics.",
      image:
        "https://img.freepik.com/free-photo/front-view-smiley-man-holding-book_23-2149915900.jpg?t=st=1741943273~exp=1741946873~hmac=a7bbd4815a81a7ef77d92107c57b9ce82bcac07680a7986e2212057ff9f78961&w=740",
    },
    {
      id: 2,
      name: "Ananya Iyer",
      position: "Engineering Student",
      message:
        "The hands-on projects and real-world examples helped me gain confidence in coding. Highly recommended for students preparing for placements!",
      image:
        "https://img.freepik.com/free-photo/summer-lifestyle-fashion-portrait-young-stylish-hipster-woman-walking-street_1153-8615.jpg?t=st=1741943186~exp=1741946786~hmac=332b7580a6be7eedf414bd10afcb4359ed2206907995efb8a4a9972f6e13f456&w=1380",
    },
    {
      id: 3,
      name: "Rohan Verma",
      position: "Software Developer",
      message:
        "This platform offers high-quality content and well-explained courses. The instructors are very knowledgeable and make learning fun!",
      image:
        "https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2771.jpg?t=st=1741942993~exp=1741946593~hmac=0281829b78acc2247273b743fd86a050980f19eb708ae2bb7ddf690e4e9cac83&w=740",
    },
    {
      id: 4,
      name: "Priya Agarwal",
      position: "Data Science Enthusiast",
      message:
        "I found the AI and ML courses really useful. The projects and quizzes made my concepts stronger. Great platform for tech enthusiasts!",
      image:
        "https://img.freepik.com/free-photo/casual-clothes-portrait-attractive-young-woman-standing-office-with-black-bag_146671-16554.jpg?t=st=1741943134~exp=1741946734~hmac=4bcf8c51a09470db27d5677d7b6d3b19df5c6331fd0a376003bdd12203ca5a41&w=1380",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testimonials-cards">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-cards">
            <div className="student-image">
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <p className="message">{testimonial.message}</p>
            <div className="info">
              <p className="name">{testimonial.name}</p>
              <p className="position">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

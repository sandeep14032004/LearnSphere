import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about">
          <h1>About Us</h1>
          <p>
            Welcome to <strong>LearnSphere</strong>, your go-to online learning
            platform! We offer a diverse range of courses designed to help you
            develop new skills and achieve your career goals. Our goal is to
            provide high-quality, accessible, and affordable education for
            learners worldwide.
          </p>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            At LearnSphere, we believe that education should be accessible to
            everyone, no matter where they are. Our mission is to bridge the
            knowledge gap by offering expertly crafted courses that empower
            individuals to grow personally and professionally.
          </p>
        </div>

        <div className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              📚 <strong>Expert-Led Courses</strong> - Learn from industry
              professionals.
            </li>
            <li>
              🌍 <strong>Global Community</strong> - Connect with learners
              worldwide.
            </li>
            <li>
              💡 <strong>Interactive Learning</strong> - Hands-on projects and
              quizzes.
            </li>
            <li>
              🎓 <strong>Certification</strong> - Get certified and boost your
              resume.
            </li>
            <li>
              🕒 <strong>Flexible Learning</strong> - Learn at your own pace,
              anytime, anywhere.
            </li>
          </ul>
        </div>

        {/* Key Features Section */}
        <div className="features">
          <h2>Key Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>💻 Online Courses</h3>
              <p>Wide range of courses from technology to business.</p>
            </div>
            <div className="feature-item">
              <h3>📜 Certification</h3>
              <p>Receive industry-recognized certificates upon completion.</p>
            </div>
            <div className="feature-item">
              <h3>🛠️ Hands-on Projects</h3>
              <p>Apply what you learn with real-world projects.</p>
            </div>
            <div className="feature-item">
              <h3>📅 Lifetime Access</h3>
              <p>Access your courses anytime after enrollment.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonals">
          <h2>What Our Students Say</h2>
          <div className="testimonal-list">
            <div className="testimonal-item">
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                "LearnSphere has transformed the way I learn. The courses are
                well-structured, and the instructors are amazing!" -{" "}
                <strong>Amit Sharma</strong>
              </p>
            </div>
            <div className="testimonal-item">
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                "The best platform for learning new skills at your own pace. The
                hands-on projects make learning so much fun!" -{" "}
                <strong>Priya Verma</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Courses = () => {
  const { courses } = CourseData();
<<<<<<< HEAD
  const { user } = UserData();
=======
  const { user } = UserData(); // Getting user details
>>>>>>> f1f1aeb (WIP: updates before pull rebase)
  const navigate = useNavigate();

  return (
    <div className="courses">
      <h2>Available Courses</h2>

<<<<<<< HEAD
=======
      {/* Admin-only "Create Course" button */}
>>>>>>> f1f1aeb (WIP: updates before pull rebase)
      {user?.role === "admin" && (
        <button
          className="common-btn"
          onClick={() => navigate("/admin/course")}
        >
          Create Course
        </button>
      )}

<<<<<<< HEAD
=======
      <div className="info-messages">
        <p className="test-mode-warning">
          💡 <strong>Note:</strong> We are currently using{" "}
          <strong>Razorpay Test Mode</strong>. You can select any demo payment
          method to access the course content. Real-time payment methods will be
          implemented in the future.
        </p>

        <p className="enrollment-procedure">
          ✅ <strong>Enrollment Procedure:</strong> Select{" "}
          <strong>Netbanking</strong>, choose any demo bank, and click on{" "}
          <strong>Success</strong>. The course will be marked as purchased for
          you.
        </p>
      </div>

>>>>>>> f1f1aeb (WIP: updates before pull rebase)
      <div className="course-container">
        {courses && courses.length > 0 ? (
          courses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No Courses Yet</p>
        )}
      </div>
    </div>
  );
};

export default Courses;

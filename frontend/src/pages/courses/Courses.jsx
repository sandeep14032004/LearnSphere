import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Courses = () => {
  const { courses } = CourseData();
  const { user } = UserData();
  const navigate = useNavigate();

  return (
    <div className="courses">
      <h2>Available Courses</h2>

      {user?.role === "admin" && (
        <button
          className="common-btn"
          onClick={() => navigate("/admin/course")}
        >
          Create Course
        </button>
      )}

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

import React from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
        <div className="mb-4 lg:mb-0">
          <h1 className="font-semibold text-2xl">Courses</h1>
          <h2 className="text-md">
            Dashboard / <span className="text-gray-600">Course</span>
          </h2>
        </div>
      </div>

      {/* Course Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        <CourseCard
          title="How to lock your bike so it doesn't get stolen."
          tag="React js"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          author={{
            name: 'Yehuda Katz',
            image: './avatar-02.jpg', 
          }}
          time="about 4 hours"
          students="237"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJMmAPj2OsSjbyCiOHKfxSRDppBmOGf-j3Q&s0x200" 
          link="https://youtu.be/ZaC6oCIpjR0?si=ImsBK0rR0WrL87wS" 
        />
        <CourseCard
          title="Understanding Next js"
          tag="Next js"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          author={{
            name: 'Yehuda Katz',
            image: './avatar-02.jpg', 
          }}
          time="about 4 hours"
          students="237"
          image="https://flatirons.com/static/0a79ca63e3ace4bfd802a70a2d7427ae/537f5/What-is-Drupal-An-Overview-in-2025.webp" 
          link="https://youtu.be/wm5gMKuwSYk?si=z5HdyJV_-_yi5HMt" 
        />
        <CourseCard
          title="Exploring Java Programming"
          tag="Java"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          author={{
            name: 'Yehuda Katz',
            image: './avatar-02.jpg', 
          }}
          time="about 4 hours"
          students="237"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcj5c9GrUXQuaMQ7iOzivcWdOCdCWObB1PA&s" 
          link="https://youtu.be/32DLasxoOiM?si=Sq1b8efZ0SdK-exN" 
        />
        <CourseCard
          title="Exploring Java Programming"
          tag="Java"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
          author={{
            name: 'Yehuda Katz',
            image: './avatar-02.jpg', 
          }}
          time="about 4 hours"
          students="237"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcj5c9GrUXQuaMQ7iOzivcWdOCdCWObB1PA&s" 
          link="https://youtu.be/32DLasxoOiM?si=Sq1b8efZ0SdK-exN" 
        />
      </div>
    </div>
  );
};

export default CourseList;

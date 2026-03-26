import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axiosConfig';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VideoPlayer from '../components/VideoPlayer';

const CourseView = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState("");

  useEffect(() => {
    api.get(`courses/${id}/content/`).then(res => {
      setCourse(res.data);
      if(res.data.sections[0]?.lectures[0]) {
        setCurrentVideo(res.data.sections[0].lectures[0].video_url);
      }
    });
  }, [id]);

  if (!course) return <div className="h-screen flex items-center justify-center bg-gray-950 text-white">Loading...</div>;

  return (
    <div className="h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 p-8 overflow-y-auto">
          <VideoPlayer url={currentVideo} title={course.title} />
          <div className="mt-8 border-t border-gray-800 pt-6">
            <h3 className="text-xl font-bold">About this course</h3>
            <p className="text-gray-400 mt-2">{course.description}</p>
          </div>
        </div>
        <Sidebar 
          sections={course.sections} 
          onLectureSelect={setCurrentVideo} 
          currentVideo={currentVideo}
        />
      </div>
    </div>
  );
};

export default CourseView;
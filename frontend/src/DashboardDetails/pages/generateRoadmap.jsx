function generateRoadmap(data) {

  if (data.interest === "Web Development") {

    return [
      "Learn HTML & CSS",
      "JavaScript Fundamentals",
      "React.js",
      "Node.js Backend",
      "Docker & Deployment"
    ];
  }

  if (data.interest === "Data Science") {

    return [
      "Python Basics",
      "NumPy & Pandas",
      "Machine Learning",
      "Deep Learning"
    ];
  }

}
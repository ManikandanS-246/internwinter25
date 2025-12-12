import "./App.css";

export default function App() {
  return (
    <div className="profile-container">

      <div className="card">
        <h1 className="name">Manikandan</h1>
        <p className="role">Student | Developer | Learner</p>

        <hr />

        {/* Personal Details */}
        <h2>Personal Details</h2>
        <ul className="details">
          <li><strong>Age:</strong> 19</li>
          <li><strong>Phone:</strong> +91 9677463099</li>
          <li><strong>Email:</strong> manikandan24072006@gmail.com</li>
          <li><strong>Location:</strong> India</li>
        </ul>

        {/* Skills */}
        <h2>Skills</h2>
        <ul className="skills">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML / CSS</li>
          <li>C++</li>
          <li>Cybersecurity Basics</li>
        </ul>

        <button className="btn">Contact Me</button>
      </div>

    </div>
  );
}

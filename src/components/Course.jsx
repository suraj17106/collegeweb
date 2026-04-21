import './Course.css';

function Course() {
    return (
        <div id="course" className="course-container">
            <div className="course-header">
                <h1>Available IHRD Courses</h1>
                <p>
                    Explore the undergraduate programmes managed by IHRD at the College of Applied Science, Malampuzha.
                </p>
            </div>

            <div className="course-grid">
                <div className="course-card">
                    <h2>B.Sc. Computer Science</h2>
                    <p>
                        A strong foundation in programming, data structures, algorithms, databases, and software development.
                    </p>
                </div>

                <div className="course-card">
                    <h2>B.Sc. Electronics</h2>
                    <p>
                        Focuses on electronic systems, circuits, digital electronics, communication, and instrumentation.
                    </p>
                </div>

                <div className="course-card">
                    <h2>B.Com</h2>
                    <p>
                        Covers commerce, accounting, business administration, taxation, and financial management.
                    </p>
                </div>

                <div className="course-card">
                    <h2>BBA</h2>
                    <p>
                        Modern business administration programme introduced in 2024, preparing students for leadership roles.
                    </p>
                </div>
            </div>
        </div>
    );
}
 export default Course;      

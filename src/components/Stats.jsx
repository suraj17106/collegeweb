import './Stats.css';

function Stats() {
    const stats = [
        {
            number: '1000+',
            label: 'Students Enrolled'
        },
        {
            number: '25+',
            label: 'Expert Instructors'
        },
        {
            number: '100%',
            label: 'Success Rate'
        },
        {
            number: '5+',
            label: 'Programs Offered'
        }
    ];

    return (
        <div className="stats-container">
            <h2>Our Achievements</h2>
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-number">{stat.number}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stats;

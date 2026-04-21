import './Testimonials.css';

function Testimonials() {
    const testimonials = [
        {
            name: 'Akhil Kumar',
            role: 'Student - BCA Program',
            message: 'The faculty here is incredibly supportive and knowledgeable. I learned practical skills that are industry-relevant.'
        },
        {
            name: 'Priya Sharma',
            role: 'Alumni - BTech CSE',
            message: 'DORA provided me with the perfect platform to grow. The campus culture is amazing and welcoming.'
        },
        {
            name: 'Rajesh Menon',
            role: 'Parent',
            message: 'My son\'s transformation since joining DORA has been remarkable. Great college with dedicated staff.'
        },
        {
            name: 'Anjali Das',
            role: 'Student - MBA Program',
            message: 'Excellent curriculum, experienced mentors, and wonderful infrastructure. Highly recommended!'
        }
    ];

    return (
        <div className="testimonials-container">
            <h2>Student Testimonials</h2>
            <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="testimonial-text">"{testimonial.message}"</div>
                        <div className="testimonial-author">
                            <div className="author-name">{testimonial.name}</div>
                            <div className="author-role">{testimonial.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;

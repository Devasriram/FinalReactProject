import ServiceCard from "../components/ServiceCard";

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern responsive React websites",
    },
    {
      title: "UI/UX Design",
      description: "Creative and attractive user interfaces",
    },
    {
      title: "API Integration",
      description: "Connecting frontend with APIs",
    },
    {
      title: "Mobile Responsive",
      description: "Responsive design for all devices",
    },
  ];

  return (
    <div className="page">
      <h1>Our Services</h1>

      <div className="grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
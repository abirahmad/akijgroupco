'use client'
import ListCard from "../../components/ListCard";


const jobData = [
  {
    title: 'Software Engineer',
    description: 'Develop and maintain web applications.',
  },
  {
    title: 'Product Manager',
    description: 'Lead product development and strategy.',
  },
  {
    title: 'UX Designer',
    description: 'Design user interfaces and experiences.',
  },
];

export default function Career() {
  const handleViewClick = (jobTitle) => {
    alert(`Viewing details for ${jobTitle}`);
  };

  return (
    <div className="px-16 py-16 bg-gradient-to-r from-blue-200 via-white to-blue-200">
      <h1 className="bg-white py-2 text-3xl font-bold mb-8 text-center">Job Lists</h1>
      {jobData.map((job, index) => (
        <ListCard
          key={index}
          jobTitle={job.title}
          jobDescription={job.description}
          onViewClick={() => handleViewClick(job.title)}
        />
      ))}
    </div>
  );
}

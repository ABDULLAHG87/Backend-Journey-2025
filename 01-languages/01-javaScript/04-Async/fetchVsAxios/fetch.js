fetch('https://remoteok.com/api')
  .then(res => res.json())
  .then(data => {
    // Remove the first element which is metadata
    const jobs = data.slice(1);
    
    const backendJobs = jobs.filter(job =>
      job.position?.toLowerCase().includes('backend') ||
      job.description?.toLowerCase().includes('backend')
    );

    backendJobs.forEach(job => {
      console.log('Title:', job.position);
      console.log('Company:', job.company);
      console.log('Apply Link:', job.url);
      console.log('Description:', job.description); // contains HTML
      console.log('\n===========================\n');
    });
  })
  .catch(err => console.error('Error fetching jobs:', err));

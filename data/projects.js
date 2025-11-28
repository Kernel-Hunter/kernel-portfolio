const projects = [
  {
    id: 'task-management-app',
    title: 'Task Management Application',
    summary: 'A task-management application built with Stacks and Queues, featuring task creation, completion tracking, reordering, categories, undo actions, and task statistics.',
    description: 'Java application leveraging stacks and queues to implement reversible operations, efficient reordering, categorized views, and progress statistics.',
    technologies: ['Java', 'Data Structures', 'Queues', 'Stacks'],
    repoUrl: 'https://github.com/Kernel-Hunter/Task-Management-Application',
    liveUrl: null,
    image: '/assets/task-management.png',
    alt: 'Person working on a laptop with a digital checklist interface overlay'
  },
  {
    id: 'kernel-experiments',
    title: 'Kernel Experiments',
    summary: 'Kernel-experiments is a lightweight project with example kernel code, helper user-space tools, pentest automation helpers and docs - intended as a safe, well-documented starting point for kernel/module exploration and security tooling.',
    description: 'Experimental modules examining memory behavior, lifecycle, and security surfaces—includes build scripts, pentest helper tools, and userspace read tests.',
    technologies: ['C', 'Linux Kernel', 'Shell', 'Systems Programming', 'Python'],
    repoUrl: 'https://github.com/Kernel-Hunter/kernel-experiments',
    liveUrl: null,
    image: '/assets/kernel-experiments.png',
    alt: 'Hands typing on laptop with floating code overlays in a dark environment'
  },
  {
    id: 'smart-mirror-system',
    title: 'Smart Mirror System',
    summary: 'IoT interactive mirror: weather, time, calendar, notifications, sensor-driven ambient feedback.',
    description: 'ESP32 + Raspberry Pi integration with motion & temperature sensing, LED indicators, and real-time data ingestion via IoT APIs.',
    technologies: ['ESP32', 'Raspberry Pi', 'Python', 'IoT APIs', 'Sensors', 'Embedded'],
    achievements: ['Second Place – University Innovation Challenge'],
    repoUrl: null,
    liveUrl: null,
    image: '/assets/smart-mirror.png',
    alt: 'Interactive smart mirror displaying a web interface with illuminated frame'
  },
  {
    id: 'underground-water-recycling',
    title: 'Underground Water Management & Recycling System',
    summary: 'Sustainable agriculture concept: collect, filter, and reuse irrigation water.',
    description: 'Layered underground chambers channel excess irrigation water through natural filtration media before reuse; proposed sensorization and IoT dashboard.',
    technologies: ['Sustainable Design', 'IoT Concept', 'Arduino/ESP32', 'Environmental Engineering'],
    achievements: ['4th Place – University Innovation Challenge'],
    repoUrl: null,
    liveUrl: null,
    image: '/assets/water-recycling.png',
    alt: 'Aerial view of circular water treatment basins surrounded by greenery'
  }
];

export default projects;

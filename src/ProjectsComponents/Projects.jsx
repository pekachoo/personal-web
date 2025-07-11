export default function Projects() {
    const featuredProjects = [
      {
        title: 'FTC Worlds',
        description: 'Description for FTC Worlds project.',
        image: '/projects/ftcworlds.jpg',
      },
      {
        title: 'Space Apps',
        description: 'Description for Space Apps project.',
        image: '/projects/spaceapps.png',
      },
    ];

    const sideProjects = [
      {
        title: 'VEX Worlds',
        description: 'Description for VEX Worlds project.',
        image: '/projects/vexworlds.jpg',
      },
      {
        title: 'VEX 1 Bot',
        description: 'Description for VEX 1 Bot project.',
        image: '/projects/vex1bot.jpg',
      },
      {
        title: 'UTRA Bot',
        description: 'Description for UTRA Bot project.',
        image: '/projects/utra_bot.jpg',
      },
      {
        title: 'Turret',
        description: 'Description for Turret project.',
        image: '/projects/turret.jpg',
      },
      {
        title: 'FTC 4 Bot',
        description: 'Description for FTC 4 Bot project.',
        image: '/projects/ftc4bot.jpg',
      },
      {
        title: 'FTC 2 Bot',
        description: 'Description for FTC 2 Bot project.',
        image: '/projects/ftc2bot.png',
      },
      {
        title: 'FTC 1 Bot',
        description: 'Description for FTC 1 Bot project.',
        image: '/projects/ftc1bot.png',
      },
    ];

    return (
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Projects</h2>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-6">Other Projects</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sideProjects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-32 w-full object-cover mb-4 rounded"
              />
              <h4 className="font-medium text-gray-800 text-sm mb-2">{project.title}</h4>
              <p className="text-xs text-gray-500 text-center">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
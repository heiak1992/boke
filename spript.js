// AI项目数据
const projects = [
    {
        title: "AI聊天机器人",
        description: "基于最新GPT技术的智能对话系统",
        date: "2024-03-20"
    },
    {
        title: "图像识别系统",
        description: "使用深度学习的实时图像识别",
        date: "2024-03-15"
    },
    // 可以添加更多项目
];

// 播客数据
const podcasts = [
    {
        title: "AI发展趋势探讨",
        duration: "45:00",
        date: "2024-03-18"
    },
    {
        title: "技术创新与未来展望",
        duration: "38:30",
        date: "2024-03-10"
    },
    // 可以添加更多播客
];

// 动态加载项目
function loadProjects() {
    const container = document.getElementById('projectContainer');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <small>${project.date}</small>
        `;
        container.appendChild(projectElement);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    
    // 添加滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });

    // 观察所有项目卡片
    document.querySelectorAll('.project-card').forEach((card) => {
        observer.observe(card);
    });
});
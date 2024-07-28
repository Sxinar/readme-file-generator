document.getElementById('generate-btn').addEventListener('click', function() {
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('description').value;
    const installation = document.getElementById('installation').value;
    const usage = document.getElementById('usage').value;
    const faq = document.getElementById('faq').value;
    const features = document.getElementById('features').value;
    const feedback = document.getElementById('feedback').value;
    const contact = document.getElementById('contact').value;
    const demo = document.getElementById('demo').value;
    const projectLink = document.getElementById('project-link').value;
    const authors = document.getElementById('authors').value;
    const license = document.getElementById('license').value;

    const readmeContent = `
# ${title}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## FAQ
${faq}

## Features
${features}

## Feedback
${feedback}

## Contact
${contact}

## Demo
${demo}

## Project Link
${projectLink}

## Authors and Acknowledgments
${authors}

## License
${license}
`;

    document.getElementById('output').value = readmeContent;
});

const langEn = {
    "title": "GitHub README Generator",
    "projectTitle": "Project Title",
    "description": "Description",
    "installation": "Installation",
    "usage": "Usage",
    "faq": "FAQ",
    "features": "Features",
    "feedback": "Feedback",
    "contact": "Contact",
    "demo": "Demo",
    "projectLink": "Project Link",
    "authors": "Authors and Acknowledgments",
    "license": "License",
    "generate": "Generate README"
};

const langTr = {
    "title": "GitHub README Oluşturucu",
    "projectTitle": "Proje Başlığı",
    "description": "Açıklama",
    "installation": "Kurulum",
    "usage": "Kullanım",
    "faq": "SSS",
    "features": "Özellikler",
    "feedback": "Geri Bildirim",
    "contact": "İletişim",
    "demo": "Demo",
    "projectLink": "Proje Linki",
    "authors": "Yazarlar ve Teşekkür",
    "license": "Lisans",
    "generate": "README Oluştur"
};

document.getElementById('translate-icon').addEventListener('click', function() {
    const currentLang = document.getElementById('title').textContent === langEn.title ? langTr : langEn;
    setLanguage(currentLang);
});

function setLanguage(lang) {
    document.getElementById('title').textContent = lang.title;
    document.getElementById('label-project-title').textContent = lang.projectTitle;
    document.getElementById('label-description').textContent = lang.description;
    document.getElementById('label-installation').textContent = lang.installation;
    document.getElementById('label-usage').textContent = lang.usage;
    document.getElementById('label-faq').textContent = lang.faq;
    document.getElementById('label-features').textContent = lang.features;
    document.getElementById('label-feedback').textContent = lang.feedback;
    document.getElementById('label-contact').textContent = lang.contact;
    document.getElementById('label-demo').textContent = lang.demo;
    document.getElementById('label-project-link').textContent = lang.projectLink;
    document.getElementById('label-authors').textContent = lang.authors;
    document.getElementById('label-license').textContent = lang.license;
    document.getElementById('generate-btn').textContent = lang.generate;
}

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('copy-icon').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    alert('Markdown copied to clipboard');
});

document.getElementById('download-icon').addEventListener('click', function() {
    const output = document.getElementById('output').value;
    const blob = new Blob([output], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

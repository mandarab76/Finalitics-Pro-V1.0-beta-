// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Company Analysis Function
function analyzeCompany() {
    const companyInput = document.getElementById('companyInput');
    const analysisResult = document.getElementById('analysisResult');
    const analyzedCompany = document.getElementById('analyzedCompany');
    const companyName = companyInput.value.trim();

    if (!companyName) {
        alert('Please enter a company name');
        return;
    }

    // Show loading state
    const analyzeBtn = document.querySelector('.btn-analyze');
    const originalText = analyzeBtn.innerHTML;
    analyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
    analyzeBtn.disabled = true;

    // Simulate API call with timeout
    setTimeout(() => {
        analyzedCompany.textContent = companyName;
        analysisResult.style.display = 'block';
        
        // Simulate some random metrics
        const metrics = document.querySelectorAll('.metric-value');
        metrics[0].textContent = '$' + (Math.random() * 100 + 50).toFixed(1) + 'B';
        metrics[1].textContent = '+' + (Math.random() * 30 + 5).toFixed(1) + '%';
        metrics[2].textContent = (Math.random() * 0.5 + 0.2).toFixed(2);
        metrics[3].textContent = (Math.random() * 2 + 3).toFixed(1) + '/5';

        // Reset button
        analyzeBtn.innerHTML = originalText;
        analyzeBtn.disabled = false;

        // Scroll to results
        analysisResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1500);
}

// File Upload Handler
function handleFileUpload(input, type) {
    const file = input.files[0];
    if (!file) return;

    const statusElement = document.getElementById(type === 'financial-statement' ? 'fsStatus' : 'ledgerStatus');
    
    // Show uploading status
    statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';
    statusElement.className = 'upload-status';
    
    // Simulate file upload
    setTimeout(() => {
        statusElement.innerHTML = `<i class="fas fa-check-circle"></i> ${file.name} uploaded successfully!`;
        statusElement.className = 'upload-status success';
    }, 1000);
}

// Drag and drop functionality for upload areas
const uploadAreas = document.querySelectorAll('.upload-area');

uploadAreas.forEach(area => {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        area.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        area.addEventListener(eventName, () => {
            area.style.borderColor = 'var(--primary-color)';
            area.style.background = '#eff6ff';
        }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        area.addEventListener(eventName, () => {
            area.style.borderColor = 'var(--border-color)';
            area.style.background = 'var(--light-color)';
        }, false);
    });

    area.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        
        if (files.length > 0) {
            const onclickAttr = area.getAttribute('onclick');
            const match = onclickAttr ? onclickAttr.match(/getElementById\('(\w+)'\)/) : null;
            if (!match) return;
            
            const inputId = match[1];
            const input = document.getElementById(inputId);
            if (!input) return;
            
            input.files = files;
            
            const type = inputId === 'fsInput' ? 'financial-statement' : 'ledger';
            handleFileUpload(input, type);
        }
    }, false);
});

// Chatbot Functionality
let isChatOpen = true;

function toggleChat() {
    const chatBody = document.getElementById('chatbotBody');
    const toggleIcon = document.getElementById('chatToggleIcon');
    
    isChatOpen = !isChatOpen;
    
    if (isChatOpen) {
        chatBody.classList.remove('collapsed');
        toggleIcon.className = 'fas fa-chevron-down';
    } else {
        chatBody.classList.add('collapsed');
        toggleIcon.className = 'fas fa-chevron-up';
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const responses = [
            "I can help you understand financial ratios and metrics. What would you like to know?",
            "Financial analysis involves examining financial statements to understand company performance. Would you like me to explain a specific concept?",
            "I can assist with understanding balance sheets, income statements, and cash flow. What's your question?",
            "Upload your financial documents and I'll help you interpret the data. Need help getting started?",
            "Great question! Financial health can be assessed through various metrics like liquidity ratios, profitability ratios, and solvency ratios. Which would you like to learn about?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    
    const icon = sender === 'bot' ? 'fa-robot' : 'fa-user';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas ${icon}"></i>
        </div>
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .upload-card, .analysis-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = 'var(--text-color)';
            });
            if (navLink) {
                navLink.style.color = 'var(--primary-color)';
            }
        }
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('companyInput')?.focus();
    }
});

// Add page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

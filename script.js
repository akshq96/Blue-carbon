 // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const mobileThemeToggle = document.getElementById('mobileThemeToggle');
        const body = document.body;

        // Check for saved theme preference or respect OS preference
        if (localStorage.getItem('theme') === 'dark' || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))) {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
            }
        });

        mobileThemeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i> Toggle Theme';
            } else {
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
            }
        });

        // Mobile Menu Functionality
        const mobileNavToggle = document.getElementById('mobileNavToggle');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileNavToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            if (mobileMenu.classList.contains('open')) {
                mobileNavToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Close mobile menu when clicking on links
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Dashboard tabs functionality
        function initDashboardTabs() {
            const dashboardTabs = document.querySelectorAll('.dashboard-tab');
            
            dashboardTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    dashboardTabs.forEach(t => t.classList.remove('active'));
                    // Add active class to clicked tab
                    tab.classList.add('active');
                    
                    // Add a subtle animation effect
                    tab.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        tab.style.transform = 'scale(1)';
                    }, 150);
                    
                    // In a real application, this would load different content
                    // For this demo, we'll just show a message
                    const tabName = tab.textContent.trim();
                    const contentContainer = tab.closest('.dashboard-preview').querySelector('.dashboard-content');
                    
                    // Clear existing content
                    contentContainer.innerHTML = '';
                    
                    // Add new content based on tab
                    switch(tabName) {
                        case 'Projects':
                            contentContainer.innerHTML = `
                                <div class="metric-card" style="grid-column: 1 / -1;">
                                    <h3>Active Projects Overview</h3>
                                    <p>42 projects across 12 countries</p>
                                    <div class="project-stats" style="display: flex; justify-content: space-around; margin-top: 20px;">
                                        <div class="project-stat">
                                            <div class="project-stat-value">28</div>
                                            <div class="project-stat-label">Mangrove</div>
                                        </div>
                                        <div class="project-stat">
                                            <div class="project-stat-value">9</div>
                                            <div class="project-stat-label">Seagrass</div>
                                        </div>
                                        <div class="project-stat">
                                            <div class="project-stat-value">5</div>
                                            <div class="project-stat-label">Salt Marsh</div>
                                        </div>
                                    </div>
                                </div>
                            `;
                            break;
                        case 'Credits':
                            contentContainer.innerHTML = `
                                <div class="metric-card">
                                    <div class="metric-value">12,458</div>
                                    <div class="metric-label">Total Credits</div>
                                </div>
                                <div class="metric-card">
                                    <div class="metric-value">8,245</div>
                                    <div class="metric-label">Available Credits</div>
                                </div>
                                <div class="metric-card">
                                    <div class="metric-value">$18.50</div>
                                    <div class="metric-label">Average Price</div>
                                </div>
                                <div class="metric-card">
                                    <div class="metric-value">$230,473</div>
                                    <div class="metric-label">Total Value</div>
                                </div>
                            `;
                            break;
                        case 'Reports':
                            contentContainer.innerHTML = `
                                <div class="metric-card" style="grid-column: 1 / -1; text-align: left;">
                                    <h3>Recent Reports</h3>
                                    <ul style="list-style: none; margin-top: 15px;">
                                        <li style="padding: 10px; border-bottom: 1px solid var(--border);">
                                            <i class="fas fa-file-pdf" style="color: var(--error);"></i> 
                                            Monthly_Report_November_2023.pdf
                                            <button class="connect-wallet" style="padding: 5px 10px; float: right;">
                                                <i class="fas fa-download"></i> Download
                                            </button>
                                        </li>
                                        <li style="padding: 10px; border-bottom: 1px solid var(--border);">
                                            <i class="fas fa-file-excel" style="color: var(--success);"></i> 
                                            Carbon_Credits_Analysis.xlsx
                                            <button class="connect-wallet" style="padding: 5px 10px; float: right;">
                                                <i class="fas fa-download"></i> Download
                                            </button>
                                        </li>
                                        <li style="padding: 10px;">
                                            <i class="fas fa-chart-line" style="color: var(--secondary);"></i> 
                                            Performance_Dashboard_2023
                                            <button class="connect-wallet" style="padding: 5px 10px; float: right;">
                                                <i class="fas fa-eye"></i> View
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            `;
                            break;
                        default: // Overview
                            contentContainer.innerHTML = `
                                <div class="metric-card">
                                    <div class="metric-value">12,458</div>
                                    <div class="metric-label">Carbon Credits Generated</div>
                                </div>
                                <div class="metric-card">
                                    <div class="metric-value">42</div>
                                    <div class="metric-label">Active Projects</div>
                                </div>
                                                                <div class="metric-card">
                                    <div class="metric-value">24,921</div>
                                    <div class="metric-label">CO₂ Sequestered (tons)</div>
                                </div>
                            `;
                    }
                    
                    // Add fade-in animation to new content
                    contentContainer.style.opacity = '0';
                    contentContainer.style.transform = 'translateY(10px)';
                    contentContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    
                    setTimeout(() => {
                        contentContainer.style.opacity = '1';
                        contentContainer.style.transform = 'translateY(0)';
                    }, 50);
                });
            });
        }

        // Navigation functionality
        const pageSections = document.querySelectorAll('.page-section');
        const navLinks = document.querySelectorAll('[data-section]');
        const homeLink = document.getElementById('homeLink');
        
        // Function to show a specific section and hide others
        function showSection(sectionId) {
            pageSections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
            
            // Update URL hash
            window.location.hash = sectionId;
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
        
        // Add click event to all navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('data-section');
                showSection(sectionId);
            });
        });
        
        // Home logo click event
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('home');
        });
        
        // Check URL hash on page load
        window.addEventListener('load', () => {
            if (window.location.hash) {
                const sectionId = window.location.hash.substring(1);
                if (document.getElementById(sectionId)) {
                    showSection(sectionId);
                }
            }
            
            // Initialize dashboard tabs
            initDashboardTabs();
        });

        // Demo functionality
        const exploreDemoBtn = document.getElementById('exploreDemoBtn');
        const demoModal = document.getElementById('demoModal');
        const closeDemoModal = document.getElementById('closeDemoModal');
        
        exploreDemoBtn.addEventListener('click', () => {
            demoModal.classList.add('active');
        });
        
        closeDemoModal.addEventListener('click', () => {
            demoModal.classList.remove('active');
        });
        
        demoModal.addEventListener('click', (e) => {
            if (e.target === demoModal) {
                demoModal.classList.remove('active');
            }
        });

        // Documentation functionality
        const readDocsBtn = document.getElementById('readDocsBtn');
        const footerDocs = document.getElementById('footerDocs');
        const documentationModal = document.getElementById('documentationModal');
        const closeDocsModal = document.getElementById('closeDocsModal');
        
        readDocsBtn.addEventListener('click', () => {
            documentationModal.classList.add('active');
        });
        
        footerDocs.addEventListener('click', (e) => {
            e.preventDefault();
            documentationModal.classList.add('active');
        });
        
        closeDocsModal.addEventListener('click', () => {
            documentationModal.classList.remove('active');
        });
        
        documentationModal.addEventListener('click', (e) => {
            if (e.target === documentationModal) {
                documentationModal.classList.remove('active');
            }
        });

        // Registration modal functionality
        const registerButton = document.getElementById('registerButton');
        const registrationModal = document.getElementById('registrationModal');
        const closeModal = document.getElementById('closeModal');
        const registrationForm = document.getElementById('registrationForm');
        const profileLink = document.getElementById('profileLink');
        const mobileProfileLink = document.getElementById('mobileProfileLink');
        const mobileConnectWallet = document.getElementById('mobileConnectWallet');
        const connectWallet = document.getElementById('connectWallet');
        
        // Open registration modal
        registerButton.addEventListener('click', () => {
            registrationModal.classList.add('active');
        });
        
        // Close registration modal
        closeModal.addEventListener('click', () => {
            registrationModal.classList.remove('active');
        });
        
        // Close modal when clicking outside
        registrationModal.addEventListener('click', (e) => {
            if (e.target === registrationModal) {
                registrationModal.classList.remove('active');
            }
        });
        
        // Handle registration form submission
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const orgName = document.getElementById('orgName').value;
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            
            // Simple validation
            if (orgName && fullName && email) {
                // In a real application, you would send this data to a server
                // For this demo, we'll just simulate a successful registration
                
                // Set user data
                document.getElementById('userName').textContent = fullName;
                document.getElementById('profileName').value = fullName;
                document.getElementById('profileEmail').value = email;
                document.getElementById('profileOrg').value = orgName;
                
                // Set user avatar initials
                const names = fullName.split(' ');
                const initials = names[0][0] + (names.length > 1 ? names[names.length - 1][0] : '');
                document.getElementById('userAvatar').textContent = initials;
                
                // Show profile link, hide connect wallet
                profileLink.style.display = 'block';
                mobileProfileLink.style.display = 'block';
                connectWallet.style.display = 'none';
                mobileConnectWallet.style.display = 'none';
                
                // Close modal
                registrationModal.classList.remove('active');
                
                // Show success message (in a real app, you might use a toast notification)
                alert('Registration successful! You can now access your profile.');
                
                // Show profile section
                showSection('profile');
            } else {
                alert('Please fill in all required fields.');
            }
        });
        
        // Profile link functionality
        profileLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('profile');
        });
        
        mobileProfileLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('profile');
            mobileMenu.classList.remove('open');
            mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
        
        // Connect wallet functionality
        connectWallet.addEventListener('click', () => {
            // In a real application, this would connect to a blockchain wallet
            alert('Wallet connection functionality would be implemented here.');
        });
        
        mobileConnectWallet.addEventListener('click', () => {
            // In a real application, this would connect to a blockchain wallet
            alert('Wallet connection functionality would be implemented here.');
            mobileMenu.classList.remove('open');
            mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });

        // Data upload form functionality
const dataUploadForm = document.querySelector('.upload-form');
if (dataUploadForm) {
    // File upload drag and drop functionality
    const dropZone = document.getElementById('dropZone');
    if (dropZone) {
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = 'var(--secondary)';
            dropZone.style.backgroundColor = 'rgba(13, 148, 136, 0.05)';
        });
        
        dropZone.addEventListener('dragleave', () => {
            dropZone.style.borderColor = 'var(--border)';
            dropZone.style.backgroundColor = 'transparent';
        });
        
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = 'var(--border)';
            dropZone.style.backgroundColor = 'transparent';
            
            // Handle dropped files
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFileUpload(files);
            }
        });
        
        // Also allow click to select files
        dropZone.addEventListener('click', () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.multiple = true;
            fileInput.addEventListener('change', (e) => {
                if (e.target.files.length > 0) {
                    handleFileUpload(e.target.files);
                }
            });
            fileInput.click();
        });
    }
    
    // Form submission
    dataUploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const projectSelect = document.getElementById('project-select');
        const uploadDate = document.getElementById('upload-date');
        const dataType = document.getElementById('data-type');
        
        if (!projectSelect.value) {
            alert('Please select a project');
            return;
        }
        
        if (!uploadDate.value) {
            alert('Please select a data collection date');
            return;
        }
        
        if (!dataType.value) {
            alert('Please select a data type');
            return;
        }
        
        // In a real application, this would submit the form data
        alert('Data upload successful! Your data is being processed and will be verified shortly.');
        this.reset();
    });
}

// Handle file uploads
function handleFileUpload(files) {
    // Create a list of uploaded files
    const fileList = Array.from(files).map(file => file.name).join(', ');
    
    // Show success message with file count
    alert(`Preparing to upload ${files.length} file(s): ${fileList}`);
    
    // In a real application, you would upload files to a server here
}

        // File upload drag and drop functionality
        const dropZone = document.getElementById('dropZone');
        if (dropZone) {
            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.style.borderColor = 'var(--secondary)';
                dropZone.style.backgroundColor = 'rgba(13, 148, 136, 0.05)';
            });
            
            dropZone.addEventListener('dragleave', () => {
                dropZone.style.borderColor = 'var(--border)';
                dropZone.style.backgroundColor = 'transparent';
            });
            
            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.style.borderColor = 'var(--border)';
                dropZone.style.backgroundColor = 'transparent';
                
                // Handle dropped files
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    alert(`Preparing to upload ${files.length} file(s). In a real application, this would upload the files to a server.`);
                }
            });
        }

        // Carbon credit purchase functionality
        const purchaseButtons = document.querySelectorAll('.credit-action button');
        purchaseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const creditCard = this.closest('.credit-card');
                const creditType = creditCard.querySelector('.credit-header h3').textContent;
                const creditPrice = creditCard.querySelector('.credit-header p').textContent;
                
                alert(`In a real application, this would initiate purchase of ${creditType} at ${creditPrice} through your connected wallet.`);
            });
        });

        // Profile save functionality
        const profileSaveButton = document.querySelector('.profile-content .form-submit');
        if (profileSaveButton) {
            profileSaveButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                const profileName = document.getElementById('profileName').value;
                const profileEmail = document.getElementById('profileEmail').value;
                const profileOrg = document.getElementById('profileOrg').value;
                
                if (!profileName || !profileEmail || !profileOrg) {
                    alert('Please fill in all profile fields');
                    return;
                }
                
                // Update profile display
                document.getElementById('userName').textContent = profileName;
                
                // Set user avatar initials
                const names = profileName.split(' ');
                const initials = names[0][0] + (names.length > 1 ? names[names.length - 1][0] : '');
                document.getElementById('userAvatar').textContent = initials;
                
                alert('Profile updated successfully!');
            });
        }

        // Animate elements on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.feature-card, .testimonial-card, .step, .project-card, .credit-card');
            
            elements.forEach(element => {
                const position = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (position < screenPosition) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Set initial state for animated elements
        document.querySelectorAll('.feature-card, .testimonial-card, .step, .project-card, .credit-card').forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        // Listen for scroll events
        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on load
        window.addEventListener('load', animateOnScroll);

        // Initialize dashboard with some chart data (simulated)
        function initDashboardCharts() {
            // Simulated chart data
            console.log('Initializing dashboard charts...');
            // In a real application, this would initialize actual charts using a library like Chart.js
        }

        // Initialize the application
        window.addEventListener('load', function() {
            initDashboardCharts();
            
            // Check if user is already registered (simulated with localStorage)
            if (localStorage.getItem('userRegistered') === 'true') {
                profileLink.style.display = 'block';
                mobileProfileLink.style.display = 'block';
                connectWallet.style.display = 'none';
                mobileConnectWallet.style.display = 'none';
                
                // Set mock user data
                document.getElementById('userName').textContent = 'John Doe';
                document.getElementById('profileName').value = 'John Doe';
                document.getElementById('profileEmail').value = 'john.doe@example.com';
                document.getElementById('profileOrg').value = 'EcoRestore India';
                document.getElementById('userAvatar').textContent = 'JD';
            }
        });

        // Create background particles
    function createParticles() {
        const animatedBg = document.getElementById('animatedBg');
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('bg-particle');
            
            // Random size between 10 and 80px
            const size = Math.random() * 80 + 10;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation delay and duration
            const delay = Math.random() * 10;
            const duration = 20 + Math.random() * 20;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            animatedBg.appendChild(particle);
        }
    }

    // Initialize particles when page loads
    window.addEventListener('load', createParticles);




    
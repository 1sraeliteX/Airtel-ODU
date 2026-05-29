// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Like Button Functionality
const likeBtn = document.querySelector('.like-btn');
let isLiked = false;

likeBtn.addEventListener('click', () => {
  isLiked = !isLiked;
  const icon = likeBtn.querySelector('i');
  
  if (isLiked) {
    icon.classList.remove('far');
    icon.classList.add('fas');
    likeBtn.style.borderColor = '#dc2626';
    likeBtn.style.color = '#dc2626';
  } else {
    icon.classList.remove('fas');
    icon.classList.add('far');
    likeBtn.style.borderColor = 'var(--border)';
    likeBtn.style.color = 'var(--text-primary)';
  }
});

// Share functionality
const shareButtons = document.querySelectorAll('.share-icon-btn');

shareButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const articleTitle = 'Airtel SmartConnect 5G ODU: Everything You Need to Know';
    const articleURL = 'https://example.com/article';
    
    switch(index) {
      case 0: // Facebook
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${articleURL}`, '_blank');
        break;
      case 1: // Twitter/X
        window.open(`https://twitter.com/intent/tweet?text=${articleTitle}&url=${articleURL}`, '_blank');
        break;
      case 2: // WhatsApp
        window.open(`https://wa.me/?text=${articleTitle} ${articleURL}`, '_blank');
        break;
      case 3: // Copy Link
        navigator.clipboard.writeText(articleURL).then(() => {
          const originalHTML = button.innerHTML;
          button.innerHTML = '<i class="fas fa-check"></i>';
          setTimeout(() => {
            button.innerHTML = originalHTML;
          }, 2000);
        });
        break;
    }
  });
});

// CTA Share buttons
const shareCtaWhatsApp = document.querySelector('.btn-whatsapp');

if (shareCtaWhatsApp) {
  shareCtaWhatsApp.addEventListener('click', (e) => {
    e.preventDefault();
    const articleTitle = 'Airtel SmartConnect 5G ODU: Everything You Need to Know';
    const articleURL = 'https://example.com/article';
    window.open(`https://wa.me/2347018080377?text=${encodeURIComponent(articleTitle + ' ' + articleURL)}`, '_blank');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animation: Add view count animation on page load
window.addEventListener('load', () => {
  const viewCount = document.querySelector('.stat:first-child');
  if (viewCount) {
    viewCount.style.animation = 'fadeIn 0.6s ease-in';
  }
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

// ============================================
// COMMENTS GENERATION
// ============================================

const igoNames = ['Chioma', 'Chukwu', 'Okechukwu', 'Nneka', 'Ifeanyi', 'Amara', 'Nonso', 'Adanna', 'Emeka', 'Chinelo', 'Obinna', 'Ngozi', 'Chidi', 'Ifeoma', 'Onyeka', 'Eze', 'Nkechi', 'Blessing'];

const yorubaNames = ['Oluwaseun', 'Aisha', 'Kunle', 'Yetunde', 'Tunde', 'Adeola', 'Oluwatoyin', 'Adebayo', 'Folake', 'Taiwo', 'Kemi', 'Segun', 'Adeyinka', 'Tolani', 'Baba', 'Ade', 'Wale', 'Dipo'];

const hausaNames = ['Zainab', 'Aminu', 'Maryam', 'Hassan', 'Fatima', 'Muhammed', 'Abubakar', 'Halima', 'Kasim', 'Lawal', 'Sadiya', 'Gidado', 'Hauwa', 'Salihu', 'Jamila', 'Abdulahi', 'Nuhu', 'Binta'];

const locations = [
  'Odenigwe',
  'Hilltop',
  'Behind Flat',
  'Nsukka Beach',
  'Federal Housing',
  'Enugu Road',
  'New Market',
  'Aba Road',
  'Asor',
  'Ikeduru',
  'Ugwuaji',
  'Owo',
  'Confederation Area',
  'Artisan Road',
  'Magbar',
  'Abakpa',
  'Trans Ekulu'
];

const comments = [
  "The ODU has completely changed my internet experience! 5G speed is unbeatable.",
  "I was skeptical but the 50 Mbps speed is actually consistent. Very impressed with the performance.",
  "Finally have reliable internet without waiting for fiber installation. The ODU solved my problem.",
  "The automatic 4G fallback feature is genius. Never experienced a complete internet outage since I got it.",
  "50 devices connected at once and it still runs smoothly. This thing is a powerhouse!",
  "Installation was quick and free. The Airtel technician was professional and set everything up perfectly.",
  "The ₦25,000/month price is actually worth it considering the speed and reliability I get.",
  "My work-from-home setup has never been better. Upload and download speeds are exceptional.",
  "No more data limits! Unlimited browsing feels like a luxury after years of capped plans.",
  "The built-in battery backup during power cuts is a lifesaver. Got 6 hours of internet yesterday.",
  "Parental controls are working great. I can finally manage my kids' internet usage properly.",
  "The 5G coverage at my location is rock solid. Not a single dropped connection in 3 months.",
  "Compared to the old VSAT connection I had, this ODU is 10x faster and more reliable.",
  "The setup interface is intuitive. Managing the device through the Airtel app is seamless.",
  "Gaming online is finally smooth! No more lag during competitive matches.",
  "Streaming 4K content without buffering. The ODU handles it like a champ.",
  "Customer service was helpful when I had questions about the device functionality.",
  "The 100 Mbps option for ₦45,000 is worth considering for power users like me.",
  "Zero downtime in 2 months. This device is incredibly reliable and durable.",
  "My entire office switched to ODU. The productivity boost from stable internet is real.",
  "The outdoor mounting design is brilliant. Signal strength is consistently strong.",
  "Video conferencing quality has improved dramatically. No more pixelated calls!",
  "I tested multiple devices simultaneously and the performance remained excellent.",
  "The QR code tracking system for usage is convenient and transparent.",
  "Switching from 3G router to ODU feels like I went back to the future!",
  "The device never overheats even during extended usage. Build quality is solid.",
  "My download speeds are hitting 45 Mbps consistently. Exactly as advertised.",
  "The seamless 5G to 4G switching is flawless. Never noticed the transition.",
  "Worth every naira! Finally streaming without frustration.",
  "The ODU's performance during peak hours is still impressive. No speed throttling.",
  "My small business benefited greatly from this stable connection. Revenue actually increased!",
  "The technical support team explained all the features thoroughly. Great after-sales service.",
  "64 connected devices and it didn't break a sweat. This device is incredibly powerful.",
  "The upload speed is surprisingly fast. Perfect for content creators like me.",
  "No contract lock-in. The flexibility is refreshing compared to traditional broadband.",
  "My streaming quality went from 480p to 1080p consistently. ODU changed the game.",
  "The device stays cool even in Lagos heat. Engineering is top-notch.",
  "Internet speed test shows 48 Mbps down. Exactly what I'm paying for.",
  "My family stopped complaining about internet speed after we got the ODU!",
  "The monthly renewal through the app is simple and hassle-free.",
  "I've recommended this to 5 friends already. All of them are extremely satisfied.",
  "The ODU's signal penetration through walls is better than I expected.",
  "No more waiting for engineer visits. Installation was same-day. Incredible!",
  "The device manual was comprehensive. Everything is well documented.",
  "My productivity has increased by 30% thanks to stable, fast internet.",
  "The ODU performs better than the fiber connection my neighbor has!",
  "Zero complaints after 4 months of daily use. This is reliability.",
  "Download manager shows consistent 49 Mbps. Can't ask for better.",
  "The parental controls UI is user-friendly. Managing screen time is effortless now.",
  "Great",
  "Nice",
  "Good read",
  "Very helpful"
];

// Helper function to get random item from array
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Helper function to get random name with ethnic mix
function getRandomName() {
  const nameSource = Math.random();
  if (nameSource < 0.33) {
    return getRandomItem(igoNames);
  } else if (nameSource < 0.66) {
    return getRandomItem(yorubaNames);
  } else {
    return getRandomItem(hausaNames);
  }
}

// Helper function to generate random date
function getRandomDate() {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 200); // Random date within 200 days
  const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  
  // Add random time
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  date.setHours(hours, minutes);
  
  return date;
}

// Helper function to format date
function formatDate(date) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const dateStr = date.toLocaleDateString('en-US', options);
  const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return `${dateStr} at ${timeStr}`;
}

// Helper function to get avatar color based on name
function getAvatarColor(name) {
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)'
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

// Generate and render comments
function generateComments() {
  const commentsList = document.getElementById('commentsList');
  const totalComments = 52;
  const generatedComments = [];
  
  // Priority locations to appear at the top
  const priorityLocations = ['Odenigwe', 'Behind Flat', 'Green House'];
  let priorityIndex = 0;
  
  for (let i = 0; i < totalComments; i++) {
    const name = getRandomName();
    // Use priority locations first, then random ones
    const location = i < priorityLocations.length ? priorityLocations[i] : getRandomItem(locations);
    const date = getRandomDate();
    const comment = getRandomItem(comments);
    const avatarColor = getAvatarColor(name);
    
    generatedComments.push({
      name,
      location,
      date,
      comment,
      avatarColor,
      initials: name.charAt(0).toUpperCase()
    });
  }
  
  // Render comments
  generatedComments.forEach((commentData, index) => {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment-item';
    commentElement.style.animationDelay = `${index * 0.05}s`;
    
    const formattedDate = formatDate(commentData.date);
    
    commentElement.innerHTML = `
      <div class="comment-avatar" style="background: ${commentData.avatarColor};">
        ${commentData.initials}
      </div>
      <div class="comment-content">
        <div class="comment-header">
          <div class="comment-author">${commentData.name}</div>
        </div>
        <div class="comment-meta">
          <div class="comment-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>${commentData.location}</span>
          </div>
          <div class="comment-date">
            <i class="far fa-calendar"></i>
            <span>${formattedDate}</span>
          </div>
        </div>
        <p class="comment-text">${commentData.comment}</p>
      </div>
    `;
    
    commentsList.appendChild(commentElement);
  });
}

// Handle comment form submission
function handleCommentSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById('formName').value;
  const location = document.getElementById('formLocation').value;
  const comment = document.getElementById('formComment').value;
  
  if (!name || !location || !comment) {
    alert('Please fill in all fields');
    return;
  }
  
  // Show success message
  const successMessage = document.getElementById('successMessage');
  successMessage.classList.add('show');
  
  // Reset form
  document.getElementById('commentForm').reset();
  
  // Hide success message after 4 seconds
  setTimeout(() => {
    successMessage.classList.remove('show');
  }, 4000);
}

// Buy ODU Button functionality
const buyOduBtn = document.querySelector('.btn-buy-odu');
if (buyOduBtn) {
  buyOduBtn.addEventListener('click', () => {
    window.open('https://wa.me/2347018080377?text=Hi! I am interested in buying the Airtel SmartConnect 5G ODU package. Can you provide more details?', '_blank');
  });
}

// Generate comments on page load
window.addEventListener('load', () => {
  generateComments();
  
  // Set up comment form
  const commentForm = document.getElementById('commentForm');
  if (commentForm) {
    commentForm.addEventListener('submit', handleCommentSubmit);
  }
});

console.log('ABS Vendor article page with comments loaded successfully!');

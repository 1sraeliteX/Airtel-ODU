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
  "This is incredibly helpful! Thank you so much.",
  "Really good explanation, I finally understand now.",
  "Love this article, very well written!",
  "Exactly what I was looking for. Great content!",
  "This is amazing! Highly recommend reading this.",
  "Very informative and easy to understand.",
  "Perfect breakdown of the topic!",
  "Brilliant work! This deserves more recognition.",
  "The best article I've read on this subject.",
  "Absolutely brilliant! Can't wait for more.",
  "This has changed my perspective completely.",
  "Simply outstanding content!",
  "One of the most helpful articles ever.",
  "This is gold! Thanks for sharing.",
  "Couldn't have explained it better myself.",
  "This is the clarity I needed!",
  "Fantastic article, very comprehensive!",
  "This information is pure gold!",
  "Best investment of my time today.",
  "This is what quality content looks like!",
  "Extremely well done!",
  "The most detailed explanation I've found.",
  "This cleared up all my confusion!",
  "Genuinely impressed with this quality.",
  "This is genuinely helpful. Thank you!",
  "So well explained and easy to follow!",
  "This is exactly what I needed!",
  "Absolutely phenomenal content!",
  "This deserves thousands of shares!",
  "The best guide I've come across!",
  "Bookmarking this for future reference!",
  "This is incredibly well-researched!",
  "Every word of this is valuable!",
  "This article is a game-changer!",
  "Finally found the answer I needed!",
  "This is pure value right here!",
  "Couldn't have asked for better!",
  "This is going to help so many people!",
  "Outstanding work! Really appreciated.",
  "This is the most helpful thing I've read.",
  "Brilliant explanation throughout!",
  "This cleared everything up for me!",
  "Absolutely perfect timing for this article.",
  "This is exactly what I was searching for.",
  "Can't thank you enough for this!",
  "This article is superb!",
  "The quality of this content is exceptional!",
  "I'm genuinely amazed by this article.",
  "This has been incredibly insightful!",
  "Best explanation on this topic!",
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

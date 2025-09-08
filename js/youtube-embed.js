// YouTube Video Embed Helper

// Function to create YouTube embed HTML
function createYouTubeEmbed(videoId, title = "YouTube Video") {
    return `
        <div class="youtube-embed">
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}" 
                    title="${title}"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
}

// Function to extract YouTube video ID from URL
function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Function to add YouTube video to article content
function addYouTubeVideo(articleId, videoId, title) {
    const article = articlesData.find(a => a.id === articleId);
    if (article) {
        const embedHTML = createYouTubeEmbed(videoId, title);
        article.content += embedHTML;
    }
}

// Sample YouTube videos for demonstration
const sampleVideos = [
    {
        articleId: 1,
        videoId: "dQw4w9WgXcQ", // Replace with actual Lithuanian cultural video
        title: "Lithuanian Independence Day Celebration"
    },
    {
        articleId: 2,
        videoId: "dQw4w9WgXcQ", // Replace with actual Lithuanian language video
        title: "Learning Lithuanian Language"
    }
];

// Add sample videos to articles
document.addEventListener('DOMContentLoaded', function() {
    sampleVideos.forEach(video => {
        addYouTubeVideo(video.articleId, video.videoId, video.title);
    });
});

// Export functions for use in other files
window.createYouTubeEmbed = createYouTubeEmbed;
window.extractYouTubeId = extractYouTubeId;
window.addYouTubeVideo = addYouTubeVideo;

import React, { useState, useEffect } from 'react';

const InfiniteScrollVideos = () => {
  // Initial data with actual URLs
  const initialData = [
    {
      id: 1,
      title: "Traveling to Paris soon? Add this to your list of places to see…",
      source: "TikTok",
      date: "3 months ago",
      source_logo: "https://serpapi.com/searches/65714fa415afff18310c8bd7/images/772d922b46ae259042e3b2e6362a33f1ddc4d9a5e167c3ab60b161b2164ea67e.png",
      profile_picture: "https://serpapi.com/searches/65714fa415afff18310c8bd7/images/772d922b46ae2590edb26aafbc972527f77d9e45e64a5563de9a4118b4f1b81b.jpeg",
      profile_name: "alliegoodbun",
      views: "2.4M+ views",
      duration: "0:53",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRljmPL0alP-aToYpbZx0nMHL-j5G_iYCmnkrqssxmUoP7A&s",
      link: "https://www.tiktok.com/@alliegoodbun/video/7271418607798619397",
    },
    {
      id: 2,
      title: "This is how much we spent in Paris on Luxury Staycation",
      source: "YouTube",
      date: "6 months ago",
      source_logo: "https://serpapi.com/searches/65714fa415afff18310c8bd7/images/772d922b46ae2590a865e2587cde228bb471ba8cdd95b24b3290ad0c86f82c52.png",
      profile_picture: "https://serpapi.com/searches/65714fa415afff18310c8bd7/images/772d922b46ae259082ab7ec717788a0d1b32d1aa3d29c850237e1e25c749fc3b.jpeg",
      profile_name: "Desi Couple On The Go",
      views: "1.8M+ views",
      duration: "0:59",
      thumbnail: "https://i.ytimg.com/vi/qH8xPkIJZF8/hqdefault.jpg?sqp=-oaymwEGCNcCENwD&rs=AMzJL3mn5sZ_-B_rMTg-s2GX3KP7m2e4Xg",
      link: "https://www.youtube.com/watch?v=qH8xPkIJZF8",
    },
    // ... Add more data as needed
  ];

  const [videos, setVideos] = useState(initialData);
  const [hasMore, setHasMore] = useState(true);

  // Function to load more videos
  const loadMoreVideos = () => {
    if (videos.length >= 100) {
      setHasMore(false); // Stop loading after 100 items
      return;
    }

    setTimeout(() => {
      setVideos((prevVideos) => [
        ...prevVideos,
        ...initialData, // Appending the same data for demonstration
      ]);
    }, 1000);
  };

  // Detect when user scrolls to bottom
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      loadMoreVideos();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Infinite Scroll Video Feed</h1>
      <div style={styles.videoList}>
        {videos.map((video) => (
          <div key={video.id} style={styles.videoCard}>
            <img src={video.thumbnail} alt="Thumbnail" style={styles.thumbnail} />
            <div style={styles.videoInfo}>
              <img src={video.profile_picture} alt="Profile" style={styles.profilePicture} />
              <div>
                <h2 style={styles.videoTitle}>{video.title}</h2>
                <p style={styles.subInfo}>
                  <img src={video.source_logo} alt={video.source} style={styles.sourceLogo} />
                  <span>{video.views}</span> • <span>{video.date}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {hasMore && <p style={styles.loadingText}>Loading more videos...</p>}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  videoList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  videoCard: {
    width: '300px',
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  thumbnail: {
    width: '100%',
    borderRadius: '8px',
  },
  videoInfo: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  profilePicture: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  videoTitle: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '5px',
  },
  subInfo: {
    fontSize: '14px',
    color: '#888',
    display: 'flex',
    alignItems: 'center',
  },
  sourceLogo: {
    width: '18px',
    height: '18px',
    marginRight: '5px',
  },
  loadingText: {
    color: '#888',
    fontSize: '16px',
    marginTop: '20px',
  },
};

export default InfiniteScrollVideos;


// api = https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json

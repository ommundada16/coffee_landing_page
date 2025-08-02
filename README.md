Coffee Brew Website
A modern, responsive, multi-page coffee shop website featuring an engaging design, smooth animations, and a unique "crayon wipe" page transition effect.

Project Description
This website is a front-end project designed for a fictional coffee shop named "Coffee Brew." It is built using HTML5, CSS3 with Tailwind CSS for utility classes, and vanilla JavaScript.

Key features include:

A responsive and clean layout that adapts to different screen sizes.

A dynamic side menu for easy navigation.

An animated masonry-style image gallery on the homepage.

Smooth page transitions using a custom "crayon wipe" effect that simulates a page being colored over with a yellow crayon.

Page content and masonry items fade in with a subtle slide-up effect as they become visible.

File Structure
The project is organized into the following file structure:

/
├── index.html           # The homepage
├── about.html           # The About Us page
├── menu.html            # The Our Menu page
├── booking.html         # The Book a Table page
├── style.css            # Custom CSS for layout, animations, and transitions
├── script.js            # JavaScript for menu, page transitions, and image galleries
└── /images/             # Directory containing all image assets
    ├── pexels-apgpotr-683039.jpg
    ├── pexels-brigitte-tohm-36757-143642.jpg
    ├── pexels-chevanon-302899.jpg
    ├── pexels-chevanon-324028.jpg
    └── ... (other image files)

Setup and Usage
To run this project, simply open any of the HTML files (index.html, about.html, etc.) in your web browser. There are no dependencies to install, and all external libraries (Tailwind CSS, Font Awesome, Google Fonts) are loaded via CDN.

Page Transitions
The custom page transition is handled by style.css and script.js.

The .page-transition-overlay element in each HTML file is a full-screen yellow div.

The script.js listens for clicks on internal links and triggers a clip-path animation defined in style.css to create the "crayon wipe" effect.

The new page content, wrapped in a .page-content div, then fades in smoothly after a short delay.

Image Gallery
The masonry image gallery on the homepage is powered by custom CSS and a small JavaScript snippet in script.js that:

Sets up a simple image slider in two of the gallery panels.

Adds a "fade-in on scroll" effect using the Intersection Observer API.

Customization
Colors: To change the "crayon wipe" color, modify the background-color property of .page-transition-overlay in style.css.

Fonts: The project uses "Unbounded" for headings and "Inter" for body text. You can easily change these by updating the <link> tags in the HTML files and the font-family properties in style.css.

Images: All image assets are located in the images directory. To use your own, replace the existing files with your own and update the file paths in the <img> tags of index.html.

Timing: You can adjust the speed of the page transitions by changing the transition and @keyframes durations in style.css and the setTimeout duration in script.js to match.

Here’s the revised, clean version of your `README.md` **without the file structure** section:

---

# ☕ Coffee Brew Website

A modern, responsive multi-page website for a fictional coffee shop, built with **HTML5**, **CSS3 (Tailwind CSS)**, and **vanilla JavaScript**.

## 🚀 Features

* Fully responsive and mobile-friendly layout
* Animated **side menu panel**
* **Masonry-style image grid** with scroll-triggered fade-ins
* Unique **“crayon wipe” page transition** effect
* Smooth slide-up animations for content

## 🛠️ Usage

1. **No installation needed**
2. Open any HTML file (e.g., `index.html`) in your browser
3. All libraries (Tailwind, Google Fonts) are loaded via CDN

## ✨ Page Transitions

* Uses `.page-transition-overlay` and `clip-path` for crayon effect
* Triggered by internal link clicks via JavaScript
* New content fades in via `.page-content` wrapper

## 🖼️ Image Grid

* Responsive **masonry layout** with subtle scroll animations
* Includes **auto-sliding image panels**
* Intersection Observer handles scroll-based fade-ins

## 🎨 Customization

* **Colors:** Change `.page-transition-overlay` background in `style.css`
* **Fonts:** Edit `<link>` tags in HTML or `font-family` in `style.css`
* **Images:** Replace files in `/images/` and update `<img>` paths
* **Timing:** Tweak durations in `style.css` keyframes or JS `setTimeout`

---

Let me know if you want a downloadable `.md` file or want to add demo screenshots or badges.

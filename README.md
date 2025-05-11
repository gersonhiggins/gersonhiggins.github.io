# ⚡️ Gerson Higgins Portfolio

A clean, responsive, and customizable portfolio template for showcasing my skills, projects, and achievements as a **Full Stack Developer**.

<p align="center">
  <kbd>
    <img src="https://user-images.githubusercontent.com/53429438/106779355-e9cd9e80-666c-11eb-9417-8a4b54441bc6.gif" alt="Portfolio Preview">
  </kbd>
</p>

---

## 📑 Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)
- [Portfolio Sections](#portfolio-sections)
- [Deployment](#deployment)
- [Contact](#contact)

---

## 🧠 About

This portfolio is designed to highlight my journey as a Full Stack Developer. It showcases my skills in **React.js**, **Ruby on Rails**, and other modern technologies, along with my projects, education, and achievements.

---

## 🚀 Features

- ✅ Fully responsive design
- ✅ Dynamic sections for skills, projects, and education
- ✅ GitHub integration to showcase open-source contributions
- ✅ Customizable themes and animations
- ✅ Easy deployment on GitHub Pages or Netlify

---

## 🛠 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/gersonhiggins/portfolio.git
   ```

2. **Navigate to the project directory**  
   ```bash
   cd portfolio
   ```

3. **Install dependencies**  
   ```bash
   npm install
   ```

4. **Start the development server**  
   ```bash
   npm start
   ```

---

## ✏️ How to Use

1. Open the `portfolio.js` file to customize your content:
   - Update your **name**, **skills**, **projects**, and **social links**.
   - Modify **education** and **work experience** as needed.

2. To change the theme or color scheme:
   - Edit `_globalColor.scss` located in the `src` directory.

3. To add your resume:
   - Replace `resume.pdf` in `src/containers/greeting/resume/` with your own file.

---

## 🧰 Technologies Used

- **React.js** – Building the user interface
- **Sass** – Styling and theming
- **Font Awesome** – Icons
- **Lottie Animations** – Interactive animations
- **GitHub Pages** – Deployment

---

## 🗂 Portfolio Sections

- ✅ Summary and About Me  
- ✅ Skills  
- ✅ Education  
- ✅ Work Experience  
- ✅ Projects  
- ✅ Achievements & Certifications  
- ✅ Contact Information  

---

## 🚚 Deployment

### Deploying to GitHub Pages

1. **Install the gh-pages package**  
   ```bash
   npm install --save gh-pages
   ```

2. **Add the following scripts to your `package.json`**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**  
   ```bash
   npm run deploy
   ```

### Deploying to Netlify

1. Connect your GitHub repository to [Netlify](https://netlify.com).
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build`
3. Click **Deploy Site**.

---

## 🙏 Acknowledgment
Special thanks to [https://github.com/saadpasta](Saad Pasta) for providing the portfolio template that served as the foundation for this project.


## 📬 Contact

Feel free to reach out for collaboration or inquiries:

- 📧 **Email**: [gahg.10gerson@gmail.com](mailto:gahg.10gerson@gmail.com)  
- 🌐 **Portfolio**: [gersonhiggins.github.io](https://gersonhiggins.github.io)  
- 💼 **LinkedIn**: [linkedin.com/in/gersonh](https://www.linkedin.com/in/gersonh/)  
- 🐙 **GitHub**: [github.com/gersonhiggins](https://github.com/gersonhiggins)
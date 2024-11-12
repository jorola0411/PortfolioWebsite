import React from "react";

function Footer() {
return(
    <footer className="py-4">
      <div className="lg:container mx-auto flex justify-between items-center border-t border-black pt-2 font-karma">
        <span className="text-black">Jose Alejandro Orola</span>
    
        <div className="flex space-x-4 justify-center">
            <a href="https://github.com/jorola0411" target="_blank">
              <img src="./src/assets/githublogo.png" alt="GitHub Logo" className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com/in/jose-orola" target="_blank">
            <img src="./src/assets/linkedinlogo.png" alt="Linkedin Logo" className="w-10 h-10" />
            </a>
          </div>

        <span className="text-black font-karma">jorola0411@gmail.com</span>

      </div>
    </footer>
    )
}
export default Footer;
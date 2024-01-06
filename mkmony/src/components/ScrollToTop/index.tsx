import React from "react"

export const ScrollToTop: React.FC = () => {
    const styles = `
        .scroll_To_Top {
          position: fixed;
          bottom: 15px;
          right: 20px;
          z-index: 1000;
          display: none;
        }

        .fa-caret-square-up {
          color: rgb(63, 159, 66);
        }

        .fa-caret-square-up:hover {
          color: rgb(63, 159, 66);
        }
    `

	return (
        <a href="#" className="scroll_To_Top" title="Go to Top">
            <style>{styles}</style>
            <i className="fas fa-3x fa-caret-square-up"></i>
        </a>
	)
}
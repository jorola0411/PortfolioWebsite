import { useNavigate } from 'react-router-dom'

export default function Ccoffee({ showBackButton = true }) {
  const navigate = useNavigate()
  return (
    <>
      <div className="p-8 bg-offwhite dark:bg-shadowgray text-caviar dark:text-offwhite  border-x dark:border-cream ">

        {showBackButton && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-4 sm:h-4 md:h-8 md:w-8 lg:w-10 lg:h-10 xl:h-32 xl:w-32 hover:scale-110 transition-transform ease-in-out fill-caviar dark:fill-offwhite cursor-pointer"
            viewBox="0 0 640 640"
            onClick={() => navigate(-1)}
          >
            <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
          </svg>
        )}

        <div className="flexbox justify-center items-center mx-auto">
          <h1 className="font-bold text-5xl text-center">C Coffee</h1>
          <hr />

        </div>
      </div>
    </>
  )
}
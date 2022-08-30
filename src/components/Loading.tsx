import { memo } from 'react'

interface Props {
  msg?: string
}

const Loading = ({ msg = 'Loading...' }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-12">
      <svg
        className="mt-3"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="72px"
        height="72px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#000"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
      {msg && (
        <small className="mt-6 text-center font-bold text-[#000]">{msg}</small>
      )}
    </div>
  )
}

export default memo(Loading)

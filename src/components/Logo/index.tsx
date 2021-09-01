export interface LogoProps {
    width: number,
    height: number
}

export const Logo:React.FC<LogoProps> = ({ width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width}
    height={height}
  >
    <path fill="#cae8f9" d="M0 0h512v512H0z" />
    <path fill="#a3d9f6" d="M255.75 0H512v512H255.75z" />
    <path fill="#00a6ff" d="M60 60h392v392H60z" />
    <path fill="#08f" d="M255.75 60H452v392H255.75z" />
    <path
      // eslint-disable-next-line max-len
      d="M258.66 127.43H175.5v260.9h30V283.1h53.16c42.92 0 77.84-34.92 77.84-77.84 0-42.91-34.92-77.83-77.84-77.83zm0 125.67H205.5v-95.67h53.16c26.38 0 47.84 21.46 47.84 47.83 0 26.38-21.46 47.84-47.84 47.84z"
      fill="#fff"
    />
    <path
      // eslint-disable-next-line max-len
      d="M336.5 205.26c0 42.92-34.92 77.84-77.84 77.84h-2.91v-30h2.91c26.38 0 47.84-21.46 47.84-47.84 0-26.37-21.46-47.83-47.84-47.83h-2.91v-30h2.91c42.92 0 77.84 34.92 77.84 77.83z"
      fill="#e1e1e3"
    />
  </svg>
);

interface IDiagram {
  sum?: number | string | undefined;
  height?: number | string | undefined;
  width?: number | string | undefined;
}

export function Diagram({ sum, height = 23 }: IDiagram) {
  return (
    <div className="wrapper__svg">
      <svg
        width="19"
        height={height}
        viewBox="0 0 19 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.7667 19C11.7667 20.6569 13.1098 22 14.7667 22H15C16.6569 22 18 20.6569 18 19V11.6364C18 9.97951 16.6569 8.63636 15 8.63636H14.7667C13.1098 8.63636 11.7667 9.97951 11.7667 11.6364V19Z"
          stroke="#737373"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 19C1 20.6569 2.34314 22 4 22H4.23333C5.89019 22 7.23333 20.6569 7.23333 19V4C7.23333 2.34315 5.89019 1 4.23333 1H4C2.34315 1 1 2.34315 1 4V19Z"
          stroke="#737373"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {sum && <p className="flex">{sum}</p>}
    </div>
  );
}
